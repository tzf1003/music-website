<template>
  <el-container class="login-container">
    <el-main class="login-form-container">
      <div class="login-logo">WUDI Music</div>
      <div class="login-title">注册即可免费收听音乐</div>
      <el-form @submit.prevent="submitForm">
        <el-form-item>
          <el-input type="username" v-model="username" placeholder="账号" required></el-input>
          <p v-if="usernameIsBeanregistered" style="color: red;">该账号已经被注册！</p>
        </el-form-item>
        <el-form-item>
          <el-input type="email" v-model="email" placeholder="电子邮件地址" required></el-input>
          <p v-if="emailIsBeanregistered" style="color: red;">该邮箱已经被注册！</p>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="password" placeholder="密码" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="usernameIsBeanregistered ||  emailIsBeanregistered || username=='' ||email=='' ||password==''" type="primary" long native-type="submit" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
      <div class="login-footer">
        已经有帐号？
        <router-link to="/login">
          <a>立即登录！</a>
        </router-link>
      </div>
    </el-main>
  </el-container>
</template>
  
<script setup>
import { ref,watch  } from 'vue';
import apiService from '@/tools/apiService'; // 确保路径正确
const username = ref('');
const email = ref('');
const password = ref('');
const emailIsBeanregistered = ref(false)
const usernameIsBeanregistered= ref(false)
const register =()=>{
  apiService.registerAccount(username.value,email.value,password.value)
}
const submitForm = () => {
  console.log('Form submitted with email:', email.value);
}

watch(email, (newValue, oldValue) => {

  if (newValue !== oldValue && newValue) {
    // 当email变化且不为空时，调用isRegisterByEmail方法
    apiService.isRegisterByEmail(newValue).then((result) => {
      emailIsBeanregistered.value=result;

    });
  }
});

watch(username, (newValue, oldValue) => {
  console.log(username);
if (newValue !== oldValue && newValue) {
  // 当email变化且不为空时，调用isRegisterByEmail方法
  apiService.isRegisterByUsername(newValue).then((result) => {
    console.log(result);
    usernameIsBeanregistered.value=result;

  });
}
});
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
  