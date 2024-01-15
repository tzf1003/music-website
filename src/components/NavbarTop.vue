<!-- 这里是左上角 -->
<template>

    <el-row class="menu-bar">
      <el-col :span="24" style="width: 100%;">
        <el-menu 
          default-active="1" 
          class="el-menu-vertical"
          
          style="
            --el-menu-bg-color:#121212;
            --el-menu-active-color: #fff;
            --el-menu-text-color:#B3B3B3;
            --el-menu-hover-bg-color:#131313;
            margin-top: 8px;
            margin-left: 10px;
            border: 0px ;
            width: calc(100% - 10px);
            height: 86PX;
            ">
          <el-menu-item class="el-menu-item" index="1">
            <el-icon :size="25"><HomeFilled /></el-icon>
            <span class="words">主页</span>
          </el-menu-item>
          <el-menu-item class="el-menu-item" index="2" >
            <el-icon :size="25"><Search /></el-icon>
            <span class="words">搜索</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

</template>

<script setup>
import { ref } from "vue";
</script>

<style>
.menu-bar{
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
}


.menu-bar .el-menu-item {
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  height: 40PX;
}

.menu-bar .el-menu .words {
  margin-top: 0px;
  margin-left: 10px;

  font-size: 16px;
  font-weight: bold;
}

</style>
