<template>
  <div class="main-home-page">
    <div class="content top-histerys">

      <div class="title histery" style="font-size: 32px;">
        <span>晚上好</span>
      </div>
      <div class="histerys">
        <el-row :gutter="10">
          <el-col :span="6" class="histerys-content">
            <div class="histery">
              <el-avatar class="histery-img" style="min-width: 48px; height: 48px;" shape="square" :size="48" :fit="cover"
                :src="require('@/assets/love-songs.jpg')" />
              <span class="histery-title">已点赞的歌曲</span>
            </div>
          </el-col>
          <el-col :span="6" class="histerys-content">
            <div class="histery">
              <el-avatar class="histery-img" style="min-width: 48px; height: 48px;" shape="square" :size="48" :fit="cover"
                :src="require('@/assets/love-songs.jpg')" />
              <span class="histery-title">已点赞的歌曲</span>
            </div>
          </el-col>
          <el-col :span="6" class="histerys-content">
            <div class="histery">
              <el-avatar class="histery-img" style="min-width: 48px;width: 48px; height: 48px;" shape="square" :size="48"
                :fit="cover" :src="require('@/assets/love-songs.jpg')" />
              <span class="histery-title">已点赞的歌曲</span>
            </div>
          </el-col>
          <el-col :span="6" class="histerys-content">
            <div class="histery">
              <el-avatar class="histery-img" style="min-width: 48px; height: 48px;" shape="square" :size="48" :fit="cover"
                :src="require('@/assets/love-songs.jpg')" />
              <span class="histery-title">已点赞的歌曲</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <ScrollableRow />
    <!-- 测试数据 -->
    <ScrollableRow />
    <ScrollableRow />
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import ScrollableRow from "./ScrollableRow.vue"
</script>


<style>
.top-histerys {
  padding-top: 74px;
  padding-bottom: 10px;
}

.main-home-page {
  padding-left: 3%;
  padding-right: 3%;
}

.top-histerys .el-row .el-col .histery {
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, 0.07);
}

.top-histerys .el-row .el-col .histery:hover {
  background-color: hsla(0, 0%, 100%, 0.2);
}

.top-histerys .el-row .el-col:last-child {
  margin-bottom: 0;
}

.top-histerys .el-row .el-col .histery {
  display: flex;
  align-items: center;
}

.top-histerys .el-row .el-col .histery .histery-title {

  width: calc(100% - 48px);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
}

.main-home-page .title {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-overflow: ellipsis;
}


</style>
