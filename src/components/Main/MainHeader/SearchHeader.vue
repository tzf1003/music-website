<template>
    <div class="search-header">
        <!-- 前进后退按钮 -->
        <div class="forward-back">
            <div class="button back">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-chevron-left"></i>
                </el-button>
            </div>
        </div>
        <div class="search-input">
            <el-input v-model="SearchInput" size="large" placeholder="想听什么？" :prefix-icon="Search" style="
                    height:48px;
                    --el-input-border-radius:500px;
                    --el-input-focus-border-color:#fff;
                    border-style: none;
                    /* --el-border-color:none; */
                " />
        </div>
        <div class="explore-user">
            <div class="button explore">
                <el-button color="#FFF" size="default" round style="
              font-size: 14px;
              font-weight: bold;
            ">开通VIP会员</el-button>
            </div>
            <!-- 通知 -->
            <div class="button notice">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-bell"></i>
                    <!-- <i class="bi bi-bell-fill"></i> -->
                </el-button>
            </div>
            <div class="button user">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-person"></i>
                </el-button>
            </div>
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
.search-header {
    border-bottom: 1px solid var(#121212);
    background-image: radial-gradient(transparent 1px, #121212 1px);
    background-size: 1px 1px;
    backdrop-filter: saturate(50%) blur(3px);

    display: flex;
    width: 100%;
}

.search-header .forward-back {
    width: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.search-header .search-input {

    width: 35%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.search-header .explore-user {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>
