<!-- 这里是主要窗口 -->
<template>
  <el-scrollbar height="100%" @scroll="handleScroll">
    <el-container class="main-layout" >
      <el-header class="main-header">

        <SongSheetHeader :isVisible="showDiv" />

        <!-- <HomeHeader/> -->
        <!-- <SearchHeader/> -->

      </el-header>
      <el-main style="color: aliceblue;font-size: 20px;">
        <!-- <HomePage/> -->
        <!-- <SearchPage/> -->
        <!-- <ListPage/> -->
        <SongSheetPage />
      </el-main>
    </el-container>
  </el-scrollbar>
</template>

<script  setup>
import { onMounted, onUnmounted, ref } from "vue";
import HomePage from "./Main/HomePage.vue";
import SearchPage from "./Main/SearchPage.vue"
import HomeHeader from "./Main/MainHeader/HomeHeader.vue"
import SearchHeader from "./Main/MainHeader/SearchHeader.vue"
import ListPage from "./Main/ListPage.vue";
import SongSheetHeader from "./Main/MainHeader/SongSheetHeader.vue";
import SongSheetPage from "./Main/SongSheetPage.vue";

const showDiv = ref(false);
const handleScroll = ({ scrollTop }) => {
  showDiv.value = scrollTop> 200
}
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
  background-image: radial-gradient(transparent 1px, #121212 1px);
  background-size: 1px 1px;
  backdrop-filter: saturate(50%) blur(3px);
}

.main-layout .el-main {
  padding: 0;
}
</style>
