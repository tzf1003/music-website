<template>

  <div>
    <div class="sheet-container">
      <!-- Top 大块 -->
      <div id="colorfulDiv" class="top-background" :style="gradientStyle">
        <!-- 图片 -->
        <div class="img-bg">
          <el-image id="background" class="sheet-img" style="min-width: 48px; height: 48px;" shape="square" :size="48"
            :fit="cover" :src="imageUrl" @load="imgColor" ref="imageElement" />
          <!-- 歌单名 -->
          <!-- 创建者和歌曲数量 -->
        </div>

      </div>
      <!-- 下大块背景 -->
      <div id="darkGradientDiv" class="middle-background" :style="darkGradientStyle">
        <!-- 播放按钮区域 -->

        <!-- 播放按钮 -->
        <div>

        </div>
        <!-- 排序方法调整 -->
        <div>

        </div>

      </div>
      <!-- 歌曲列表 表格 -->
      <div>

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
.sheet-container{
  width: 100%;
  height: 500px;
 
}
//  可以放表头position: fixed;
</style>
  