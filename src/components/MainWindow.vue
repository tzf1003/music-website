<!-- 这里是主要窗口 -->
<template>
  <el-scrollbar height="100%" @scroll="handleScroll" ref="scrollbarContainer">
    <el-container class="main-layout">
      <el-header class="main-header">
        <router-view v-slot="{ Component }" name="header">
          <component :is="Component" :scroll-amplitude="scrollAmplitude" />
        </router-view>


      </el-header>
      <el-main style="color: aliceblue;font-size: 20px;">
        <router-view v-slot="{ Component }">
          <component :is="Component" :lyrics="lyrics" :currentTime="currentTime" @scroll-to="handleScrollTo" />
        </router-view>
        <!-- <HomePage/> -->
        <!-- <SearchPage/> -->
        <!-- <ListPage/> -->
        <!-- <ArtistPage /> -->
        <!-- <LyricsPage :currentTime="currentTime" :lyrics="lyrics" @scroll-to="handleScrollTo" /> -->
        <!-- <SongInfoPage /> -->
        <!-- <SystemInfoVue/> -->
        <!-- <UserRegist/> -->
      </el-main>
    </el-container>
  </el-scrollbar>
</template>

<script  setup>
import { ref,toRefs, nextTick, onMounted,watchEffect } from "vue";
import { useRouter,useRoute } from 'vue-router';
// import router from '@/router/Index'
import HomePage from "./Main/HomePage.vue";
import SearchPage from "./Main/SearchPage.vue"
import HomeHeader from "./Main/MainHeader/HomeHeader.vue"
import SearchHeader from "./Main/MainHeader/SearchHeader.vue"
import ListPage from "./Main/ListPage.vue";
import SongSheetHeader from "./Main/MainHeader/SongSheetHeader.vue";
import SongSheetPage from "./Main/SongSheetPage.vue";
import ArtistPage from "./Main/ArtistPage.vue";
import LyricsPage from "./Main/LyricsPage.vue";
import SongInfoPage from "./Main/SongInfoPage.vue"
import SystemInfoVue from "./Main/SystemInfo.vue";
import UserRegist from "./Main/UserRegist.vue";

//滚动幅度
const scrollAmplitude = ref(0);
const handleScroll = ({ scrollTop }) => {
  scrollAmplitude.value = scrollTop
}
//歌词
const props = defineProps({
  currentMusic: Object,
  currentTime: Number
});
// 使用 toRefs 来保持每个 prop 的响应性
const { currentMusic, currentTime } = toRefs(props);
const lyrics = ref('');
// 监听 当前播放歌词改变
watchEffect(() => {
  if (currentMusic.value) {
    lyrics.value = currentMusic.value.lyrics;
  } else {
    lyrics.value = ''; // 如果 currentMusic 没有值，重置 lyrics
  }
});

// if(currentMusic!=null){
//   lyrics.value = currentMusic
//   console.log(currentMusic);
// }
//监听滚动条消息
const scrollbarContainer = ref(null);
let lyricsFocalPosition = 0;
const handleScrollTo = (offsetTop) => {
  if (scrollbarContainer.value) {
    const scrollbar = scrollbarContainer.value.$el.querySelector('.el-scrollbar__wrap'); // 假设这是内部的滚动容器
    if (scrollbar) {
      const containerHeight = scrollbar.clientHeight;
      const scrollPosition = offsetTop - containerHeight / 2;
      // 如果原焦点位置和当前位置在150以内，才滚动
      //使用原焦点位置来判断，因为还没有滚动到目的焦点位置。
      // console.log("焦点位置和当前位置", lyricsFocalPosition - scrollAmplitude.value);
      if (lyricsFocalPosition - scrollAmplitude.value < 150 && lyricsFocalPosition - scrollAmplitude.value > -150) {
        scrollbar.scrollTo(0, scrollPosition);
      }else{
        //这里判断是不是第一次加载组件。
        if(firstLoad == true){
          scrollbar.scrollTo(0, scrollPosition);
          firstLoad =false
        }
      }
      //记录新的焦点位置
      lyricsFocalPosition = scrollPosition
    }
  }
};
let firstLoad = false;
onMounted(() => {
  //获得实例
  const router = useRouter();
  //获得信息
  const route = useRoute()
  //切换组件默认滚动到顶部
  router.afterEach((to, from) => {
  // 确保DOM更新后再滚动
  nextTick(() => {
    if (scrollbarContainer.value) {
      // 当路由跳转到不同路径时滚动到顶部或特定位置
      if (
        from.path !== to.path || 
        JSON.stringify(from.params) !== JSON.stringify(to.params) || 
        JSON.stringify(from.query) !== JSON.stringify(to.query)
      ) { // 检查即将离开的路由和即将进入的路由是否不同
        if (to.name === 'Lyrics') {
          // 如果进入的是歌词页面，则根据需要处理滚动
          firstLoad = true;
          lyricsFocalPosition = 0;
          scrollbarContainer.value.setScrollTop(lyricsFocalPosition);
          handleScrollTo();
        } else {
          // 对于其他页面，滚动到顶部
          scrollbarContainer.value.setScrollTop(0);
        }
      }
      // 相同路由且参数未变化时，可以不做任何处理
    }
  });
});

});


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
