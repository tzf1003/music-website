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
            <HeaderUser/>
            
        </div>
    </div>
</template>

<script setup>
import HeaderUser from './HeaderUser';


</script>

<style lang="less">
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
