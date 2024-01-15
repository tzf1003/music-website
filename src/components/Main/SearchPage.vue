<template>
    <!-- 搜索框 -->
    <div class="search-home-page">
        <div class="content-search">
            <div class="title">
                <span>搜索</span>
            </div>
        </div>
        <!-- 搜索 -->
        <div class="search">
            <el-input placeholder="想听什么？" :prefix-icon="Search" style="
                --el-input-focus-border:#979797;
                --el-input-focus-border-color:#979797;
                " />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Search
} from '@element-plus/icons-vue'
</script>

<style  lang="less">
.content-search {
    display: block;
    margin-left: 8px;
    margin-right: 8px;

    // width: 
}

.content-search .title {
    display: block;
    float: left;
}

.content-search .search {
    display: block;
    float: left;
    width: 150px;
}
</style>
