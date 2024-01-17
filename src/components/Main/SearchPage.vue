<template>
    <div class="search-page">
        <!-- tag -->
        <div class="search-page-tag">
            <div class="tag selected">
                <el-button round color="#ffffff">全部</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">歌曲</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">歌单</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">艺人</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">专辑</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">播客</el-button>
            </div>
            <div class="tag">
                <el-button round color="#232323">个人资料</el-button>
            </div>
        </div>
        <div class="search-main">
            <!-- 热门结果 -->
            <div class="popular">
                <div class="popular-title">
                    <span>热门结果</span>
                </div>
                <div class="popular-content">
                    <!-- 图片 -->
                    <div class="popular-img">
                        <img :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                    </div>
                    <!-- name -->
                    <div class="popular-name">
                        <span>句号</span>
                    </div>
                    <!-- 简介 -->
                    <div class="popular-info">
                        <span>歌曲 • 邓紫棋</span>
                    </div>

                    <!-- 播放按钮 -->
                    <el-button class="popular-button" color="#000" circle dark>
                        <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i>
                    </el-button>
                </div>
            </div>
            <!-- 歌曲 -->
            <div class="songs">
                <div class="songs-title">
                    <span>歌曲</span>
                </div>
                <div class="songs-content">
                    <!-- 歌曲列表 -->
                    <div class="song">
                        <el-row>
                            <el-col :span="15">
                                <!-- 图片 -->
                                <div class="song-img">
                                    <img
                                        :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">

                                    <div class="song-img-transparent">
                                        <el-button circle style="
                                                --el-button-hover-text-color: #fff;
                                                --el-button-hover-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-active-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-hover-bg-color:rgba(255, 255, 255, 0.000);
                                                --el-button-outline-color:rgba(255, 255, 255, 0.000);
                                                --el-button-border-color:rgba(255, 255, 255, 0.000);
                                                
                                            ">
                                            <i class="bi bi-play-fill" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                    <!-- 透明层 -->
                                </div>


                                <div class="song-info">
                                    <!-- name -->
                                    <div class="song-name">
                                        <a>句号</a>
                                    </div>
                                    <!-- info -->
                                    <div class="song-introduce">
                                        <span>歌曲 • 邓紫棋</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="song-option">
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-heart" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-heart-fill" style="margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>

                                    <!-- 歌曲时长 -->
                                    <div class="song-time">
                                        <span>3:58</span>
                                    </div>
                                    <!-- 其他选项 -->
                                    <div class="song-other">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <!-- 测试数据 -->
                    <div class="song">
                        <el-row>
                            <el-col :span="15">
                                <!-- 图片 -->
                                <div class="song-img">
                                    <img
                                        :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">

                                    <div class="song-img-transparent">
                                        <el-button circle style="
                                                --el-button-hover-text-color: #fff;
                                                --el-button-hover-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-active-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-hover-bg-color:rgba(255, 255, 255, 0.000);
                                                --el-button-outline-color:rgba(255, 255, 255, 0.000);
                                                --el-button-border-color:rgba(255, 255, 255, 0.000);
                                            ">
                                            <i class="bi bi-play-fill" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                    <!-- 透明层 -->
                                </div>


                                <div class="song-info">
                                    <!-- name -->
                                    <div class="song-name">
                                        <a>句号</a>
                                    </div>
                                    <!-- info -->
                                    <div class="song-introduce">
                                        <span>歌曲 • 邓紫棋</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="song-option">
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-heart" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-heart-fill" style="margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>

                                    <!-- 歌曲时长 -->
                                    <div class="song-time">
                                        <span>3:58</span>
                                    </div>
                                    <!-- 其他选项 -->
                                    <div class="song-other">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="song">
                        <el-row>
                            <el-col :span="15">
                                <!-- 图片 -->
                                <div class="song-img">
                                    <img
                                        :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">

                                    <div class="song-img-transparent">
                                        <el-button circle style="
                                                --el-button-hover-text-color: #fff;
                                                --el-button-hover-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-active-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-hover-bg-color:rgba(255, 255, 255, 0.000);
                                                --el-button-outline-color:rgba(255, 255, 255, 0.000);
                                                --el-button-border-color:rgba(255, 255, 255, 0.000);
                                            ">
                                            <i class="bi bi-play-fill" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                    <!-- 透明层 -->
                                </div>


                                <div class="song-info">
                                    <!-- name -->
                                    <div class="song-name">
                                        <a>句号</a>
                                    </div>
                                    <!-- info -->
                                    <div class="song-introduce">
                                        <span>歌曲 • 邓紫棋</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="song-option">
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-heart" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-heart-fill" style="margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>

                                    <!-- 歌曲时长 -->
                                    <div class="song-time">
                                        <span>3:58</span>
                                    </div>
                                    <!-- 其他选项 -->
                                    <div class="song-other">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="song">
                        <el-row>
                            <el-col :span="15">
                                <!-- 图片 -->
                                <div class="song-img">
                                    <img
                                        :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">

                                    <div class="song-img-transparent">
                                        <el-button circle style="
                                                --el-button-hover-text-color: #fff;
                                                --el-button-hover-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-active-border-color:rgba(255, 255, 255, 0.000);
                                                --el-button-hover-bg-color:rgba(255, 255, 255, 0.000);
                                                --el-button-outline-color:rgba(255, 255, 255, 0.000);
                                                --el-button-border-color:rgba(255, 255, 255, 0.000);
                                            ">
                                            <i class="bi bi-play-fill" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                    <!-- 透明层 -->
                                </div>


                                <div class="song-info">
                                    <!-- name -->
                                    <div class="song-name">
                                        <a>句号</a>
                                    </div>
                                    <!-- info -->
                                    <div class="song-introduce">
                                        <span>歌曲 • 邓紫棋</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="song-option">
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-heart" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-heart-fill" style="margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>

                                    <!-- 歌曲时长 -->
                                    <div class="song-time">
                                        <span>3:58</span>
                                    </div>
                                    <!-- 其他选项 -->
                                    <div class="song-other">
                                        <el-button color="#282828" circle dark>
                                            <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                            <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                        </el-button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <ScrollableRow/>
        <ScrollableRow/>
        <ScrollableRow/>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ScrollableRow from "./ScrollableRow.vue";
</script>

<style  lang="less">
.search-page {
    margin-top: 64px;
    padding-left: 3%;
    padding-right: 3%;

    .search-page-tag {
        display: flex;

        .tag {
            display: block;
            float: left;
            height: 48px;
        }

        .tag.selected .el-button {
            --el-button-bg-color: #fff
        }
    }

    .search-main {
        display: flex;
        /* 设置为 Flexbox 容器 */
        flex-wrap: wrap;

        /* 启用换行 */
        .popular {
            min-width: 324px;
            display: inline-block;
            vertical-align: top;
            margin-right: 40px;

            .popular-title {
                font-size: 24px;
                color: #FFF;
                font-weight: bold;
            }

            .popular-content {
                position: relative;
                margin-top: 10px;
                max-height: 218px;
                min-height: 218px;
                height: 218px;
                background-color: #181818;
                border-radius: 10px;

                .popular-img {
                    padding-left: 20px;
                    padding-top: 20px;
                    width: 92px;
                    height: 92px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }

                .popular-name {
                    padding-top: 15px;
                    padding-left: 20px;
                    font-size: 25px;
                    font-weight: 700;
                }

                .popular-info {
                    color: #A7A7A7;
                    padding-top: 5px;
                    padding-left: 20px;
                    font-size: 14px;
                    font-weight: 400;
                }

                .popular-button {
                    position: absolute;
                    right: 15px;
                    bottom: 15px;
                    width: 48px;
                    height: 48px;
                    border-radius: 100%;
                    background-color: #1FDF64;
                    color: #000;
                    font-size: 25px;
                }

                .popular-button:hover {
                    font-size: 26px;
                    right: 14px;
                    bottom: 14px;
                    width: 50px;
                    height: 50px;
                }
            }

            .popular-content:hover {
                background-color: #282828;
            }
        }

        .songs {
            width: calc(100% - 324px - 40px);
            min-width: 324px;
            display: inline-block;
            vertical-align: top;

            .songs-title {
                font-size: 24px;
                color: #FFF;
                font-weight: bold;
            }

            .songs-content {
                max-height: 218px;
                min-height: 218px;
                height: 218px;
                margin-top: 10px;
                min-height: 218px;
                border-radius: 10px;

                .song {
                    width: 100%;
                    height: 25%;

                    .el-row {
                        width: 100%;
                        height: 100%;

                        .el-col {
                            display: flex;
                            width: 100%;
                            height: 100%;

                            .song-img {
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

                                .song-img-transparent {
                                    position: absolute;
                                    top: 7.3px;
                                    left: 0;
                                    height: 40px;
                                    width: 100%;
                                    background-color: rgba(0, 0, 0, 0.5); // 半透明黑色背景
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    visibility: hidden;

                                    .el-button {
                                        font-size: 30px;
                                        transition: 0s;
                                    }


                                }
                            }

                            .song-info {
                                display: grid;
                                vertical-align: baseline;
                                font-size: 1rem;

                                .song-name {
                                    color: #fff;
                                }

                                .song-name:hover {
                                    text-decoration: underline;
                                }

                                .song-introduce {
                                    color: #a7a7a7;
                                }
                            }

                            .song-option {
                                margin-left: auto;
                                margin-right: auto;
                                display: flex;
                                width: 100%;
                                height: 100%;

                                .song-like {
                                    display: flex;
                                    visibility: hidden;
                                    justify-content: flex-start;
                                    align-items: center;
                                    margin-right: auto;

                                    .el-button {
                                        transition: 0s;
                                    }
                                }

                                .song-time {
                                    margin-right: 10px;
                                    font-size: 15px;
                                    display: flex;
                                    justify-content: flex-end;
                                    align-items: center;
                                }

                                .song-other {
                                    display: flex;
                                    visibility: hidden;
                                    justify-content: flex-end;
                                    align-items: center;

                                    .el-button {
                                        transition: 0s;
                                    }
                                }
                            }
                        }
                    }
                }

                .song:hover {
                    background-color: #282828;

                    .el-row .el-col {
                        .song-option {
                            .song-other {
                                visibility: visible;
                            }

                            .song-like {
                                visibility: visible;
                            }
                        }

                        .song-img {
                            .song-img-transparent {
                                visibility: visible;
                            }
                        }

                    }


                }

            }
        }
    }
}</style>
