<template>
    <div class="songsheet-header" :style="headerTransparent">
        <!-- 前进后退按钮 -->
        <div class="forward-back">
            <div class="button back">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-chevron-left"></i>
                </el-button>
            </div>
            <div class="button forward">
                <el-button size="default" color="#121212" circle dark style="margin-left: 20px;">
                    <i class="bi bi-chevron-right"></i>
                </el-button>
            </div>
            <!-- 如果滚动到一定高度，则显示这个 -->
            <div class="button play" v-if="isVisible">
                <el-button size="large" color="#1FDF64" circle dark style="margin-left: 20px;">
                    <i class="bi bi-play-fill" style="font-size: 25px; margin-left: 3px;"></i>
                </el-button>
            </div>

            <div class="song-sheet-name" v-if="isVisible">
                <span>已点赞歌曲</span>
            </div>

        </div>
        <div class="explore-user">
            <div class="button app">
                <el-button color="#121212" size="default" round style="
                    margin-left: 10px;
                    font-size: 14px;
                    font-weight: bold;
                ">安装应用</el-button>
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
import { watch, toRefs ,ref,defineProps,computed } from "vue";

const isVisible = ref(false)
const headerTransparent = ref("backdrop-filter: none;");

const props = defineProps({
    scrollAmplitude: Number
});
const { scrollAmplitude } = toRefs(props);
watch(() => props.scrollAmplitude, (newVal, oldVal) => {
    if(newVal > 300){
        isVisible.value = true;
        headerTransparent.value="backdrop-filter: saturate(50%) blur(3px);"
    }else{
        isVisible.value = false;
        headerTransparent.value="none"
    }
    
})


</script>

<style  lang="less">

.songsheet-header {
    border-bottom: 1px solid var(#121212);
    background-image: radial-gradient(transparent 1px, #121212 1px);
    background-size: 1px 1px;
    // backdrop-filter: saturate(50%) blur(3px);
    
    display: flex;
    width: 100%;

    .forward-back {
        width: 65%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        .play {
            margin-right: 10px;
        }

        .song-sheet-name {
            color: #fff;
            font-size: 23px;
            font-family: AlibabaPuHuiTi-Bold;
        }
    }

    .explore-user {
        width: 35%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>
