<template>
  <html class="dark">
  <div class="common-layout">
    <el-container>
      <el-container direction='horizontal'>
        <el-container direction='vertical'
          style="min-width:390px; max-width:390px; height: calc(100vh - 72px - 9px - 16px); min-height: 447px;">
          <el-aside class="kuai" style="
            width: 100%;
            height:112px;
            min-height:112px;
            max-height:112px;
            border-radius: 10px;
          ">
            <NavbarTop />
          </el-aside>
          <!-- 左上角的分割线 -->
          <el-aside class="line" style="width: 100%; height:9px; "></el-aside>
          <el-aside class="kuai" style="
            width: 100%;
            height: calc(100% - 112px - 9px);
            min-height: 344px;

            border-radius: 10px;
          ">
            <MusicKu />
          </el-aside>
        </el-container>
        <!-- 竖着的分割线 -->
        <el-container class="line" direction='vertical' style="min-width:9px; max-width:9px;"></el-container>
        <el-container direction='vertical'
          style="min-width:460px; height: calc(100vh - 72px - 9px - 16px); min-height: 465px;">
          <el-main class="kuai" style="
              max-width:100%;
              height: 100%;
              min-height: 465px;
              padding: 0px;
              border-radius: 10px;
            ">
            <MainWindow :currentMusic="currentMusic" :queue="queue" :currentTime="currentTime" />
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
        <BottonBar ref="BottonBarDom" @queue-change="updateQueue" @music-change="updateCurrentMusic"
          @progress-change="updateCurrentTime" />
      </el-footer>
    </el-container>
    <!-- 后台管理弹窗 -->
    <el-dialog style="height:80%;height: 750px; " v-model="adminDialog" title="后台管理" width="80%" align-center>
      <AdminMain />
    </el-dialog>
  </div>

  </html>

</template>

<script setup>
import { ref, onMounted,onUnmounted,provide } from 'vue';
import NavbarTop from './components/NavbarTop.vue'
import MusicKu from './components/MusicKu.vue';
import MainWindow from './components/MainWindow.vue'
import BottonBar from './components/BottonBar.vue'
import AdminMain from './components/Admin/AdminMain.vue'
import { musicQueue } from "@/tools/music"
import { EventBus } from './tools/EventBus.js';
import { ElMessageBox } from 'element-plus';

//控制后台弹窗
const adminDialog = ref(false);
//处理歌曲时间
const currentTime = ref(0);
const currentMusic = ref(null);
const queue = ref(null);

const updateCurrentTime = (newProgress) => {
  currentTime.value = newProgress;
};

onMounted(() => {
  //默认获取歌曲
  currentMusic.value = musicQueue.getCurrentMusic()
  //全局事件总线
  EventBus.on('toggle-admin-dialog', () => {
    adminDialog.value = !adminDialog.value;
    console.log(adminDialog.value);
  });
});
onUnmounted(() => {
  //全局事件总线
  EventBus.removeAllListeners('toggle-admin-dialog');
});
//当前歌曲发生改变，需要更新最新歌曲。
const updateCurrentMusic = () => {
  currentMusic.value = musicQueue.getCurrentMusic()
}
//当前列表发生改变，需要更新最新的queue。
const updateQueue = (newVal) => {
  queue.value = newVal
  console.log("queue.value", newVal);
}

// 写入测试数据
const musicPlaylist = [];
localStorage.setItem('musicPlaylist', JSON.stringify(musicPlaylist));
localStorage.setItem('currentMusicIndex', 0);

//自动全屏
const tryFullScreen = async () => {
  try {
    await document.documentElement.requestFullscreen();
  } catch (error) {
    console.log("Failed to enable fullscreen automatically:", error);
    promptFullScreen();
  }
}

const promptFullScreen = () => {
  ElMessageBox.confirm(
    '平板端全屏体验最佳，是否全屏？',
    '提示',
    {
      confirmButtonText: '是',
      cancelButtonText: '否',
      type: 'warning'
    }
  ).then(() => {
    document.documentElement.requestFullscreen().catch(err => {
      console.error("User declined fullscreen or another error occurred:", err);
    });
  }).catch(() => {
    console.log("User canceled the fullscreen request.");
  });
}

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
onMounted(() => {
  const userAgent = navigator.userAgent;
  if (isMobileDevice(userAgent) && screen.width >= 768) {
    tryFullScreen();
  }
});
// 播放事件
const BottonBarDom = ref();
const playBegin = () => {
  console.log(BottonBar);
  BottonBarDom.value.playBegin()
}
provide('play-begin', playBegin)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'AlibabaPuHuiTi-Medium';
}

body {
  margin: 0;
  padding: 0;
}

html.dark {
  padding: 8px 8px 8px 8px;
}
</style>
