<template>
    <div class="song-info-container">
        <!-- Top 大块 -->
        <div class="top-background" ref="container" :style="gradientStyle">
            <!-- 图片 -->
            <div class="song-info-img">
                <el-image id="background" :fit="cover" :src="imageUrl" @load="imgColor" ref="imageElement" />
            </div>
            <div class="song-info-info">
                <!-- 歌单名 -->
                <div class="name">
                    <span ref="textSpan">句号</span>
                </div>
                <!-- <div class="brief">
            <span>歌单简介：This playlist was created by X1aoS0ng.....This playlist was created by X1aoS0ng</span>
          </div> -->
                <div class="user">
                    <span>邓紫棋 • 播放量:18,888,888 • 时长:3:55</span>
                </div>
                <!-- 创建者和歌曲数量 -->

            </div>

        </div>

        <!-- 下大块背景 -->
        <div class="middle-background" :style="darkGradientStyle">

            <div class="song-info-button">
                <!-- 播放按钮区域 -->
                <div class="song-info-button-left">
                    <!-- 播放按钮 -->

                    <el-button class="song-info-play-button" size="large" color="#1FDF64" circle dark
                        style="margin-left: 20px;">
                        <i class="bi bi-play-fill" style="margin-left: 3px;"></i>
                    </el-button>
                    <!-- 喜欢按钮 -->
                    <el-button class="song-info-like-button" circle dark style="
                        --el-button-hover-text-color:none;
                        --el-button-active-border-color:none;
                        --el-button-active-bg-color:none;
                        --el-button-hover-bg-color:none;
                        --el-button-border-color:none;
                        border-style: none;
                    ">
                        <i class="bi bi-heart" style="margin-top: 2px;"></i>
                        <!-- <i class="bi bi-play-fill" style="margin-left: 2px;margin-top: 2px;"></i> -->
                    </el-button>

                    <!-- 其他选项按钮 -->
                    <el-button class="song-info-other-button" circle dark style="
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
            <!-- 歌词 -->
            <div class="song-info-lyric">
                <div class="song-info-lyric-title">
                    <span >歌词</span>
                </div>
                
                <div v-for="(line, index) in parsedLyrics" :key="index" :class="{
                    'lyric-line': true,
                }" ref="lyricLines">
                    {{ line.text }}
                </div>
            </div>
            <!-- 基于此歌曲的推荐 -->
            <div class="song-info-recommend">
                <div class="song-info-recommend-title">

                </div>
                基于此歌曲的推荐

                <div class="song-info-recommend-content">
                    <!-- 歌曲列表 -->
                    <div class="song" tabindex="1">
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
                                    <!-- 播放量 -->
                                    <div class="song-playback-volume">
                                        <span>18,888,888</span>
                                    </div>
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button  circle dark style="
                                            --el-button-active-text-color: #A7A7A7;
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
                                            --el-button-active-text-color: #A7A7A7;
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
                    <!-- 测试数据开始 -->
                    <div class="song" tabindex="1">
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
                                    <!-- 播放量 -->
                                    <div class="song-playback-volume">
                                        <span>18,888,888</span>
                                    </div>
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button  circle dark style="
                                            --el-button-active-text-color: #A7A7A7;
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
                                            --el-button-active-text-color: #A7A7A7;
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
                    <div class="song" tabindex="1">
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
                                    <!-- 播放量 -->
                                    <div class="song-playback-volume">
                                        <span>18,888,888</span>
                                    </div>
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button  circle dark style="
                                            --el-button-active-text-color: #A7A7A7;
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
                                            --el-button-active-text-color: #A7A7A7;
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
                    <div class="song" tabindex="1">
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
                                    <!-- 播放量 -->
                                    <div class="song-playback-volume">
                                        <span>18,888,888</span>
                                    </div>
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button  circle dark style="
                                            --el-button-active-text-color: #A7A7A7;
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
                                            --el-button-active-text-color: #A7A7A7;
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
                    <div class="song" tabindex="1">
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
                                    <!-- 播放量 -->
                                    <div class="song-playback-volume">
                                        <span>18,888,888</span>
                                    </div>
                                    <!-- 点赞歌曲 -->
                                    <div class="song-like">
                                        <el-button  circle dark style="
                                            --el-button-active-text-color: #A7A7A7;
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
                                            --el-button-active-text-color: #A7A7A7;
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
                    <!-- 测试数据结束 -->

                </div>

            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ColorThief from 'colorthief';

const container = ref(null);
const textSpan = ref(null);
let lyrics = `
[00:00.00] 作词 : G.E.M.邓紫棋
[00:01.00] 作曲 : G.E.M.邓紫棋
[00:02.00] 编曲 : G.E.M.邓紫棋/T-Ma
[00:03.00] 制作人 : G.E.M.邓紫棋/T-Ma
[00:06.31]可惜我们终于来到
[00:10.18]一个句号
[00:13.16]窗外不愿飞的蜂鸟
[00:16.58]也在哀悼
[00:19.67]城市再也不会听到
[00:23.44]我们争吵
[00:26.42]你会不会少了一点烦恼
[00:33.03]回到十二年前
[00:34.72]回忆就在眼前
[00:36.69]你戴着帽子而我样子
[00:38.70]带着腼腆
[00:39.65]不过第一次的见面
[00:41.59]你说你有先见
[00:43.11]我的先天被训练过
[00:45.03]我能有片天
[00:46.37]我当时天真寡见鲜闻
[00:49.50]不像成年人有能力辨认
[00:52.53]不是为了赚了有钱分
[00:54.83]我为我的前程
[00:56.51]希望我写的歌里面
[00:58.41]有更好的和弦声
[00:59.87]时针滴滴答
[01:03.06]你还记得吗
[01:06.36]说句心里话
[01:09.73]你还怀念吗
[01:13.10]第一次发唱片
[01:14.73]就一马当先
[01:16.40]从此在大场面
[01:17.86]我不再站旁边
[01:19.86]我是真的感谢
[01:21.20]佩服你的眼界
[01:22.94]怎么想到
[01:23.90]和你是带着刺痛地完结
[01:27.18]你看着一朵花慢慢萌芽
[01:30.31]我却看着你意气慢慢风发
[01:33.12]欲望聚沙成塔
[01:34.80]价值慢慢分岔
[01:36.25]太多失望
[01:37.04]让我对你的信任慢慢崩塌
[01:39.73]可惜我们终于来到
[01:43.48]一个句号
[01:46.35]窗外不愿飞的蜂鸟
[01:50.17]也在哀悼
[01:52.98]城市再也不会听到
[01:56.75]我们争吵
[01:59.66]你会不会少了一点烦恼
[02:06.40]时针滴滴答
[02:09.71]你还记得吗
[02:13.03]说句心里话
[02:16.40]你还怀念吗
[02:19.05]你说我是个商品
[02:20.76]没有你我就不可以
[02:22.43]这些扭曲的真理
[02:24.06]差点毁掉我的自信
[02:25.80]如今的我已觉醒
[02:27.37]如今我不再哭泣
[02:29.11]再不怕坚持自己
[02:30.62]做你没做对的决定
[02:32.53]你知道吗
[02:33.65]这一辈子除了我的爸爸
[02:37.04]你曾是我最信任的男人吧
[02:39.70]但空白的娃娃
[02:41.21]总会慢慢长大
[02:42.84]抱歉我没法
[02:43.91]永远当你听话的傻瓜
[02:46.38]可惜我们终于来到
[02:50.09]一个句号
[02:53.00]窗外不愿飞的蜂鸟
[02:56.93]也在哀悼
[02:59.82]城市再也不会听到
[03:03.53]我们争吵
[03:06.46]你会不会少了一点烦恼
[03:10.11]我们终于来到
[03:12.07]一个句号
[03:15.12]多少年里多少遍你
[03:13.07]
[03:18.78]多少错却没多少歉意
[03:16.92]
[03:22.06]但过去了就不再介意
[03:20.16]
[03:23.82]把珍贵的放心里
[03:23.06]
[03:25.11]把痛的伤的全都忘记
[03:28.75]我青春的全部回忆
[03:26.78]
[03:31.67]那爱的恨的全都是你
[03:30.20]
[03:35.79]希望你偶尔也会想起
[03:33.66]
[03:37.14]就让我真心真意
[03:38.43]把歌唱完重新开始
[03:40.12]时针滴滴答
[03:43.09]你还记得吗
[03:46.29]说句心里话
[03:49.95]你还怀念吗
[03:51.37] 和音 : G.E.M.邓紫棋
[03:52.79] 混音 : Richard Furch
[03:54.21] 母带 : Randy Merrill @ Sterling Sound
[03:55.63] 版权所有，翻版必究。本专辑涉及的任何作品，包括但不限于词曲、录音、录像、视听、文字、摄影和美术等作品，未经权利人授权不得使用。
`
const resizeText = () => {
    if (!container.value || !textSpan.value) return;

    const containerWidth = container.value.offsetWidth;
    const textWidth = textSpan.value.offsetWidth;
    console.log(containerWidth, textWidth);

    const scale = (containerWidth * 0.13) > 150 ? 150 : (containerWidth * 0.13);
    textSpan.value.style.fontSize = `${scale}px`;
};

onMounted(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    parsedLyrics.value = parseLyrics(lyrics);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeText);
});

const imageUrl = ref('http://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=130y130');
const zcolor = ref('#121212');

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
        extractColors(domImg, colorthief);
    } else {
        domImg.addEventListener('load', () => extractColors(domImg, colorthief));
    }
}

function extractColors(domImg, colorthief) {
    zcolor.value = rgbaToHex(colorthief.getColor(domImg));
}

function rgbaToHex(rgba) {
    let hex = '#';
    for (const i of rgba) {
        hex += i.toString(16).padStart(2, '0');
    }
    return hex;
}

function darken(hexColor, amount) {
    let r = parseInt(hexColor.slice(1, 3), 16) - amount;
    let g = parseInt(hexColor.slice(3, 5), 16) - amount;
    let b = parseInt(hexColor.slice(5, 7), 16) - amount;

    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

//歌词
const parsedLyrics = ref([]);
const currentLine = ref(0);

const parseLyrics = (lyrics) => {
    return lyrics.split("\n").map((line) => {
        const parts = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
        if (parts && parts[4].trim() !== '') {
            return {
                time: parseInt(parts[1]) * 60 + parseInt(parts[2]) + parseInt(parts[3]) / 100,
                text: parts[4].trim()
            };
        }
        return { time: 0, text: '' };
    }).filter(line => line.text !== ''); // 过滤掉空行
};
</script>


    
<style  lang="less">
.song-info-container {
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
        .song-info-img {

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
                border-radius: 5px;
            }
        }

        .song-info-info {
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

            .user {
                font-size: 14px;
                max-width: 330px;
            }
        }

        .middle-background {
            height: 250px;
        }
    }

    .middle-background {

        .song-info-button {
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            /* 左右对齐 */
            align-items: center;

            .song-info-button-left {
                justify-content: flex-end;

                .song-info-play-button {

                    width: 56px;
                    height: 56px;

                    i {
                        font-size: 32px;
                    }
                }

                .song-info-like-button {
                    width: 56px;
                    height: 56px;
                    color: #A7A7A7;

                    i {
                        font-size: 32px;
                    }
                }

                .song-info-other-button {
                    width: 56px;
                    height: 56px;
                    color: #A7A7A7;

                    i {
                        font-size: 32px;
                    }


                }

                .song-info-like-button:hover {
                    i {
                        color: #fff;
                    }
                }

                .song-info-other-button:hover {
                    i {
                        color: #fff;
                    }
                }

                .song-info-like-button:active {
                    i {
                        color: #A7A7A7;
                    }
                }

                .song-info-other-button:active {
                    i {
                        color: #A7A7A7;
                    }
                }
            }
        }
        .song-info-lyric{
            margin-left: 30px;
            .song-info-lyric-title{
                margin-bottom: 10px;
                font-size: 25px;

            }
            .lyric-line{
                font-size: 16px;
                color: #B9B9B8;
            }
        }
        .song-info-recommend{
            margin-left: 30px;
            .song-info-recommend-title{
                margin-bottom: 10px;
                font-size: 25px;
            }
            .song-info-recommend-content{
                max-height: 218px;
                min-height: 218px;
                height: 218px;
                margin-top: 10px;
                min-height: 218px;
                border-radius: 10px;

                .song {
                    width: 100%;
                    height: 25%;
                    border-radius: 5px;
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

                                .song-playback-volume{
                                    font-size: 15px;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    margin-right: auto;
                                    color: #999999;
                                }
                                
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
                                    color: #999999;
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
                .song:focus {
                    background-color: #5A595A;
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
    