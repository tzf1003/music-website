<!-- 这里是主要窗口 -->
<template>
  <div>
    <el-container class="main-layout">
        <el-header class="main-header">
        <HomeHeader/>
        <!-- <SearchHeader/> -->
      </el-header>
      <el-main style="color: aliceblue;font-size: 20px;">
        <!-- <HomePage/> -->
        <!-- <SearchPage/> -->
        <ListPage/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref } from "vue";
import HomePage from "./Main/HomePage.vue";
import SearchPage from "./Main/SearchPage.vue"
import HomeHeader from "./Main/MainHeader/HomeHeader.vue"
import SearchHeader from "./Main/MainHeader/SearchHeader.vue"
import ListPage from "./Main/ListPage.vue";
</script>

<style>

.main-header {
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



</style>
