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
    <el-col :span="14">
      <div class="grid-content search">
        <el-input v-model="librarySearch" placeholder="在歌单中搜索" :prefix-icon="Search" style="
          --el-input-focus-border:#979797;
          --el-input-focus-border-color:#979797;
        "/>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="grid-content screen" />
    </el-col>
  </el-row>
  <!-- 具体的库信息 -->
  <el-row class="library">
    <!-- 图片 -->
    <el-col :span="6">
      <div class="grid-content" />
    </el-col>
    <!-- 内容 -->
    <el-col :span="18">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import {
  Plus,
  Refresh,
  Search
} from '@element-plus/icons-vue'

const librarySearch = ref('')
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
}

.el-row.library {
  /* margin-top: 2px; */
  height: 64px;
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

