import { ElMessage as Message } from 'element-plus'; // 导入Element Plus的Message组件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 引入NProgress的CSS样式
// NProgress配置（可选），这里可以自定义NProgress的一些行为
NProgress.configure({ showSpinner: true }); // 根据需要设置，showSpinner: true会显示加载器

// const API_BASE_URL = './api/'; // 你的API基础URL
const API_BASE_URL = window.location.origin + '/api/'; // 确保以斜杠结束


// 显示加载器
function showLoader() {
  NProgress.start();
}

// 隐藏加载器
function hideLoader() {
  NProgress.done();
}

// 保存token到localStorage，以便后续请求可以使用
function saveToken(token) {
  localStorage.setItem('authToken', token);
}

// 显示消息提示，使用Element Plus的Message组件
function showMessage(message, type = 'error') {
  Message({ message, type });
}

// 处理401错误，提示用户重新登录，并跳转到登录页面
function handle401Error() {
  showMessage('未登录或登录已过期，请重新登录。', 'warning');
  setTimeout(() => {
    window.location.href = '/login'; // 替换为你的登录页面URL
  }, 3000);
}

// 将对象转换为URL编码的字符串，用于application/x-www-form-urlencoded格式的请求体
function toUrlEncoded(obj) {
  return Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
}

// 统一处理响应，根据响应状态和返回的code值决定后续操作
async function handleResponse(response) {
  const data = await response.json(); // 假设服务器总是返回JSON格式的响应
  if (response.ok && data.code === "200") {
    return data.result; // 返回请求的结果部分
  } else if (response.status === 401) {
    handle401Error(); // 特别处理401错误
    // return Promise.reject(new Error('未登录或登录已过期'));
  } else {
    showMessage(data.message || '请求失败'); // 显示错误信息
    // return Promise.reject(new Error(data.message || '请求失败'));
  }
}

export default {
  // 使用fetchWithAuth方法发送需要认证的请求
  async fetchWithAuth(endpoint, method = 'GET', data = null) {
    const token = localStorage.getItem('authToken'); // 从localStorage获取保存的token
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = new Headers({
      'Authorization': `${token}`, // 在请求头中添加token进行认证
    });

    const config = {
      method: method,
      headers: headers,
    };

    if (data && method !== 'GET') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.body = toUrlEncoded(data); // 如果有数据发送，将其转换为URL编码的字符串
    }

    try {
      showLoader(); // 在发送请求前显示加载动画
      const response = await fetch(url, config);
      return await handleResponse(response); // 处理响应
    } catch (error) {
      showMessage(error.message); // 显示错误信息
      throw error;
    } finally {
      hideLoader(); // 请求完成后隐藏加载动画
    }
  },

  // 登录方法，成功后保存token
  async login(username, password, userKey, code) {
    const url = `${API_BASE_URL}login`; // 登录API的路径
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: toUrlEncoded({ username, password, userKey, code }), // 使用toUrlEncoded函数将用户名和密码转换为URL编码的字符串
    };

    try {
      showLoader();
      const response = await fetch(url, config);
      const data = await handleResponse(response); // 使用handleResponse处理响应
      if (response.ok) {
        var authorization = response.headers.get('authorization'); // 修改这里
        console.log(response.headers);
        if (authorization) {
          saveToken(authorization); // 如果响应中包含token，则保存它
          //在这里读取用户信息保存到缓存localStorage
          this.fetchWithAuth("user/info", "GET", null).then((result) => {
            localStorage.setItem('userInfo', JSON.stringify(result));
          });
          // 如果HTTP状态码为200，显示来自后台的消息，并跳转到主页
          Message.success(response.message || '登录成功!'); // 显示成功消息
          setTimeout(() => {
            window.location.href = '/'; // 跳转到主页
          }, 1500); // 延迟1.5秒后跳转，给用户时间看消息
          return data;
        } else {
          // throw new Error('Token is missing from the response');
        }
      }

    } catch (error) {
      showMessage(error.message);
      throw error;
    } finally {
      hideLoader();
    }
  },

  // 获取验证码的方法
  async getCaptcha() {
    const url = `${API_BASE_URL}captcha`; // 验证码API的路径
    const config = {
      method: 'GET',
      // 确保没有发送不必要的认证信息
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    };

    try {
      const response = await fetch(url, config); // 等待fetch请求完成
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // 处理非2xx响应
      }
      const result = await response.json(); // 等待解析响应体为JSON
      return result.result; // 返回解析后的数据
    } catch (error) {
      console.error("获取验证码失败:", error);
      throw error; // 将错误向上抛出，以便调用者处理
    }
  },
  // 注册账号函数
  async registerAccount(username, email, password) {
    const url = `${API_BASE_URL}user/register`; // 假定注册API的路径为 '/register'
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email: email,
        password: password,
        username: username
      })
    };

    try {
      const response = await fetch(url, config);
      const result = await response.json(); // 假设后台总是返回一个JSON对象
      if (response.ok) {
        // 如果HTTP状态码为200，显示来自后台的消息，并跳转到主页
        Message.success(result.message || '注册成功!'); // 显示成功消息
        setTimeout(() => {
          window.location.href = '/'; // 跳转到主页
        }, 1500); // 延迟1.5秒后跳转，给用户时间看消息
      } else {
        // 如果状态码不是200，显示错误消息
        Message.error(result.message || `注册失败，状态码: ${response.status}`);
      }
    } catch (error) {
      console.error("注册账号失败:", error);
      Message.error(error.message || '注册过程中发生错误');
    }
  },
  async isRegisterByEmail(email) {
    const url = new URL(`${API_BASE_URL}user/isRegisterByEmail`);
    // 添加查询参数
    url.searchParams.append('email', email);

    const config = {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' // 指定期望的响应格式为JSON
      })
    };

    try {
      const response = await fetch(url, config);
      const result = await response.json(); // 解析响应体为JSON

      if (response.ok) {
        return result.result
      } else {
        // 如果状态码不是200，显示错误消息
        Message.error(result.message || `查询失败，状态码: ${response.status}`);
      }
    } catch (error) {
      console.error("查询邮箱注册状态失败:", error);
      Message.error(error.message || '查询过程中发生错误');
    }
  },
  async isRegisterByUsername(username) {
    const url = new URL(`${API_BASE_URL}user/isRegisterByUsername`);
    // 添加查询参数
    url.searchParams.append('username', username);

    const config = {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' // 指定期望的响应格式为JSON
      })
    };

    try {
      const response = await fetch(url, config);
      const result = await response.json(); // 解析响应体为JSON

      if (response.ok) {
        return result.result
      } else {
        // 如果状态码不是200，显示错误消息
        Message.error(result.message || `查询失败，状态码: ${response.status}`);
      }
    } catch (error) {
      console.error("查询邮箱注册状态失败:", error);
      Message.error(error.message || '查询过程中发生错误');
    }
  }

}