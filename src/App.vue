<template>
  <html class="dark">
    <div class="common-layout">
    <el-container>
      <el-container direction='horizontal'>
        <el-container direction='vertical' style="min-width:390px; max-width:390px; height: calc(100vh - 72px - 9px - 16px); min-height: 447px;" >
          <el-aside class="kuai"  style="
            width: 100%;
            height:112px;
            min-height:112px;
            max-height:112px;
            border-radius: 10px;
          ">
            <NavbarTop></NavbarTop>
          </el-aside>
          <!-- 左上角的分割线 -->
          <el-aside class="line" style="width: 100%; height:9px; "></el-aside>
          <el-aside class="kuai" style="
            width: 100%;
            height: calc(100% - 112px - 9px);
            min-height: 344px;

            border-radius: 10px;
          ">
            <MusicKu></MusicKu>
          </el-aside>
        </el-container>
        <!-- 竖着的分割线 -->
        <el-container class="line" direction='vertical' style="min-width:9px; max-width:9px;"></el-container>
        <el-container direction='vertical' style="min-width:460px; height: calc(100vh - 72px - 9px - 16px); min-height: 465px;">
          <el-main class="kuai" style="
              max-width:100%;
              height: 100%;
              min-height: 465px;
              padding: 0px;
              border-radius: 10px;
            ">
            <MainWindow></MainWindow>
          </el-main>
        </el-container>
      </el-container>
      <!-- 横着的分割线 -->
      <el-container class="line" direction='vertical' style="height: 9px; width: 100%;"></el-container>

      <el-footer style="
              width: 100%;
              height: 72px;
              border-radius: 10px;
              min-width:859px
            ">
            <BottonBar></BottonBar>
      </el-footer>
    </el-container>

  </div>
  </html>
  
</template>

<script setup>
import NavbarTop from './components/NavbarTop.vue'
import MusicKu from './components/MusicKu.vue';
import MainWindow from './components/MainWindow.vue'
import BottonBar from './components/BottonBar.vue'

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
    margin: 0;
    padding: 0;
}

html.dark{
  padding: 8px 8px 8px 8px;
}
</style>

