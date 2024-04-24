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
    <router-link v-if="(token != null && token != '' && token != undefined ) && getFavoriteMusics"  class="router-link" :to="'/sheet/'+getFavoriteMusics.id">
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
            <el-avatar style="width: 48px; height: 48px;" shape="square" :size="48"
              :src="getFavoriteMusics.imgUrl" />
            <!-- 内容 -->
            <span style="padding-left: 10px;">
              <span style="
              display: block;
              margin-bottom: 8px;
              color: #fff;
              font-size: 18px;
            ">{{getFavoriteMusics.name}}</span>
              <span style="
              display: block;
              color: #a7a7a7;
              font-size: 14px;
              
            ">{{getFavoriteMusics.description}}</span>
            </span>
          </el-button>
        </div>
      </el-col>
    </router-link>
    <!-- 库2 -->
    <router-link class="router-link" :to="'/'+library.favType+'/'+library.favId" v-for="(library, key) in librarys" :key="key">
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
            <el-avatar v-if="library.favType=='album'" style="width: 48px; height: 48px;" shape="square" :size="48" :src="library.favObj.imgUrl" />
            <el-avatar v-else-if="library.favType=='sheet'" style="width: 48px; height: 48px;" shape="square" :size="48" :src="library.favObj.imgUrl" />
            <el-avatar v-else-if="library.favType=='singer'" style="
              width: 48px; 
              height: 48px;
              border-radius: 50%;
            " shape="square" :size="48" :src="library.favObj.imgUrl" />
            <!-- 内容 -->
            <span style="padding-left: 10px;">
              <span style="
              width: 290px;
              display: block;
              margin-bottom: 8px;
              color: #fff;
              font-size: 18px;
              overflow: hidden;
              text-overflow: ellipsis;
            ">{{library.favObj.name}}</span>
              <span style="
              display: block;
              color: #a7a7a7;
              font-size: 14px;
              
            ">{{library.favType=="album" ? "专辑":library.favType=="sheet"? "歌单":library.favType=="singer"? "艺人":"其他"}}</span>
            </span>
          </el-button>
        </div>
      </el-col>
    </router-link>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { reactive, toRefs } from 'vue'
import apiService from '@/tools/apiService';

import {
  Plus,
  Refresh,
  Search
} from '@element-plus/icons-vue'

const librarySearch = ref('')

const demonstrations = reactive(ref('0'))

const librarys = ref([]);
const getFavoriteMusics = ref([]);
// 获取用户信息
//如果存在token，则访问
var token = localStorage.getItem('authToken');
if (token != null && token != '' && token != undefined) {
    //在这里读取已点赞歌曲
    apiService.fetchWithAuth("favorites/getFavoriteMusics", "GET", null).then((result) => {
      getFavoriteMusics.value=result;
      console.log(getFavoriteMusics.value);
    });
    //在这里读取音乐库
    apiService.fetchWithAuth("favorites/get?page=1", "GET", null).then((result) => {
      librarys.value=result.records;
      console.log(librarys.value);
    });
}
</script>

<style>
.el-row.head .grid-content {
  min-height: 40px;
}

/* .el-row.tags .grid-content {
  min-height: 48px;
} */

.el-row.search .grid-content {
  min-height: 32px;
}

.el-row.library .grid-content {
  width: 100%;
  min-height: 64px;
}
.el-row.library{
  width: 100%;
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
  font-size: 16px;
  font-weight: bold;
}


.library .router-link{
  width: 100%;
}

.library a.router-link-active .el-button{
  width: 100%;
}
/* .tag .el-button {
  --el-button-hover-bg-color: #2a2a2a;
  --el-button-active-bg-color: #000;
} */
</style>

