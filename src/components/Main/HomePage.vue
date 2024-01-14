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
.content {
  padding-top: 10px;
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

.main-home-page .likes .el-button {
  display: block;
  float: right;
  /* justify-content:flex-end; */
}

.main-home-page .likes {
  display: block;
  clear: both;
  /* width: 100%; */
  height: auto;
  /* overflow-x: auto; */
}

.main-home-page .likes .likes-container {
  display: flex;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: auto; /* 添加滚动条 */
  scrollbar-width: none; /* 针对Firefox */
  -ms-overflow-style: none; /* 针对IE和Edge */
}
.main-home-page .likes .likes-container::-webkit-scrollbar {
    display: none; /* 针对Chrome, Safari 和 Opera */
}
.main-home-page .likes .likes-container.expanded {
  /* 当展开全部时的样式 */
  flex-wrap: wrap; /* 使子元素换行显示 */
  overflow-x: hidden; /* 隐藏水平滚动条 */
  overflow-y: auto; /* 启用垂直滚动 */
}
.main-home-page .likes .title-likes {
  display: block;
  width: 100%
}

.main-home-page .like {
  display: inline-block;
  max-width: 195px;
  min-width: 145px;
  padding: 16px 16px 16px 16px;
  margin: 5px 5px 5px 5px;
  display: block;
  float: left;
  width: calc(100% / 5 - 10px - 16px - 16px);
  /* 宽高比 */
  aspect-ratio: 160 / 243;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, 0.07);
}

.main-home-page .like:hover {
  background-color: hsla(0, 0%, 100%, 0.2);
}

.main-home-page .like .like-img {
  width: 100%;
  height: calc(100% * (159 / 242));
}

.main-home-page .like .like-title {
  width: 100%;
  /* display:inline-block;  */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #FFF;
  font-size: 14px;
  font-weight: bold;
}

.main-home-page .like .like-info {
  margin-top: 4px;
  width: 100%;

  /* 多行溢出省略 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  color: #A7A7A7;
  font-size: 13px;

}
</style>
