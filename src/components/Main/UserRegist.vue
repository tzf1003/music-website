<template>
    <el-container class="login-container">
      <el-main class="login-form-container">
        <div class="login-logo">WUDI Music</div>
        <div class="login-title">注册即可免费收听音乐</div>
        <el-form @submit.prevent="submitForm">
          <el-form-item>
            <el-input type="email" v-model="email" placeholder="电子邮件地址" required></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="password" placeholder="密码" required></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" long native-type="submit">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="login-footer">
          已经有帐号？<a href="#">立即登录</a>
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const email = ref('');
  const password = ref('');
  
  const submitForm = () => {
    console.log('Form submitted with email:', email.value);
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
  