<!-- 这里是底部播放条 -->
<template>
  <div>
    <el-row class="playBar">
      <!-- 左边歌曲信息区 -->
      <el-col :span="7">
        <div class="grid-content song-info">
          <!-- 图片 -->
          <div class="image" style="display: flex;float: left;">
            <el-avatar shape="square" :size="56" :fit="cover"
              src="http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130" />
          </div>
          <!-- 内容 -->
          <div style="
            display: flex; 

          ">
            <span style="padding-left: 10px; ">
              <span style="
              color: #fff;
              font-family: '微软雅黑';
              font-size: 14px;
    
            ">句号</span>
              <span style="
              display: flex;
              color: #a7a7a7;
              font-family: '微软雅黑';
              font-size: 13px;
              
            ">邓紫棋</span>
            </span>
          </div>
          <!-- 我的喜欢 -->
          <div class="love" style="margin-left: 10px;">
            <el-button color="#000" circle dark>
              <!-- <i class="bi bi-heart"></i> -->
              <i class="bi bi-heart-fill" style="color: #1ed760;"></i>
            </el-button>
          </div>
        </div>
      </el-col>
      <!-- 中间播放器 -->
      <el-col :span="10">
        <div class="grid-content player">
          <!-- 播放条上层=按钮 -->
          <div class="top">
            <el-button color="#000" circle dark>
              <i class="bi bi-shuffle" style="font-size: 17px;"></i>
            </el-button>
            <el-button color="#000" circle dark>
              <i class="bi bi-skip-start-fill" style="font-size: 21px;"></i>
            </el-button>
            <el-button color="#fff" circle dark style="color:#000">
              <!-- <i class="bi bi-pause-fill" style="font-size: 22px;"></i> -->
              <i class="bi bi-play-fill" style="margin-left: 3px;font-size: 24px;"></i>
            </el-button>

            <el-button color="#000" circle dark>
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
              <p>0:00</p>
            </div>
            <el-slider v-model="musicPercent"  :show-tooltip="false"/>
            <!-- <el-progress :percentage="10" type="line" text-inside="" color="#fff" /> -->
            <div class="time final">
              <p>3:55</p>
            </div>
          </div>

        </div>
      </el-col>
      <!-- 右边工具区 -->
      <el-col :span="7">
        <div class="grid-content tools">
          <el-button color="#000" circle dark>
            <i class="bi bi-file-play" style="font-size: 17px;"></i>
          </el-button>
          <el-button color="#000" circle dark>
            <!-- <i class="bi bi-card-text" style="font-size: 17px;"></i> -->
            <i style="font-size: 17px; font-style:normal;font-family: 微软雅黑;">词</i>
          </el-button>
          <el-button color="#000" circle dark>
            <i class="bi bi-ui-radios" style="font-size: 17px;"></i>
          </el-button>
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
import { ref } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
const musicPercent = ref(0)
const musicVolume = ref(0)
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
</style>
