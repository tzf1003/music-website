<!-- 这里是左上角 -->
<template>

    <el-row class="tac">
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
.el-menu-item {
  width: 100%;
  height: 38PX;
}
.el-menu .words {
  margin-top: 0px;
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
}
</style>
