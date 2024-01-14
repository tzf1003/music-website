<!-- 这里是主要窗口 -->
<template>
  <div>
    <el-container class="main-layout">
      <el-header>
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
              font-family: 微软雅黑;
              font-size: 14px;
              font-weight: bold;
            ">开通VIP会员</el-button>
          </div>
          <div class="button app">
            <el-button color="#121212" size="default" round style="
            margin-left: 10px;
            font-family: 微软雅黑;
            font-size: 14px;
            font-weight: bold;
            ">安装应用</el-button>
          </div>
          <!-- 通知 -->
          <div class="button notice">
            <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
              <i class="bi bi-bell"></i>
              <!-- <i class="bi bi-bell-fill"></i> -->
            </el-button>
          </div>
          <div class="button user">
            <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
              <i class="bi bi-person"></i>
            </el-button>
          </div>


        </div>
      </el-header>

      <el-main style="color: aliceblue;font-size: 20px;">
        <HomePage/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref } from "vue";
import HomePage from "./Main/HomePage.vue";
</script>

<style>
.main-layout .el-header {
  z-index: 999;
  border-bottom: 1px solid var(#121212);
  padding: 0;
  position: sticky;
  top: 0;
  height: 64px;
  display: flex;
  background-image: radial-gradient(transparent 1px,#121212 1px);
  background-size: 1px 1px;
  backdrop-filter: saturate(50%) blur(3px);
}


.main-layout .el-main {
  padding: 0;
}

.el-header .forward-back {

  width: 25%;
  display: flex;
  justify-content:flex-start;
  align-items:center;

}

.el-header .explore-user {
  width: 75%;
  display: flex;
  justify-content:flex-end;
  align-items:center;
}


</style>
