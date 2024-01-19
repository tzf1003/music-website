<!-- 这里是主要窗口 -->
<template>
  <el-scrollbar height="100%" @scroll="handleScroll">
    <el-container class="main-layout" >
      <el-header class="main-header">

        <SongSheetHeader :scroll-amplitude="scrollAmplitude"/>

        <!-- <HomeHeader/> -->
        <!-- <SearchHeader/> -->

      </el-header>
      <el-main style="color: aliceblue;font-size: 20px;">
        <!-- <HomePage/> -->
        <!-- <SearchPage/> -->
        <!-- <ListPage/> -->
        <ArtistPage />
      </el-main>
    </el-container>
  </el-scrollbar>
</template>

<script  setup>
import { ref } from "vue";
import HomePage from "./Main/HomePage.vue";
import SearchPage from "./Main/SearchPage.vue"
import HomeHeader from "./Main/MainHeader/HomeHeader.vue"
import SearchHeader from "./Main/MainHeader/SearchHeader.vue"
import ListPage from "./Main/ListPage.vue";
import SongSheetHeader from "./Main/MainHeader/SongSheetHeader.vue";
import SongSheetPage from "./Main/SongSheetPage.vue";
import ArtistPage from "./Main/ArtistPage.vue";

const scrollAmplitude = ref(0);

const handleScroll = ({ scrollTop }) => {
  scrollAmplitude.value = scrollTop

}

</script>

<style>

.main-header {
  
  width: 100%;
  z-index: 999;
  padding: 0;
  position: absolute;
  top: 0;
  height: 64px;
  display: flex;

  /* border-bottom: 1px solid var(#121212);
  background-image: radial-gradient(transparent 1px, #121212 1px);
  background-size: 1px 1px;
  backdrop-filter: saturate(50%) blur(3px); */
}

.main-layout .el-main {
  overflow: visible;
  padding: 0;
}
</style>
