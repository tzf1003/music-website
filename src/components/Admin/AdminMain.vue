<template>
    <div>
        <el-tabs v-model="activeName" class="admin-tabs">
            <el-tab-pane label="🏠 总览" name="home">
                <AdminHome />
            </el-tab-pane>
            <el-tab-pane label="🎵 歌曲管理" name="music">
                <AdminMusic />
            </el-tab-pane>
            <el-tab-pane label="📄 歌单管理" name="sheet">
                <AdminSheet />
            </el-tab-pane>
            <el-tab-pane label="💿 专辑管理" name="album">
                <AdminAlbum />
            </el-tab-pane>
            <el-tab-pane label="🎤 歌手管理" name="singer">
                <AdminSinger />
            </el-tab-pane>
            <el-tab-pane label="👤 用户管理" name="user">
                <AdminUser />
            </el-tab-pane>
            <!-- <el-tab-pane label="⚙️ 系统设置" name="config">系统设置</el-tab-pane> -->

        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminHome from './AdminHome.vue'
import AdminMusic from './AdminMusic.vue'
import AdminSheet from './AdminSheet.vue'
import AdminAlbum from './AdminAlbum.vue'
import AdminSinger from './AdminSinger.vue'
import AdminUser from './AdminUser.vue'
const activeName = ref('home')


</script>

<style lang="less">
.admin-tabs {

    .el-table__body-wrapper {
        overflow: auto;
        width: 100%;
        max-height: 400px;
    }
    .el-pagination{
        margin-top: 20px;
    }
}
</style>