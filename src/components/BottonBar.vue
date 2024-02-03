<!-- 这里是底部播放条 -->
<template>
  <div>
    <el-row class="playBar">
      <!-- 左边歌曲信息区 -->
      <el-col :span="7">
        <div class="grid-content song-info">
          <!-- 图片 -->
          <div class="image" style="display: flex;float: left;">
            <el-avatar shape="square" :size="56"
              :src="currentMusic.image" />
          </div>
          <!-- 内容 -->
          <div style="
            display: flex; 

          ">
            <span style="padding-left: 10px; ">
              <span style="
              color: #fff;
              font-size: 14px;
    
            ">{{currentMusic.title}}</span>
              <span style="
              display: flex;
              color: #a7a7a7;
              font-size: 13px;
            ">{{currentMusic.artist}}</span>
            </span>
          </div>
          <!-- 我的喜欢 -->
          <div class="love" style="margin-left: 10px;">
            <el-button color="#000" circle dark>
              <i v-if="currentMusic.islike" class="bi bi-heart-fill" style="color: #1ed760;"></i>
              <i v-else class="bi bi-heart"></i>
            </el-button>
          </div>
        </div>
      </el-col>
      <!-- 中间播放器 -->
      <el-col :span="10">
        <div class="grid-content player">
          <!-- 播放器 -->
          <audio ref="audioPlayer" :src="currentMusic.url" @loadedmetadata="updateDuration" @timeupdate="updateCurrentTime" @play="onPlay" @pause="onPause" ></audio>
          <!-- 播放条上层=按钮 -->
          <div class="top">
            <el-button color="#000" circle dark>
              <i class="bi bi-shuffle" style="font-size: 17px;"></i>
            </el-button>
            <!-- 上一首 -->
            <el-button @click="playPrev" color="#000" circle dark>
              <i class="bi bi-skip-start-fill" style="font-size: 21px;"></i>
            </el-button>
            <!-- 播放 -->
            <el-button color="#fff" circle dark style="color:#000">
              <i v-if="isPlaying" @click="togglePlay" class="bi bi-pause-fill" style="font-size: 22px;"></i>
              <i v-else @click="togglePlay" class="bi bi-play-fill" style="margin-left: 3px;font-size: 24px;"></i>
            </el-button>
            <!-- 下一首 -->
            <el-button @click="playNext" color="#000" circle dark>
              <i class="bi bi-skip-end-fill" style="font-size: 21px;"></i>
            </el-button>
            <el-button color="#000" circle dark>
              <i class="bi bi-repeat" style="font-size: 17px;"></i>
              <!-- <i class="bi bi-repeat-1"></i> -->
            </el-button>
          </div>
          <!-- 进度条 -->
          <div class="bottom">
            <div class="time progress">
              <p>{{ currentTime==0 ? '0:00':currentTime }}</p>
            </div>
            <el-slider 
            v-model="localProgress" 
            @change="onProgressChange" 
            @input="onSliderInput"
            :show-tooltip="false"
            />
            <!-- <el-progress :percentage="10" type="line" text-inside="" color="#fff" /> -->
            <div class="time final">
              <p>{{ duration==0 ? '0:00':duration }}</p>
            </div>
          </div>

        </div>
      </el-col>
      <!-- 右边工具区 -->
      <el-col :span="7">
        <div class="grid-content tools">
          <router-link class="router-link" to="/song/123">
            <el-button color="#000" circle dark>
              <i class="bi bi-file-play" style="font-size: 17px;"></i>
            </el-button>
          </router-link>
          <router-link class="router-link" to="/lyrics">
            <el-button color="#000" circle dark>
              <i style="font-size: 17px; font-style:normal;font-family: 'AlibabaPuHuiTi-Bold';">词</i>
            </el-button>
          </router-link>
          <router-link class="router-link" to="/list">
            <el-button color="#000" circle dark>
              <i class="bi bi-ui-radios" style="font-size: 17px;"></i>
            </el-button>
          </router-link>

          <el-button color="#000" circle dark>
            <i class="bi bi-speaker" style="font-size: 17px;"></i>
          </el-button>
          <el-button color="#000" circle dark>
            <i class="bi bi-volume-up" style="font-size: 17px;"></i>
          </el-button>
          <el-slider v-model="musicVolume"/>
          <!-- <el-progress :percentage="100" type="line" text-inside="" color="#fff" /> -->
          <el-button color="#000" circle dark>
            <i class="bi bi-pip" style="font-size: 17px;"></i>
          </el-button>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref,watch} from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import {musicQueue} from "@/tools/music"

const musicVolume = ref(70)


const emit = defineEmits([
  'progress-change',
  'song-change'
]);

const localProgress = ref(0);

// const onProgressChange = (newValue) => {
//   emit('progress-change', newValue);
// };

//歌曲操作
//播放器实例
const audioPlayer = ref(null);
//当前音乐实例
const currentMusic = ref('');
//音乐的总时长
const duration = ref(0);
const currentTime = ref(0);
currentMusic.value = musicQueue.getCurrentMusic();
//音频是否播放
const isPlaying = ref(false);
//是否手动拖动进度条
const isDragging = ref(false); 
const onPlay = () => {
  isPlaying.value = true;
};

const onPause = () => {
  isPlaying.value = false;
};
const togglePlay = () => {
  if (audioPlayer.value) {
    if (audioPlayer.value.paused) {
      audioPlayer.value.play();
    } else {
      audioPlayer.value.pause();
    }
  }
};
const updateDuration = () => {
  duration.value = formatTime(audioPlayer.value.duration);
};

const updateCurrentTime = () => {
  currentTime.value = formatTime(audioPlayer.value.currentTime);
    // 处理进度条
    if (!isDragging.value && audioPlayer.value) { // 仅当用户未拖动滑块时更新
    const progress = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;
    localProgress.value = progress || 0;
    emit('progress-change', audioPlayer.value.duration * localProgress.value / 100);//进度传递出去，让歌词知道
  }
};

//计算时间。
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

//滑块处理
// 用户停止拖动滑块并释放，选择新的进度
const onProgressChange = (newValue) => {
  if (audioPlayer.value && audioPlayer.value.duration) {
    const newTime = (newValue / 100) * audioPlayer.value.duration;
    audioPlayer.value.currentTime = newTime;
  }
  isDragging.value = false; // 用户停止拖动，更新标志

};
// 用户拖动滑块时的处理函数
const onSliderInput = () => {
  isDragging.value = true;
};

//下一首
const playNext = () => {
  //判断索引是否大于等于长度
  console.log("索引：",musicQueue.getCurrentMusicIndex(),"总元素数：",musicQueue.getQueueLength());
  if(musicQueue.getCurrentMusicIndex()+1>=musicQueue.getQueueLength()){
    //已经是最后一首了
    console.log("已经是列表最后一首了");
  }else{
    musicQueue.nextMusic();
    currentMusic.value = musicQueue.getCurrentMusic();
    audioPlayer.value.load(); // 重新加载音频元素以应用新的源
    // 监听资源加载足够的事件，然后播放
    audioPlayer.value.onloadeddata = () => {
      audioPlayer.value.play().catch(e => console.error(e));
    };
    //传递歌曲改变信息
    emit('music-change',true);
  }
};

//上一首
const playPrev = () => {
  console.log("索引：",musicQueue.getCurrentMusicIndex(),"总元素数：",musicQueue.getQueueLength());
  //判断索引是否小于等于0
  if(musicQueue.getCurrentMusicIndex()<=0){
    //已经是第一首了
    console.log("已经是列表第一首了");
  }else{
    musicQueue.prevMusic();
    currentMusic.value = musicQueue.getCurrentMusic();
    audioPlayer.value.load(); // 重新加载音频元素以应用新的源
    // 监听资源加载足够的事件，然后播放
    audioPlayer.value.onloadeddata = () => {
      audioPlayer.value.play().catch(e => console.error(e));
    };
    //传递歌曲改变信息
    emit('music-change',true);
  }
};
</script>

<style>
/* .grid-content {
  border: 1px solid #666;
  border-radius: 4px;

} */

.playBar .player {
  text-align: center;
  width: 100%;
  height: 72px;
}

.playBar .tools {
  width: 100%;
  height: 72px;
}

.playBar .song-info {
  display: flex;
  width: 100%;
  height: 72px;
  /* 上下居中 */
  /* justify-content: center; */
  align-items: center;
}

.playBar .player .top {
  
  padding-top: 5px;
}

.playBar .player .top .el-button {
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  color: #B2B2B2;

}

.playBar .player .top .el-button:hover {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 9px;
  margin-right: 9px;
  width: 34px;
  height: 34px;
  color: #fff;

}

.playBar .player .bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
}

.playBar .player .bottom .time {
  height: 17px;
  display: block;
  float: left;
  color: #B2B2B2;
  font-size: 13px;
}

.playBar .player .bottom .progress {
  margin-right: 5px;
}

.playBar .player .bottom .final {
  margin-left: 5px;
}



.playBar .player .bottom .el-slider {
  height: 17px;
  float: left;
  width: calc(100% - 60px);
}

.playBar .tools {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: right;
  align-items: center;
  
}

.playBar .tools .el-button{
  height: 33px;
  width: 33px;
  margin-left: 0px;
}
/* 播放进度条 */
.playBar .tools .el-slider {
  height: 12px;
  width: 93px;
}
.playBar .player .bottom .el-slider .el-slider__button-wrapper{
  display: none;
}
.playBar .player .bottom .el-slider .el-tooltip__trigger{
  width: 13px;
  height: 13px;
}
.playBar .player .bottom .el-slider .el-slider__bar{
  background-color: #fff;
}
.playBar .player .bottom .el-slider:hover .el-slider__button-wrapper{
  display: block;
}
.playBar .player .bottom .el-slider:hover .el-slider__bar{
  background-color: #1ed760;
}

/* 音量条 */
.playBar .tools .el-slider .el-slider__button-wrapper{
  display: none;
}
.playBar .tools .el-slider .el-tooltip__trigger{
  width: 13px;
  height: 13px;
}
.playBar .tools .el-slider .el-slider__bar{
  background-color: #fff;
}
.playBar .tools .el-slider:hover .el-slider__button-wrapper{
  display: block;
}
.playBar .tools .el-slider:hover .el-slider__bar{
  background-color: #1ed760;
}

.playBar .grid-content .router-link-active span{
  color: #1ed760;
}
</style>
