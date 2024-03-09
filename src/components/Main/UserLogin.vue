<template>
  <el-container class="login-container">
    <el-main class="login-form-container">
      <div class="login-logo">WUDI Music</div>
      <div class="login-title">欢迎登录，免费收听音乐</div>
      <el-form @submit.prevent="submitForm">
        <el-form-item>
          <el-input type="username" v-model="username" placeholder="用户名" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="password" placeholder="密码" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 75%;" type="text" v-model="captcha" placeholder="验证码" required></el-input>
          <img :src="captchaImage" alt="验证码" @click="refreshCaptcha" style="cursor: pointer;width: 25%;">
        </el-form-item>
        
        <el-form-item>
          <el-button :disabled="username=='' || password=='' || captcha==''" @click="doLogin" type="primary" long native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="login-footer">
        没有帐号？
        <router-link to="/register">
          <a>立即注册！</a>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>
  
<script setup>
import { ref } from 'vue';
import apiService from '@/tools/apiService'; // 确保路径正确
const username = ref('');
const password = ref('');
const captcha=ref('');
const captchaImage = ref('');
const userKey = ref('');

//登录操作
const doLogin= ()=>{
  apiService.login(username.value, password.value, userKey.value, captcha.value)
  
}

// 定义一个方法来获取验证码
const getCaptcha = async () => {
  try {
    const result = await apiService.getCaptcha(); // 调用apiService中的getCaptcha方法
    captchaImage.value = result.captcherImg; // 设置验证码图片
    userKey.value = result.userKey; // 保存用户密钥，可能在后续验证时需要
    console.log("userKey.value"+userKey.value)
    console.log("captchaImage.value"+captchaImage.value)
  } catch (error) {
    console.error(error);
  }
};
// 定义一个方法来刷新验证码
const refreshCaptcha = () => {
  getCaptcha(); // 重新获取验证码
};
// 组件挂载时获取验证码
getCaptcha();

const submitForm = () => {
  console.log('Form submitted with username:', username.value);
}
</script>
  
<style>
.login-container {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
}

.login-logo {
  /* 根据实际Logo样式添加样式 */
}

.login-title {
  margin-bottom: 20px;
  /* 根据实际样式添加样式 */
}

.login-options {
  margin-top: 20px;
}

.login-footer {
  margin-top: 20px;
  font-size: 15px;
  /* 根据实际样式添加样式 */
}

.login-captcha {
  margin-top: 20px;
  font-size: small;
  color: grey;
  text-align: center;
}
</style>
  