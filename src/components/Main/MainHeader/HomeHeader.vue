<template>
    <div class="home-header">
        <!-- 前进后退按钮 -->
        <div class="forward-back">
            <div class="button back">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-chevron-left"></i>
                </el-button>
            </div>
            <div class="button forward">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-chevron-right"></i>
                </el-button>
            </div>
        </div>
        <div class="explore-user">
            <div class="button explore">
                <el-button color="#FFF" size="default" round style="
              font-size: 14px;
              font-weight: bold;
            ">开通VIP会员</el-button>
            </div>
            <div class="button app">
                <el-button color="#121212" size="default" round style="
            margin-left: 10px;
            font-size: 14px;
            font-weight: bold;
            ">安装应用</el-button>
            </div>
            <!-- 通知 -->
            <router-link to="/info">
                <div class="button notice">
                    <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                        <i class="bi bi-bell"></i>
                        <!-- <i class="bi bi-bell-fill"></i> -->
                    </el-button>
                </div>
            </router-link>

            <div class="button user">
                <el-dropdown trigger="click">
                    <!-- <el-button v-if="!isLogin" size="default" color="#121212" circle dark style="margin-left: 20px;">
                        <i class="bi bi-person"></i>
                    </el-button> -->
                    <el-avatar v-if="!isLogin" :icon="UserFilled" />
                    <el-avatar v-if="isLogin" :src="avatar" style="margin-left: 20px;">{{username}}</el-avatar>
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

                            <router-link to="/logout">
                                <el-dropdown-item :icon="Plus">退出</el-dropdown-item>
                            </router-link>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import apiService from '@/tools/apiService';
const isLogin=ref(false);
const username=ref('');
const avatar = ref('')

// 获取用户信息
//如果存在token，则访问
var token=localStorage.getItem('authToken');
if(token!=null && token!='' && token!=undefined){
    isLogin.value=true;
    const userData = apiService.fetchWithAuth("user/info", "GET", null).then((result) => {
        console.log(result);
        username.value=result.username;
        avatar.value = result.avatar
    });
}else{
    isLogin.value=false;
}

</script>

<style  lang="less">
.home-header {
    border-bottom: 1px solid var(#121212);
    background-image: radial-gradient(transparent 1px, #121212 1px);
    background-size: 1px 1px;
    backdrop-filter: saturate(50%) blur(3px);

    display: flex;
    width: 100%;
}

.home-header .forward-back {

    width: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.home-header .explore-user {
    width: 75%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.home-header .explore-user .user {
    margin-right: 20px;
}
</style>
