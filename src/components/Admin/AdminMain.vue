<template>
    <el-tabs v-model="activeName" class="admin-tabs" @tab-click="handleClick">
        <el-tab-pane label="🏠 总览" name="home">总览界面</el-tab-pane>
        <el-tab-pane label="🎵 歌曲管理" name="music">歌曲管理</el-tab-pane>
        <el-tab-pane label="📄 歌单管理" name="sheet">歌单管理</el-tab-pane>
        <el-tab-pane label="💿 专辑管理" name="album">专辑管理</el-tab-pane>
        <el-tab-pane label="🎤 歌手管理" name="singer">歌手管理</el-tab-pane>
        <el-tab-pane label="👤 用户管理" name="user">用户管理</el-tab-pane>
        <el-tab-pane label="⚙️ 系统设置" name="config">系统设置</el-tab-pane>

    </el-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
    console.log(tab, event)
}
</script>

<style lang="less"></style>