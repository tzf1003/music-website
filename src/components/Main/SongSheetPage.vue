<template>
  <div class="sheet-container">
    <!-- Top 大块 -->
    <div id="colorfulDiv" class="top-background" ref="container" :style="gradientStyle">
      <!-- 图片 -->
      <div class="sheet-img">
        <el-image id="background" :fit="cover" :src="imageUrl" @load="imgColor" ref="imageElement" />
      </div>
      <div class="sheet-info">

        <!-- 歌单名 -->
        <div class="name">
          <span ref="textSpan">已点赞歌曲</span>
        </div>
        <div class="brief">
          <span>歌单简介：This playlist was created by X1aoS0ng.....This playlist was created by X1aoS0ng</span>
        </div>
        <div class="user">
          <span>小松 • 197首歌曲</span>
        </div>
        <!-- 创建者和歌曲数量 -->

      </div>

    </div>

    <!-- 下大块背景 -->
    <div id="darkGradientDiv" class="middle-background" :style="darkGradientStyle">

      <div class="sheet-button">
        <!-- 播放按钮区域 -->
        <div class="sheet-button-left">
          <!-- 播放按钮 -->

          <el-button class="sheet-play-button" size="large" color="#1FDF64" circle dark style="margin-left: 20px;">
            <i class="bi bi-play-fill" style="margin-left: 3px;"></i>
          </el-button>

          <!-- 其他选项按钮 -->

          <el-button class="sheet-other-button" circle dark style="
          --el-button-hover-text-color:none;
          --el-button-active-border-color:none;
          --el-button-active-bg-color:none;
          --el-button-hover-bg-color:none;
          --el-button-border-color:none;
          border-style: none;
          ">
            <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
          </el-button>
        </div>

        <div class="sheet-button-right">
          <!-- 排序方法调整 -->

          <el-select class="sheet-sort-select" v-model="demonstrations" placeholder="排序方式" style="
        --el-select-input-focus-border-color:#979797;
        --el-color-primary:#979797;
        width: 100px;
        ">
            <el-option label="最近添加" value="0" />
            <el-option label="按字母排序" value="1" />
          </el-select>
        </div>

      </div>

      <!-- 歌曲列表 表格 -->
      <div class="sheet-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="#" />
          <el-table-column prop="name" label="标题"  />
          <el-table-column prop="album" label="专辑" />
          <el-table-column prop="date" label="添加日期" />
          <el-table-column prop="time" label="时长" />
        </el-table>
      </div>
    </div>
  </div>

</template>
  
<script>
import { ref, computed } from 'vue';
import ColorThief from 'colorthief';

export default {
  mounted() {
    this.resizeText();
    window.addEventListener("resize", this.resizeText);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeText);
  },
  methods: {
    resizeText() {
      const container = this.$refs.container;
      const text = this.$refs.textSpan;

      const containerWidth = container.offsetWidth;
      const textWidth = text.offsetWidth;
      console.log(containerWidth, textWidth);
      // 计算缩放比例
      const scale = containerWidth * 0.13;

      // 根据缩放比例来设置文字大小
      text.style.fontSize = `${scale}px`;
    },
  },

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
    --fluid-height: clamp(250px, calc(250px + calc(100vw - 283px - 0px - 600px)/424*150), 400px);
    --min-fluid-height: clamp(250px, calc(250px + calc(100vw - 283px - 0px - 600px)/424*90), 340px);

    width: 100%;
    // height: 250px;
    height: min(calc(30vh), calc(var(--fluid-height)));
    max-height: 400px;
    min-height: calc(var(--min-fluid-height));
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    /* 将元素在交叉轴（垂直轴）上底部对齐 */
    .sheet-img {

      display: flex;
      --left-sidebar-width: 390px;
      --panel-width: 0px;
      min-width: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
      min-height: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
      width: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
      height: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
      margin-left: 10px;
      margin-right: 20px;
      margin-bottom: 20px;

      .el-image {
        display: flex;
        width: 100%;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.582);
        border-radius: 10px;
        border-radius: 10px;
      }
    }

    .sheet-info {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .name {

        // display: flex;

      }

      .brief {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /* 控制行数 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        // max-width: 330px;
      }

      .user {
        font-size: 14px;
        max-width: 330px;
      }
    }

    .middle-background {
      height: 250px;
    }
  }

  .middle-background {

    .sheet-button {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* 左右对齐 */
      align-items: center;

      .sheet-button-left {
        justify-content: flex-end;

        .sheet-play-button {

          width: 56px;
          height: 56px;

          i {
            font-size: 32px;
          }
        }

        .sheet-other-button {
          width: 56px;
          height: 56px;
          color: #A7A7A7;
          i {
            font-size: 32px;
          }


        }
        .sheet-other-button:active  {
            i {
              color: #fff;
            }
          }
      }

      .sheet-button-right {
        justify-content: flex-end;

        .sheet-sort-select {

          /* 左右居左 */
          width: 32px;
        }
      }



    }

  }

}

//  可以放表头position: fixed;
</style>
  