<template>
    <div class="artist-container">
        <!-- Top 大块 -->
        <div class="top-background" ref="container" :style="gradientStyle">
            <!-- 图片 -->
            <div class="artist-img">
                <el-image id="background" :src="imageUrl" @load="imgColor" ref="imageElement" />
            </div>
            <div class="artist-info">

                <!-- 歌单名 -->
                <div class="name">
                    <span ref="textSpan">邓紫棋</span>
                </div>
                <div class="brief">
                    <span>共有 • 10,000,008 名听众</span>
                </div>
                <!-- 创建者和歌曲数量 -->

            </div>

        </div>

        <!-- 下大块背景 -->
        <div class="middle-background" :style="darkGradientStyle">
            <div class="artist-button">
                <!-- 播放按钮区域 -->
                <div class="artist-button-left">
                    <!-- 播放按钮 -->

                    <el-button class="artist-play-button" size="large" color="#1FDF64" circle dark
                        style="margin-left: 20px;">
                        <i class="bi bi-play-fill" style="margin-left: 3px;"></i>
                    </el-button>
                    <!-- 关注按钮 -->
                    <el-button class="artist-follow-button" dark style="
                        --el-button-hover-text-color:#FFF;
                        --el-button-active-border-color:#a5a5a5;
                        --el-button-active-text-color:#a5a5a5;
                        --el-button-active-bg-color:none;
                        --el-button-hover-bg-color:none;
                        --el-button-border-color:#747474;
                        --el-button-hover-border-color: #FFF;
                        border-style: 1px solid;
                        border-radius: 40px;
                    ">
                        <span style="font-weight: bold;">关注</span>
                        <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                    </el-button>
                    <!-- 其他选项按钮 -->
                    <el-button class="artist-other-button" circle dark style="
                        --el-button-hover-text-color:none;
                        --el-button-active-border-color:none;
                        --el-button-active-bg-color:none;
                        --el-button-hover-bg-color:none;
                        --el-button-border-color:none;
                        border-style: none;
                    ">
                        <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                        <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                    </el-button>
                </div>
            </div>
            <!-- 热门title -->
            <div class="hot-title">
                <span>热门</span>
            </div>
            <div class="artist-table">
                <!-- 表头 -->
                <div class="artist-table-header">
                    <el-row style="
                        display: flex;
                        justify-content: flex-end;
                    ">
                        <el-col :span="2" style="justify-content: center;">
                            <!-- id -->
                            <span>#</span>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <span style="padding-left: 10px;">标题</span>

                        </el-col>
                        <el-col :span="5">
                            <!-- 专辑 -->
                            <span>专辑</span>
                        </el-col>
                        <el-col :span="5">
                            <!-- 添加时间 -->
                            <span>添加时间</span>
                        </el-col>
                        <el-col :span="5" style="justify-content: center;">
                            <!-- 时长 -->
                            <span>
                                <i class="bi bi-clock"></i>
                            </span>
                        </el-col>
                    </el-row>
                </div>
                <!-- 歌曲列表内容 -->
                <!-- 歌曲列表 -->
                <div class="song">
                    <el-row>
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
                                        <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                        <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                    </el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!-- 测试数据 开始 -->
                <div class="song">
                    <el-row>
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                        <el-col :span="2" style="
                            justify-content: center;
                        ">
                            <!-- id -->
                            <div class="song-id">
                                <span class="num">1</span>
                                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
                            </div>
                        </el-col>
                        <el-col :span="7" style="
                            display: flex;
                            justify-content: flex-start;
                        ">
                            <!-- 图片+歌曲名+歌手 -->
                            <div class="song-img">
                                <img
                                    :src="'http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130'">
                            </div>
                            <div class="song-info">
                                <!-- name -->
                                <div class="song-name">
                                    <a>句号</a>
                                </div>
                                <!-- info -->
                                <div class="song-introduce">
                                    <span>邓紫棋</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-album">
                                <span>句号</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="song-addtine">
                                <span>2023年10月2日</span>
                            </div>
                        </el-col>
                        <el-col :span="5" style="
                            justify-content: center;
                        ">
                            <div class="song-option">
                                <!-- 点赞歌曲 -->
                                <div class="song-like">
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
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
                                    <el-button circle dark style="
                                        --el-button-hover-text-color:none;
                                        --el-button-active-border-color:none;
                                        --el-button-active-bg-color:none;
                                        --el-button-hover-bg-color:none;
                                        --el-button-border-color:none;
                                        border-style: none;
                                    ">
                                        <i class="bi bi-three-dots" style="margin-top: 2px;"></i>
                                        <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                                    </el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!-- 测试数据 结束 -->
                <!-- 专辑目录 -->
                <!-- <div class="album-title">
                    <span>专辑目录</span>
                </div> -->
                
                <div class="artist-album">
                    <ScrollableRow />
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import { ref, computed, reactive } from 'vue';
import ColorThief from 'colorthief';
import ScrollableRow from './ScrollableRow.vue'
export default {
    components: {
    'ScrollableRow': ScrollableRow
    },
    mounted() {
        this.resizeText();
        window.addEventListener("resize", this.resizeText);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.resizeText);
    },
    methods: {
        resizeText() {
            const container = this.$refs.container;
            const text = this.$refs.textSpan;
            const containerWidth = container.offsetWidth;
            const textWidth = text.offsetWidth;
            // 计算缩放比例，设置最大文字大小为150px。
            const scale = (containerWidth * 0.13) > 150 ? 150 : (containerWidth * 0.13);


            // 根据缩放比例来设置文字大小
            text.style.fontSize = `${scale}px`;
        },
    },

    setup() {

        const imageUrl = ref('https://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=130y130'); // 图片URL
        const zcolor = ref('#121212'); // 默认颜色

        const gradientStyle = computed(() => {
            return {
                background: `linear-gradient(${zcolor.value}, ${darken(zcolor.value, 50)})`
            };
        });
        const darkGradientStyle = computed(() => {
            return {
                background: `linear-gradient(${darken(zcolor.value, 80)}, #121212)`
            };
        });
        function imgColor() {
            const domImg = document.querySelector('#background');
            const colorthief = new ColorThief();

            if (domImg.complete) {
                // 如果图片已经加载完成
                extractColors(domImg, colorthief);
            } else {
                // 图片加载
                domImg.addEventListener('load', () => extractColors(domImg, colorthief));
            }
        }

        function extractColors(domImg, colorthief) {
            zcolor.value = rgbaToHex(colorthief.getColor(domImg)); // 图片主色调
            // console.log('主色调', zcolor.value);
        }

        function rgbaToHex(rgba) {
            let hex = '#';
            for (const i of rgba) {
                hex += i.toString(16).padStart(2, '0');
            }
            return hex;
        }

        // 判断颜色是否为深色
        function isDarkColor(hexColor) {
            let r = parseInt(hexColor.slice(1, 3), 16);
            let g = parseInt(hexColor.slice(3, 5), 16);
            let b = parseInt(hexColor.slice(5, 7), 16);
            if (r + g + b >= 450) {
                //浅色
                return false;
            } else {
                //暗色
                return true;
            }
        }

        // 生成更暗的颜色
        function darken(hexColor, amount) {
            let r = parseInt(hexColor.slice(1, 3), 16) - amount;
            let g = parseInt(hexColor.slice(3, 5), 16) - amount;
            let b = parseInt(hexColor.slice(5, 7), 16) - amount;

            r = r < 0 ? 0 : r;
            g = g < 0 ? 0 : g;
            b = b < 0 ? 0 : b;

            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }

        return {
            imageUrl,
            zcolor,
            imgColor,
            gradientStyle,
            darkGradientStyle,
            ScrollableRow,
        };
    }
};

</script>
    
<style  lang="less">
.artist-container {
    width: 100%;

    .top-background {
        --fluid-height: clamp(250px, calc(250px + calc(100vw - 283px - 0px - 600px)/424*150), 400px);
        --min-fluid-height: clamp(250px, calc(250px + calc(100vw - 283px - 0px - 600px)/424*90), 340px);

        width: 100%;
        // height: 250px;
        height: min(calc(30vh), calc(var(--fluid-height)));
        max-height: 400px;
        min-height: calc(var(--min-fluid-height));
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        /* 将元素在交叉轴（垂直轴）上底部对齐 */
        .artist-img {
            display: flex;
            --left-sidebar-width: 390px;
            --panel-width: 0px;
            min-width: clamp(118px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
            min-height: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
            width: clamp(118px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
            height: clamp(128px, calc(128px + (100vw - var(--left-sidebar-width, 0px) - var(--panel-width, 0px) - 600px)/424*104), 232px);
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;

            .el-image {
                display: flex;
                width: 100%;
                box-shadow: 0px 0px 50px #505050;
                border-radius: 500px;
            }
        }

        .artist-info {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .name {

                // min-width: 300px;
                span {
                    text-shadow: 0px 0px 100px #505050;
                }
            }

            .brief {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                /* 控制行数 */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                // max-width: 330px;
            }

            // .user {
            //     font-size: 14px;
            //     max-width: 330px;
            // }
        }

    }

    .middle-background {
        .hot-title{
            margin-left: 30px;
            font-size: 25px;
            font-weight: bold;
        }
        .artist-button {
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            /* 左右对齐 */
            align-items: center;

            .artist-button-left {
                justify-content: flex-end;

                .artist-play-button {

                    width: 56px;
                    height: 56px;

                    i {
                        font-size: 32px;
                    }
                }

                .artist-other-button {
                    width: 56px;
                    height: 56px;
                    color: #A7A7A7;

                    i {
                        font-size: 32px;
                    }


                }

                .artist-other-button:active {
                    i {
                        color: #fff;
                    }
                }
            }
        }
    }



    .artist-table {
        max-height: 218px;
        min-height: 218px;
        height: 218px;
        margin-top: 10px;
        border-radius: 10px;

        .artist-table-header {
            margin-left: 10px;
            margin-right: 10px;
            width: calc(100% - 20px);
            height: 30px;
            font-size: 15px;
            color: #a7a7a7;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            ;

            .el-row {
                .el-col {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
            }
        }

        .song {
            margin-left: 10px;
            margin-right: 10px;
            width: calc(100% - 20px);
            height: 54.4px;

            .el-row {
                width: 100%;
                height: 100%;

                .el-col {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    height: 100%;

                    .song-id {
                        display: flex;
                        font-size: 17px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .num {
                            color: #a7a7a7;
                            display: block;
                        }

                        .play {
                            color: #fff;
                            font-size: 20px;
                            display: none;
                        }
                    }

                    .song-img {
                        border-radius: 5px;
                        display: flex;
                        margin-left: 10px;
                        margin-right: 10px;
                        position: relative;

                        img {
                            height: 40px;
                            width: 40px;
                        }

                        .song-img-transparent {
                            position: absolute;
                            // top: 0.5px;
                            left: 0;
                            height: 40px;
                            width: 100%;
                            background-color: rgba(0, 0, 0, 0.4); // 半透明黑色背景
                            display: flex;
                            visibility: hidden;

                            .el-button {
                                margin-top: 3px;
                                margin-left: 3px;
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
                            display: block;
                            /* 或者 block */
                            width: 100%;
                            /* 根据需要设置宽度 */
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .song-name:hover {
                            text-decoration: underline;
                        }

                        .song-introduce {
                            color: #a7a7a7;
                            width: 100%;
                            display: block;
                            /* 或者 block */
                            width: 100%;
                            /* 根据需要设置宽度 */
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }

                    .song-album {
                        font-size: 14px;
                        color: #a7a7a7;

                        width: 100%;
                        display: block;
                        /* 或者 block */
                        width: 100%;
                        /* 根据需要设置宽度 */
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .song-addtine {
                        font-size: 14px;
                        color: #a7a7a7;

                        width: 100%;
                        display: block;
                        /* 或者 block */
                        width: 100%;
                        /* 根据需要设置宽度 */
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .song-option {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        .song-like {
                            display: flex;
                            visibility: hidden;

                            .el-button {
                                display: flex;
                                margin-left: 0px;
                                margin-right: 20px;
                                transition: 0s;
                            }
                        }

                        .song-time {

                            font-size: 14px;
                            color: #a7a7a7;
                        }

                        .song-other {
                            visibility: hidden;

                            .el-button {
                                margin-left: 5px;
                                margin-right: 15px;
                                transition: 0s;
                            }
                        }
                    }
                }
            }
        }

        .song:hover {
            background-color: rgba(255, 255, 255, 0.1);

            .el-row .el-col {
                .song-id {
                    .num {
                        display: none;
                    }

                    .play {
                        display: block;
                    }

                }

                .song-option {
                    .song-other {
                        visibility: visible;
                    }

                    .song-like {
                        visibility: visible;
                    }
                }
            }
        }

    }

}

//  可以放表头position: fixed;
</style>
    