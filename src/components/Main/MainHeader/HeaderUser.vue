<template>
    <div class="button user">
        <el-dropdown trigger="click">
            <el-button v-if="!isLogin" size="default" color="#121212" circle dark style="margin-left: 20px;">
                <i class="bi bi-person"></i>
            </el-button>
            <!-- <el-avatar v-if="!isLogin" style="margin-left: 20px;" :icon="UserFilled" /> -->
            <el-avatar v-if="isLogin" :src="avatar" style="margin-left: 20px;">{{ username }}</el-avatar>
            <template #dropdown>
                <el-dropdown-menu v-if="!isLogin">
                    <router-link to="/login">
                        <el-dropdown-item :icon="CirclePlusFilled">登录</el-dropdown-item>
                    </router-link>

                    <router-link to="/register">
                        <el-dropdown-item :icon="Plus">注册</el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
                <el-dropdown-menu v-if="isLogin">
                    <router-link to="/user/home">
                        <el-dropdown-item :icon="CirclePlusFilled">个人中心</el-dropdown-item>
                    </router-link>
                        <el-dropdown-item :icon="Plus" v-if="isAdmin" @click="toggleAdminDialog">后台管理</el-dropdown-item>

                    <router-link to="/logout">
                        <el-dropdown-item :icon="Plus">退出</el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { ref } from "vue";
import apiService from '@/tools/apiService';
import { UserFilled } from '@element-plus/icons-vue'
import { EventBus } from '@/tools/EventBus.js';

const isLogin = ref(false);
const username = ref('');
const avatar = ref('')
const isAdmin = ref(false)

var token = localStorage.getItem('authToken');
if (token != null && token != '' && token != undefined) {
    isLogin.value = true;
    //在这里读取用户信息保存到缓存localStorage
    apiService.fetchWithAuth("user/info", "GET", null).then((result) => {
        localStorage.setItem('userInfo', JSON.stringify(result));
    });
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    username.value = userInfo.username;
    avatar.value = userInfo.avatar
    if (userInfo.role == "ROLE_ADMIN") {
        isAdmin.value = true
        console.log(isAdmin.value);
    }
} else {
    isLogin.value = false;
}
function toggleAdminDialog() {
  EventBus.emit('toggle-admin-dialog');
}
</script>

<style lang="less"></style>
