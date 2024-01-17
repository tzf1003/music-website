<template>
  <div class="sheet-container">
    <!-- Top 大块 -->
    <div id="colorfulDiv" class="top-background" :style="gradientStyle">
      <!-- 图片 -->
      <div class="sheet-img">
        <el-image id="background"
          :fit="cover" :src="imageUrl" @load="imgColor" ref="imageElement" />
        <!-- 歌单名 -->
        <span>已点赞歌曲</span>
        <span>歌单简介：This playlist was created by X1aoS0ng</span>
        <!-- 创建者和歌曲数量 -->
        <span>小松</span>
        <span> • </span>
        <span>197首歌曲</span>
      </div>

    </div>

    <!-- 下大块背景 -->
    <div id="darkGradientDiv" class="middle-background" :style="darkGradientStyle">
      <!-- 播放按钮区域 -->

      <!-- 播放按钮 -->
      <div class="sheet-play-button">
        <el-button size="large" color="#1FDF64" circle dark style="margin-left: 20px;">
          <i class="bi bi-play-fill" style="font-size: 25px; margin-left: 3px;"></i>
        </el-button>
      </div>
      <!-- 其他选项按钮 -->
      <div class="sheet-other-button">
        <el-button color="#282828" circle dark>
          <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
          <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
        </el-button>
      </div>
      <!-- 排序方法调整 -->
      <div class="sheet-sort-select">
        <el-select v-model="demonstrations" placeholder="选择排序方式" style="
        --el-select-input-focus-border-color:#979797;
        --el-color-primary:#979797;
        ">
          <el-option label="最近添加" value="0" />
          <el-option label="按字母排序" value="1" />
        </el-select>
      </div>
      <!-- 歌曲列表 表格 -->
      <div class="sheet-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </div>
  </div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
  <div>123456</div>
</template>
  
<script>
import { ref, computed } from 'vue';
import ColorThief from 'colorthief';

export default {
  setup() {
    const imageUrl = ref('https://i.scdn.co/image/ab67706c0000da84e4403704aa57a2e156a6d719'); // 图片URL
    const zcolor = ref('#121212'); // 默认颜色

    const gradientStyle = computed(() => {
      return {
        background: `linear-gradient(${zcolor.value}, ${darken(zcolor.value, 50)})`
      };
    });
    const darkGradientStyle = computed(() => {
      return {
        background: `linear-gradient(${darken(zcolor.value, 80)}, #121212)`
      };
    });
    function imgColor() {
      const domImg = document.querySelector('#background');
      const colorthief = new ColorThief();

      if (domImg.complete) {
        // 如果图片已经加载完成
        extractColors(domImg, colorthief);
      } else {
        // 图片加载
        domImg.addEventListener('load', () => extractColors(domImg, colorthief));
      }
    }

    function extractColors(domImg, colorthief) {
      zcolor.value = rgbaToHex(colorthief.getColor(domImg)); // 图片主色调
      console.log('主色调', zcolor.value);
    }

    function rgbaToHex(rgba) {
      let hex = '#';
      for (const i of rgba) {
        hex += i.toString(16).padStart(2, '0');
      }
      return hex;
    }

    // 生成更暗的颜色
    function darken(hexColor, amount) {
      let r = parseInt(hexColor.slice(1, 3), 16) - amount;
      let g = parseInt(hexColor.slice(3, 5), 16) - amount;
      let b = parseInt(hexColor.slice(5, 7), 16) - amount;

      r = r < 0 ? 0 : r;
      g = g < 0 ? 0 : g;
      b = b < 0 ? 0 : b;

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    return { imageUrl, zcolor, imgColor, gradientStyle, darkGradientStyle };
  }
};
</script>
  
<style  lang="less">
.sheet-container {
  width: 100%;

  .top-background {
    padding-top: 64px;
    width: 100%;
    height: 250px;
  }
  .sheet-img{
    --left-sidebar-width:390px;
    --panel-width:0px;
    width: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width,0px) - var(--panel-width,0px) - 600px)/424*104), 232px);
    height: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width,0px) - var(--panel-width,0px) - 600px)/424*104), 232px);
    .el-image{
      width: 100%;
      height: 100%;
    }
  }
  .middle-background {
    height: 250px;
  }
}

//  可以放表头position: fixed;
</style>
  