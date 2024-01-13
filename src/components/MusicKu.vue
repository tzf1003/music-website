<!-- 这里是左侧音乐库 -->
<template>
  <!-- 布局head -->
  <el-row class="head">
    <!-- 图标 -->
    <el-col :span="2">
      <div class="grid-content">
        <el-icon color="#fff" :size="20" style="
        margin-top: 10px;
        margin-left: 10px;
        ">
          <Files />
        </el-icon>

      </div>
    </el-col>

    <el-col :span="14">
      <div class="grid-content">
        <div style="
        margin-top: 8px;
        margin-left: -3px;
        ">
          <span class="words">音乐库</span>
        </div>

      </div>
    </el-col>
    <!-- 创建 按钮 -->
    <el-col :span="4">
      <div class="grid-content">
        <el-button size="large" color="#121212" :icon="Plus" circle dark style="margin-left: 20px;" />
      </div>
    </el-col>
    <!-- 刷新 按钮 -->
    <el-col :span="4">
      <div class="grid-content">
        <el-button size="large" color="#121212" :icon="Refresh" circle dark style="margin-left: 10px;" />
      </div>
    </el-col>
  </el-row>
  <!-- 布局tag -->
  <el-row class="tags">
    <el-col :span="4">
      <div class="grid-content tag">
        <el-button round color="#232323">歌单</el-button>

      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content tag">
        <el-button round color="#232323">艺人</el-button>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content tag" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content tag" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content tag" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content tag" />
    </el-col>
  </el-row>
  <!-- 搜索和筛选 -->
  <el-row class="search">
    <!-- 搜索 -->
    <el-col :span="14">
      <div class="grid-content search">
        <el-input v-model="librarySearch" placeholder="在歌单中搜索" :prefix-icon="Search" style="
          --el-input-focus-border:#979797;
          --el-input-focus-border-color:#979797;
        " />
      </div>
    </el-col>
    <!-- 筛选 -->
    <el-col :span="10">
      <div class="grid-content screen">
        <el-select v-model="demonstrations" placeholder="选择排序方式" style="
      --el-select-input-focus-border-color:#979797;
      --el-color-primary:#979797;

      ">
          <el-option label="最近播放" value="0" />
          <el-option label="最近添加" value="1" />
          <el-option label="按字母排序" value="2" />
          <el-option label="创建者" value="3" />
        </el-select>
      </div>
    </el-col>
  </el-row>
  <!-- 具体的库信息 -->
  <el-row class="library">
    
    <el-col :span="24">
      <div class="grid-content">
        <el-button text color="#232323" style="
          width: 100%;
          height: 64px; 
          text-align:left; 
          display: flex;
          justify-content: flex-start;
          --el-button-bg-color:#121212;
          --el-button-hover-bg-color: #393939;
          --el-button-active-bg-color: #232323;
        ">
        <!-- 图片 -->
          <el-avatar style="width: 48px; height: 48px;" shape="square" :size="48" :fit="cover" :src="require('@/assets/love-songs.jpg')" />
          <!-- 内容 -->
          <span style="padding-left: 10px;">
            <span style="
              display: block;
              margin-bottom: 8px;
              color: #fff;
              font-family: '微软雅黑';
              font-size: 18px;
            ">已点赞歌曲</span>
            <span style="
              display: block;
              color: #a7a7a7;
              font-family: '微软雅黑';
              font-size: 14px;
              
            ">歌单 • 8首歌曲</span>
          </span>
        </el-button>
      </div>
    </el-col>
    <!-- 库2 -->
    <el-col :span="24">
      <div class="grid-content">
        <el-button text color="#232323" style="
          width: 100%;
          height: 64px; 
          text-align:left; 
          display: flex;
          justify-content: flex-start;
          --el-button-bg-color:#121212;
          --el-button-hover-bg-color: #393939;
          --el-button-active-bg-color: #232323;
        ">
        <!-- 图片 -->
          <el-avatar style="width: 48px; height: 48px;" shape="square" :size="48" :fit="cover" :src="libraryUrl[0]" />
          <!-- 内容 -->
          <span style="padding-left: 10px;">
            <span style="
              display: block;
              margin-bottom: 8px;
              color: #fff;
              font-family: '微软雅黑';
              font-size: 18px;
            ">华语民谣</span>
            <span style="
              display: block;
              color: #a7a7a7;
              font-family: '微软雅黑';
              font-size: 14px;
              
            ">歌单 • 小松创建</span>
          </span>
        </el-button>
      </div>
    </el-col>
    <!-- 库3 -->
    <el-col :span="24">
      <div class="grid-content">
        <el-button text color="#232323" style="
          width: 100%;
          height: 64px; 
          text-align:left; 
          display: flex;
          justify-content: flex-start;
          --el-button-bg-color:#121212;
          --el-button-hover-bg-color: #393939;
          --el-button-active-bg-color: #232323;
        ">
        <!-- 图片 -->
          <el-avatar style="width: 48px; height: 48px;" shape="square" :size="48" :fit="cover" :src="libraryUrl[1]" />
          <!-- 内容 -->
          <span style="padding-left: 10px;">
            <span style="
              display: block;
              margin-bottom: 8px;
              color: #fff;
              font-family: '微软雅黑';
              font-size: 18px;
            ">邓紫棋</span>
            <span style="
              display: block;
              color: #a7a7a7;
              font-family: '微软雅黑';
              font-size: 14px;
              
            ">艺人</span>
          </span>
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { reactive, toRefs } from 'vue'
import {
  Plus,
  Refresh,
  Search
} from '@element-plus/icons-vue'

const librarySearch = ref('')

const demonstrations = reactive(ref('0'))

const libraryUrl = ref([
  'https://p2.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg?param=140y140',
  'https://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=130y130'
])
</script>

<style>
.grid-content {
  /* border: 1px solid #666; */
  border-radius: 4px;

}

.el-row.head .grid-content {
  min-height: 40px;
}

.el-row.tags .grid-content {
  min-height: 48px;
}

.el-row.search .grid-content {
  min-height: 32px;
}

.el-row.library .grid-content {
  min-height: 64px;
}

.el-row.head {
  margin-top: 8px;
  margin-bottom: 8px;
  height: 40px;
  padding-left: 20px;

}

.el-row.tags {
  height: 48px;
  padding-left: 20px;
}

.el-row.search {
  margin-top: 2px;
  height: 32px;
  padding-left: 20px;
  padding-right: 20px;
}

.el-row.search .screen {
  padding-left: 20px;

}

.el-row.library {
  margin-top: 10px;
  height: 64px;
  padding-left: 10px;
}


.head .words {
  color: #fff;
  margin-left: 10px;
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
}

.tag .el-button {
  --el-button-hover-bg-color: #2a2a2a;
  --el-button-active-bg-color: #000;
}


</style>

