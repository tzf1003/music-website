<!-- 这里是底部播放条 -->
<template>
  <div>
    <el-row class="playBar">
      <!-- 左边歌曲信息区 -->
      <el-col :span="7">
        <div v-if="currentMusic" class="grid-content song-info">
          <!-- 图片 -->
          <router-link class="router-link" to="/lyrics">
            <div class="image" style="display: flex;float: left;">
              <el-avatar shape="square" :size="56" :src="currentMusic.image" />
            </div>
          </router-link>
          <!-- 内容 -->
          <div style="
            display: flex; 
          ">
            <span style="padding-left: 10px; ">
              <span style="
              color: #fff;
              font-size: 14px;
    
            ">{{ currentMusic.title }}</span>
              <span style="
              display: flex;
              color: #a7a7a7;
              font-size: 13px;
            ">{{ currentMusic.artist }}</span>
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
        <div class="grid-content player loading-svg" v-loading="musicLoading" :element-loading-svg="loadingSvg"
          element-loading-svg-view-box="-10, -10, 50, 50" style="width: 100%">
          <!-- 播放器 -->
          <audio ref="audioPlayer" :src="currentMusic ? currentMusic.url : null" @loadedmetadata="updateDuration"
            @timeupdate="updateCurrentTime" @play="onPlay" @pause="onPause" @ended="handleEnded"></audio>
          <!-- 播放条上层=按钮 -->
          <div class="top">
            <el-button :class="{ highlight: (isRandomPlay) }" @click="randomPlay" color="#000" circle dark>
              <i class="bi bi-shuffle" style="font-size: 17px;"></i>
            </el-button>
            <!-- 上一首 -->
            <el-button @click="playPrev" color="#000" circle dark>
              <i class="bi bi-skip-start-fill" style="font-size: 21px;"></i>
            </el-button>
            <!-- 播放 -->
            <el-button color="#fff" @click="togglePlay" circle dark style="color:#000">
              <i v-if="isPlaying" class="bi bi-pause-fill" style="font-size: 22px;"></i>
              <i v-else class="bi bi-play-fill" style="margin-left: 3px;font-size: 24px;"></i>
            </el-button>
            <!-- 下一首 -->
            <el-button @click="playNext" color="#000" circle dark>
              <i class="bi bi-skip-end-fill" style="font-size: 21px;"></i>
            </el-button>

            <!-- 单曲循环按钮 -->
            <el-button :class="{
        highlight: (playLoopMode != LoopModes.NO_LOOP)
      }" @click="switchLoopMode" color="#000" circle dark>

              <i v-if="(playLoopMode != LoopModes.SINGLE_LOOP)" class="bi bi-repeat" style="font-size: 17px;"></i>

              <i v-if="playLoopMode == LoopModes.SINGLE_LOOP" class="bi bi-repeat-1" style="font-size: 17px;"></i>
            </el-button>
          </div>
          <!-- 进度条 -->
          <div class="bottom">
            <div class="time progress">
              <p>{{ currentTime == 0 ? '0:00' : currentTime }}</p>
            </div>
            <el-slider v-model="localProgress" @change="onProgressChange" @input="onSliderInput"
              :show-tooltip="false" />
            <!-- <el-progress :percentage="10" type="line" text-inside="" color="#fff" /> -->
            <div class="time final">
              <p>{{ duration == 0 ? '0:00' : duration }}</p>
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
          <el-button color="#000" circle dark @click="toggleMute">
            <i v-if="!isMuted && musicVolume >= 50" class="bi bi-volume-up" style="font-size: 17px;"></i>
            <i v-else-if="!isMuted && (musicVolume < 50 && musicVolume > 0)" class="bi bi-volume-down"
              style="font-size: 17px;"></i>
            <i v-else-if="!isMuted && musicVolume == 0" class="bi bi-volume-off" style="font-size: 17px;"></i>
            <i v-else-if="isMuted" class="bi bi-volume-mute" style="font-size: 17px;"></i>
          </el-button>
          <el-slider v-model="musicVolume" @input="onVolumeInput" />
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
import { h, ref, watch, onMounted } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { musicQueue } from "@/tools/music"
import { ElMessage } from 'element-plus'
//消息弹出
const openMessage = (message) => {
  ElMessage(message)
}

const musicVolume = ref(70)
const isMuted = ref(false)
// 设置默认音量的函数
const setDefaultVolume = () => {
  if (audioPlayer.value) {
    // 假设默认音量为50%（0.5）
    audioPlayer.value.volume = musicVolume.value / 100;
  }
};
const toggleMute = () => {
  if (audioPlayer.value) {
    isMuted.value = !isMuted.value; // 切换静音状态
    audioPlayer.value.muted = isMuted.value; // 应用到audio元素
  }
};
// 当组件挂载完成时设置默认音量
onMounted(() => {
  setDefaultVolume();
});
//设置播放循环方式
const LoopModes = {
  //无循环
  NO_LOOP: 0,
  //列表循环
  LIST_LOOP: 1,
  //单曲循环
  SINGLE_LOOP: 2,
};
//默认不循环
const playLoopMode = ref(LoopModes.NO_LOOP);
const isRandomPlay = ref(false);

//点击随机播放按钮。
const randomPlay = () => {
  if (musicQueue.isRandomMode == false) {
    isRandomPlay.value = true
    musicQueue.setRandomMode(true)
    const message = h('p', null, [
      h('span', null, '已'),
      h('span', { style: 'color: #98FB98' }, '开启'),
      h('span', null, '随机播放模式')
    ])
    openMessage({
      message: message,
      type: 'success',
    })
  } else {
    isRandomPlay.value = false
    musicQueue.setRandomMode(false)
    const message = h('p', null, [
      h('span', null, '已'),
      h('span', { style: 'color: #FFC0CB' }, '关闭'),
      h('span', null, '随机播放模式')
    ])
    openMessage({
      message: message,
      type: 'success',
    })
  }
  emit('queue-change', musicQueue.getCurrentQueue());
}
//点击切换播放
const switchLoopMode = () => {
  playLoopMode.value = playLoopMode.value + 1;

  if (playLoopMode.value > 2) {
    playLoopMode.value = 0;
  }
  //message提示
  if (playLoopMode.value == LoopModes.NO_LOOP) {
    const message = h('p', null, [
      h('span', null, '已'),
      h('span', { style: 'color: #FFC0CB' }, '关闭'),
      h('span', null, '循环模式')
    ])
    openMessage({
      message: message,
      type: 'success',
    })
  } else if (playLoopMode.value == LoopModes.LIST_LOOP) {
    const message = h('p', null, [
      h('span', null, '已'),
      h('span', { style: 'color: #98FB98' }, '开启列表循环'),
      h('span', null, '模式')
    ])
    openMessage({
      message: message,
      type: 'success',
    })
  } else if (playLoopMode.value == LoopModes.SINGLE_LOOP) {
    const message = h('p', null, [
      h('span', null, '已'),
      h('span', { style: 'color: #98FB98' }, '开启单曲循环'),
      h('span', null, '模式')
    ])
    openMessage({
      message: message,
      type: 'success',
    })
  }
}

const emit = defineEmits([
  'progress-change',
  'music-change',
  'queue-change'
]);

const localProgress = ref(0);


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
//是否正在加载音乐
const musicLoading = ref(false);
const onPlay = () => {
  isPlaying.value = true;
};

const onPause = () => {
  isPlaying.value = false;
};
const togglePlay = () => {
  console.log(audioPlayer.value.src);
  if (audioPlayer.value) {
    // 检查是否设置了音频源
    if (audioPlayer.value.src && audioPlayer.value.src.trim() !== "") {
      if (audioPlayer.value.paused) {
        audioPlayer.value.play().catch(error => {
          console.error("播放失败:", error);
          // 这里可以添加更多的错误处理逻辑，显示一个友好的错误消息给用户
          openMessage({
            message: '播放失败,请检查网络',
            type: 'error',
          })
        });
      } else {
        audioPlayer.value.pause();
      }
    } else {
      // 处理无音频源的情况，提示用户
      openMessage({
        message: '当前没有歌曲可以播放',
        type: 'error',
      })

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
//处理当前播放完毕以后逻辑。
const handleEnded = () => {
  // 如果启用了单曲循环，则重新播放当前歌曲
  if (playLoopMode.value === LoopModes.SINGLE_LOOP) {
    audioPlayer.value.play();
  }
  // 否则判断是否 是列表循环
  else if (playLoopMode.value === LoopModes.LIST_LOOP) {
    playNext();
  } else {
    // 否则什么也不做,就是暂停。
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

const onVolumeInput = (newValue) => {
  // 判断静音时音量是否增加，如果增加则解除静音。
  if (newValue / 100 > audioPlayer.value.volume && isMuted.value == true) {
    console.log("newValue", newValue, 'audioPlayer.value.volume', audioPlayer.value.volume);
    isMuted.value = false
    audioPlayer.value.muted = isMuted.value = false
  }
  //设置音量
  audioPlayer.value.volume = newValue / 100;
};
// 用户拖动滑块时的处理函数
const onSliderInput = () => {
  isDragging.value = true;
};

//下一首
const playNext = () => {
  // console.log("索引+1：", musicQueue.getCurrentMusicIndex() + 1, "总元素数：", musicQueue.getQueueLength());
  //顺序列表播放逻辑
  // 先判断列表是否有长度
  if (musicQueue.getQueueLength() <= 0) {
    // 没有音乐
    openMessage({
      message: '当前没有歌曲可以播放',
      type: 'error',
    })
  } else if (musicQueue.getCurrentMusicIndex() + 1 >= musicQueue.getQueueLength()) {
    //判断索引是否大于等于长度
    //已经是最后一首了
    // 判断是否开启了循环播放
    if (playLoopMode.value == LoopModes.LIST_LOOP) {
      // 判断获取音乐队列的长度是否大于等于1，防止无音乐导致bug
      if (musicQueue.getQueueLength() >= 1) {
        //设置第一首为下一首，然后播放。
        musicQueue.playMusicAtIndex(0)
        startPlayMusic();
      } else {
        openMessage({
          message: '列表没有歌曲',
          type: 'error',
        })
      }
    } else {
      openMessage({
        message: '已经是列表最后一首了',
        type: 'error',
      })
    }

  } else {
    musicQueue.nextMusic();
    startPlayMusic();
    //传递歌曲改变信息
    emit('music-change', true);
  }
};

//上一首
const playPrev = () => {
  if (musicQueue.getQueueLength() <= 0) {
    // 没有音乐
    openMessage({
      message: '当前没有歌曲可以播放',
      type: 'error',
    })
  } else
    //判断索引是否小于等于0
    if (musicQueue.getCurrentMusicIndex() <= 0) {
      //已经是第一首了

      // 判断是否开启了循环播放
      if (playLoopMode.value == LoopModes.LIST_LOOP) {
        // 判断获取音乐队列的长度是否大于等于1，防止无音乐导致bug
        if (musicQueue.getQueueLength() >= 1) {
          //设置最后一首为下一首，然后播放。
          musicQueue.playMusicAtIndex(musicQueue.getQueueLength() - 1)
          startPlayMusic();
        } else {
          openMessage({
            message: '列表没有歌曲',
            type: 'error',
          })
        }
      } else {
        openMessage({
          message: '已经是列表第一首了',
          type: 'error',
        })
      }
    } else {
      musicQueue.prevMusic();
      startPlayMusic();
      //传递歌曲改变信息
      emit('music-change', true);
    }
};
// 重头播放
const playBegin = () => {
  musicQueue.playMusicAtIndex(0)
  startPlayMusic();
  emit('music-change', true);
}
defineExpose({
  playBegin
})

const startPlayMusic = () => {
  //增加一个加载特效。资源加载完毕后再可点击。
  musicLoading.value = true;
  currentMusic.value = musicQueue.getCurrentMusic();
  audioPlayer.value.load(); // 重新加载音频元素以应用新的源
  // 监听资源加载足够的事件，然后播放
  audioPlayer.value.onloadeddata = () => {
    audioPlayer.value.play().catch(e => console.error(e));
    musicLoading.value = false;
  };
  // 处理音频加载失败
  audioPlayer.value.onerror = (e) => {
    openMessage({
      message: '加载音频失败', e,
      type: 'error',
    })
    musicLoading.value = false; // 关闭加载特效
    // 可以在这里添加其他的错误处理逻辑，比如显示错误消息给用户
  };
}
const loadingSvg = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>

`
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

.playBar .tools .el-button {
  height: 33px;
  width: 33px;
  margin-left: 0px;
}

/* 播放进度条 */
.playBar .tools .el-slider {
  height: 12px;
  width: 93px;
}

.playBar .player .bottom .el-slider .el-slider__button-wrapper {
  display: none;
}

.playBar .player .bottom .el-slider .el-tooltip__trigger {
  width: 13px;
  height: 13px;
}

.playBar .player .bottom .el-slider .el-slider__bar {
  background-color: #fff;
}

.playBar .player .bottom .el-slider:hover .el-slider__button-wrapper {
  display: block;
}

.playBar .player .bottom .el-slider:hover .el-slider__bar {
  background-color: #1ed760;
}

/* 音量条 */
.playBar .tools .el-slider .el-slider__button-wrapper {
  display: none;
}

.playBar .tools .el-slider .el-tooltip__trigger {
  width: 13px;
  height: 13px;
}

.playBar .tools .el-slider .el-slider__bar {
  background-color: #fff;
}

.playBar .tools .el-slider:hover .el-slider__button-wrapper {
  display: block;
}

.playBar .tools .el-slider:hover .el-slider__bar {
  background-color: #1ed760;
}

.playBar .grid-content .router-link-active span {
  color: #1ed760;
}

.playBar .grid-content .top .highlight {
  color: #1ed760;
}

.playBar .grid-content .top .highlight:hover {
  color: #1ed760;
}

.playBar .player svg path,
.playBar .player svg rect {
  fill: #1ed760;

}

/* 清除旋转效果 */
.playBar .player .circular {
  animation: none;
}
</style>
