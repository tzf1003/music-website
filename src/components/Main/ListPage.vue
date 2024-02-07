<template>
    <div class="list-page">
        <h1>队列</h1>
        <h2>当前播放</h2>
        <div v-for="(music, index) in displayqueue" :key="music">
            <div :class="{ 'current-playback': index == 0, 'wait-playback': index > 0 }" tabindex="0">
                <el-row>
                    <el-col :span="1">
                        <div class="number">
                            <span class="num">{{ index + 1 }}</span>
                            <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="image">
                            <img :src="music.image">
                        </div>
                        <div class="name">
                            <div class="song">
                                <a>{{ music.title }}</a>
                            </div>
                            <div class="singer">
                                <span>{{ music.artist }}</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="info">
                            <a>{{ music.album }}</a>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="like">
                            <el-button color="#282828" circle dark>
                                <i v-if="music.islike" class="bi bi-heart-fill"
                                    style="margin-top: 2px; color: #1FDF64;"></i>
                                <i v-else class="bi bi-heart" style="margin-top: 2px;"></i>
                            </el-button>
                        </div>
                        <div class="time">
                            <span>{{ music.duration }}</span>
                        </div>
                        <div class="other">
                            <el-button color="#282828" circle dark>
                                <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                            </el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <h2 v-if="index == 0" style="margin-top: 32px;">下一首</h2>
        </div>

    </div>
</template>

<script setup>
import { ref,computed,watch } from "vue";
import { musicQueue } from "@/tools/music"
// 获取当前播放列表
const queue = ref(musicQueue.getCurrentQueue())
const displayqueue =computed( ()=>{
    //获取当前播放下标
    const nowIndex = musicQueue.getCurrentMusicIndex();
     // 筛选出 index 大于 nowIndex 的音乐信息
    const filteredQueue = queue.value.filter((_, index) => index >= nowIndex)
    console.log("filteredQueue",filteredQueue);
    console.log("nowIndex",nowIndex);
    return filteredQueue
})

const props = defineProps({
  music: Object,
  queueChange:Object
});

watch(() => props.queueChange, (newVal) => {
    queue.value =  musicQueue.getCurrentQueue();
});

watch(() => props.music, () => {
    queue.value = musicQueue.getCurrentQueue()
});

</script>

<style  lang="less">
.list-page {

    margin-top: 40px+64px;
    padding-left: 16px;
    padding-right: 16px;

    h1 {
        font-size: 24px;
        margin-bottom: 8px;
        color: #ffffff;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 8px;
        color: #b3b3b3;
    }

    .current-playback {
        .el-row {
            .el-col {
                .number {
                    color: #1FDF64 !important;
                    .num{
                        color: #1FDF64 !important;
                    }
                }
            }

            .name {
                .song {
                    color: #1FDF64 !important;
                }

            }
        }

    }

    .current-playback,
    .wait-playback {
        border-radius: 10px;
        width: 100%;

        .el-row {
            height: 100%;
            width: 100%;
            height: 56px;

            .el-col {
                height: 100%;
                width: 100%;
                display: flex;

                .number {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .num {
                        color: #a7a7a7;
                        font-size: 14px;
                        display: block;
                    }

                    .play {
                        font-size: 20px;
                        display: none;
                    }
                }

                .image {
                    border-radius: 5px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: 10px;
                    margin-right: 10px;
                    position: relative;

                    img {
                        height: 40px;
                        width: 40px;
                    }
                }

                .name {
                    padding-top: 5px;
                    padding-bottom: 5px;
                    align-items: center;
                    display: grid;
                    font-size: 16px;

                    .song {
                        overflow: hidden; /* 超出部分隐藏 */
                        white-space: nowrap; /* 不换行，保持内容在一行内 */
                        text-overflow: ellipsis; /* 超出部分显示省略号 */
                        color: #a7a7a7;
                    }

                    .singer {
                        overflow: hidden; /* 超出部分隐藏 */
                        white-space: nowrap; /* 不换行，保持内容在一行内 */
                        text-overflow: ellipsis; /* 超出部分显示省略号 */
                        color: #a7a7a7;
                    }

                    .song:hover {
                        text-decoration: underline;
                    }
                }


                .info {
                    padding-top: 5px;
                    padding-bottom: 5px;
                    align-items: center;
                    display: grid;
                    font-size: 14px;
                    color: #a7a7a7;

                    :hover {
                        text-decoration: underline;
                    }
                }



                .like,
                .other {
                    display: flex;
                    visibility: hidden;
                    justify-content: flex-start;
                    align-items: center;
                    margin-right: auto;

                    .el-button {
                        transition: 0s;
                    }
                }

                .time {
                    font-size: 14px;
                    display: flex;
                    // visibility: hidden;
                    justify-content: flex-start;
                    align-items: center;
                    margin-right: auto;
                    color: #a7a7a7;

                    .el-button {
                        transition: 0s;
                    }

                }


            }
        }

    }

    .current-playback:focus,
    .current-playback:hover,
    .wait-playback:focus,
    .wait-playback:hover {
        background-color: #2A2A2A;

        .el-row {
            .el-col {
                .number {
                    .num {
                        display: none;
                    }

                    .play {
                        display: block;
                    }
                }

                .like,
                .other {
                    visibility: visible;
                }
            }
        }

    }
}
</style>
