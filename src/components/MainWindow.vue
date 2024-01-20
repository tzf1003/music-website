<!-- 这里是主要窗口 -->
<template>
  <el-scrollbar height="100%" @scroll="handleScroll" ref="lyricsContainer">
    <el-container class="main-layout">
      <el-header class="main-header">

        <!-- <SongSheetHeader :scroll-amplitude="scrollAmplitude"/> -->

        <!-- <HomeHeader/> -->
        <!-- <SearchHeader/> -->

      </el-header>
      <el-main style="color: aliceblue;font-size: 20px;">
        <!-- <HomePage/> -->
        <!-- <SearchPage/> -->
        <!-- <ListPage/> -->
        <!-- <ArtistPage /> -->
        <LyricsPage :currentTime="currentTime" :lyrics="lyrics" @scroll-to="handleScrollTo" />
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
import LyricsPage from "./Main/LyricsPage.vue";
//滚动幅度
const scrollAmplitude = ref(0);
const handleScroll = ({ scrollTop }) => {
  scrollAmplitude.value = scrollTop
}
//歌词
const props = defineProps({
  currentTime: Number
});
// 当前播放时间
const lyrics = ref(`
[00:00.00] 作词 : G.E.M.邓紫棋
[00:01.00] 作曲 : G.E.M.邓紫棋
[00:02.00] 编曲 : G.E.M.邓紫棋/T-Ma
[00:03.00] 制作人 : G.E.M.邓紫棋/T-Ma
[00:06.31]可惜我们终于来到
[00:10.18]一个句号
[00:13.16]窗外不愿飞的蜂鸟
[00:16.58]也在哀悼
[00:19.67]城市再也不会听到
[00:23.44]我们争吵
[00:26.42]你会不会少了一点烦恼
[00:33.03]回到十二年前
[00:34.72]回忆就在眼前
[00:36.69]你戴着帽子而我样子
[00:38.70]带着腼腆
[00:39.65]不过第一次的见面
[00:41.59]你说你有先见
[00:43.11]我的先天被训练过
[00:45.03]我能有片天
[00:46.37]我当时天真寡见鲜闻
[00:49.50]不像成年人有能力辨认
[00:52.53]不是为了赚了有钱分
[00:54.83]我为我的前程
[00:56.51]希望我写的歌里面
[00:58.41]有更好的和弦声
[00:59.87]时针滴滴答
[01:03.06]你还记得吗
[01:06.36]说句心里话
[01:09.73]你还怀念吗
[01:13.10]第一次发唱片
[01:14.73]就一马当先
[01:16.40]从此在大场面
[01:17.86]我不再站旁边
[01:19.86]我是真的感谢
[01:21.20]佩服你的眼界
[01:22.94]怎么想到
[01:23.90]和你是带着刺痛地完结
[01:27.18]你看着一朵花慢慢萌芽
[01:30.31]我却看着你意气慢慢风发
[01:33.12]欲望聚沙成塔
[01:34.80]价值慢慢分岔
[01:36.25]太多失望
[01:37.04]让我对你的信任慢慢崩塌
[01:39.73]可惜我们终于来到
[01:43.48]一个句号
[01:46.35]窗外不愿飞的蜂鸟
[01:50.17]也在哀悼
[01:52.98]城市再也不会听到
[01:56.75]我们争吵
[01:59.66]你会不会少了一点烦恼
[02:06.40]时针滴滴答
[02:09.71]你还记得吗
[02:13.03]说句心里话
[02:16.40]你还怀念吗
[02:19.05]你说我是个商品
[02:20.76]没有你我就不可以
[02:22.43]这些扭曲的真理
[02:24.06]差点毁掉我的自信
[02:25.80]如今的我已觉醒
[02:27.37]如今我不再哭泣
[02:29.11]再不怕坚持自己
[02:30.62]做你没做对的决定
[02:32.53]你知道吗
[02:33.65]这一辈子除了我的爸爸
[02:37.04]你曾是我最信任的男人吧
[02:39.70]但空白的娃娃
[02:41.21]总会慢慢长大
[02:42.84]抱歉我没法
[02:43.91]永远当你听话的傻瓜
[02:46.38]可惜我们终于来到
[02:50.09]一个句号
[02:53.00]窗外不愿飞的蜂鸟
[02:56.93]也在哀悼
[02:59.82]城市再也不会听到
[03:03.53]我们争吵
[03:06.46]你会不会少了一点烦恼
[03:10.11]我们终于来到
[03:12.07]一个句号
[03:15.12]多少年里多少遍你
[03:13.07]
[03:18.78]多少错却没多少歉意
[03:16.92]
[03:22.06]但过去了就不再介意
[03:20.16]
[03:23.82]把珍贵的放心里
[03:23.06]
[03:25.11]把痛的伤的全都忘记
[03:28.75]我青春的全部回忆
[03:26.78]
[03:31.67]那爱的恨的全都是你
[03:30.20]
[03:35.79]希望你偶尔也会想起
[03:33.66]
[03:37.14]就让我真心真意
[03:38.43]把歌唱完重新开始
[03:40.12]时针滴滴答
[03:43.09]你还记得吗
[03:46.29]说句心里话
[03:49.95]你还怀念吗
[03:51.37] 和音 : G.E.M.邓紫棋
[03:52.79] 混音 : Richard Furch
[03:54.21] 母带 : Randy Merrill @ Sterling Sound
[03:55.63] 版权所有，翻版必究。本专辑涉及的任何作品，包括但不限于词曲、录音、录像、视听、文字、摄影和美术等作品，未经权利人授权不得使用。

`); // Your lyrics here
//监听滚动条消息
const lyricsContainer = ref(null);
let lyricsFocalPosition = 0;
const handleScrollTo = (offsetTop) => {
  // 如果原焦点位置和当前位置在300以内，才滚动
  if (lyricsFocalPosition - scrollAmplitude.value < 200 && lyricsFocalPosition - scrollAmplitude.value > -200) {
    if (lyricsContainer.value) {
      const scrollbar = lyricsContainer.value.$el.querySelector('.el-scrollbar__wrap'); // 假设这是内部的滚动容器
      if (scrollbar) {
        const containerHeight = scrollbar.clientHeight;
        const scrollPosition = offsetTop - containerHeight / 2;
        scrollbar.scrollTo(0, scrollPosition);
        //记录新的焦点位置
        lyricsFocalPosition = scrollPosition
        console.log("焦点位置和当前位置", scrollPosition - scrollAmplitude.value);
      }
    }
  }
};
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
