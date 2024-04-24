<template>
  <div class="sheet-container">
    <!-- Top 大块 -->
    <div class="top-background" ref="container" :style="gradientStyle">
      <!-- 图片 -->
      <div class="sheet-img">
        <el-image id="background" :src="songImgUrl" @load="imgColor" ref="imageElement" />
      </div>
      <div class="sheet-info">

        <!-- 歌单名 -->
        <div class="name">
          <span ref="textSpan">{{ songName }}</span>
        </div>
        <div class="brief">
          <span>歌单简介：{{ songDescription }}</span>
        </div>
        <div class="user">
          <span>{{ songUsername }} • {{ songCount }} 首歌曲</span>
        </div>
        <!-- 创建者和歌曲数量 -->
      </div>
    </div>

    <!-- 下大块背景 -->
    <div class="middle-background" :style="darkGradientStyle">

      <div class="sheet-button">
        <!-- 播放按钮区域 -->
        <div class="sheet-button-left">
          <!-- 播放按钮 -->

          <el-button @click="playSheet(sheetId)" class="sheet-play-button" size="large" color="#1FDF64" circle dark style="margin-left: 20px;">
            <i class="bi bi-play-fill" style="margin-left: 3px;"></i>
          </el-button>

          <!-- 其他选项按钮 -->

          <el-button class="sheet-other-button" circle dark style="
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

        <div class="sheet-button-right">
          <!-- 排序方法调整 -->

          <el-select class="sheet-sort-select" v-model="selectValue" placeholder="排序方式" style="
        --el-select-input-focus-border-color:#979797;
        --el-color-primary:#979797;
        width: 100px;
        ">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>

      </div>


      <div class="sheet-table">
        <!-- 表头 -->
        <div class="sheet-table-header">
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
        <div class="song" v-for="(music, key) in musicList" :key="key">
          <el-row>
            <el-col :span="2" style="
            justify-content: center;
            ">
              <!-- id -->
              <div class="song-id">
                <span class="num">{{ key + 1 }}</span>
                <i class="bi bi-play-fill play" style="margin-left: 2px;margin-top: 2px;"></i>
              </div>
            </el-col>
            <el-col :span="7" style="
              display: flex;
              justify-content: flex-start;
            ">
              <!-- 图片+歌曲名+歌手 -->
              <div class="song-img">
                <img :src="music
      .music.imgUrl">
              </div>
              <div class="song-info" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <!-- name -->
                <div class="song-name">
                  <a>{{ music.music.name }}</a>
                </div>
                <!-- info -->
                <div class="song-introduce">
                  <span >
                    歌曲 •
                    <span v-for="(singer, key) in music.singerObject" :key="key">
                      {{ singer.name }}<span v-if="key < music.singerObject.length - 1">, </span>
                    </span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="song-album" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span>{{ music.albumObject.name }}</span>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="song-addtine">
                <span>{{ formatDate(music.music.createTime) }}</span>
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
                    <i v-if="!music.isLike" class="bi bi-heart" style="margin-top: 2px;"></i>
                    <i v-if="music.isLike" class="bi bi-heart-fill" style="margin-top: 2px; color: #1FDF64"></i>
                  </el-button>
                </div>
                <!-- 歌曲时长 -->
                <div class="song-time">
                  <span>{{ formatTime(music.music.duration) }}</span>
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
        <!-- 测试数据 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ColorThief from 'colorthief';
import { useRoute } from 'vue-router';
import apiService from '@/tools/apiService';

const container = ref(null);
const textSpan = ref(null);
const imageUrl = ref(require('@/assets/love-songs.jpg'));
const zcolor = ref('#121212');
const selectValue = ref('1');
const selectOptions = [
  { value: '1', label: '最近添加' },
  { value: '2', label: '字母排序' }
];

const gradientStyle = computed(() => ({
  background: `linear-gradient(${zcolor.value}, ${darken(zcolor.value, 50)})`
}));

const darkGradientStyle = computed(() => ({
  background: `linear-gradient(${darken(zcolor.value, 80)}, #121212)`
}));

function resizeText() {
  const containerWidth = container.value.offsetWidth;
  const textLength = textSpan.value.textContent.length;
  let scale;

  if (textLength <= 5) {
    scale = containerWidth * 0.13; // 假设6个字符或更少时，每个字符较大
  } else {
    scale = containerWidth / textLength; // 字数多时按字符数等比缩小
  }

  scale = Math.min(scale, 120); // 设置最大字体大小限制为150px

  textSpan.value.style.fontSize = `${scale}px`;
}


onMounted(() => {
  setTimeout(resizeText, 100); // 延迟100毫秒执行
  window.addEventListener("resize", resizeText);
});


onUnmounted(() => {
  window.removeEventListener("resize", resizeText);
});

function imgColor() {
  const domImg = document.querySelector('#background');
  const colorthief = new ColorThief();
  domImg.crossOrigin = '';
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
  return '#' + rgba.map(i => i.toString(16).padStart(2, '0')).join('');
}

function darken(hexColor, amount) {
  let r = Math.max(0, parseInt(hexColor.slice(1, 3), 16) - amount);
  let g = Math.max(0, parseInt(hexColor.slice(3, 5), 16) - amount);
  let b = Math.max(0, parseInt(hexColor.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}


// 从url中读取id
const route = useRoute();
const songSheetId = route.params.id;
const song = ref(null);
//初始化变量
const songImgUrl = ref('');
const songName = ref('');
const songDescription = ref('');
const songUsername = ref('');
const songCount = ref('');
const musicList = ref('');
const sheetId=ref(0)
// 通过id读取歌曲信息
apiService.fetchWithAuth("sheet/get?id=" + songSheetId, "GET", null).then((result) => {
  song.value = result;
  songImgUrl.value = result.imgUrl;
  songName.value = result.name;
  songDescription.value = result.description;
  songUsername.value = result.username;
  songCount.value = result.count;
  musicList.value = result.musicList;
  sheetId.value = result.id
  console.log(song.value);
  setTimeout(resizeText, 100); // 延迟100毫秒执行
});
// 定义一个方法来格式化日期
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formatter = new Intl.DateTimeFormat('zh-CN', options);
  return formatter.format(date).replace(/\//g, '年').replace('/', '月') + '日';
}
// 定义转换毫秒为分钟:秒数的方法
function formatTime(ms) {
  const minutes = Math.floor(ms / 60000); // 每分钟60000毫秒
  const seconds = Math.floor((ms % 60000) / 1000); // 计算剩余的秒数
  return `${minutes}:${seconds.toString().padStart(2, '0')}`; // 格式化输出，确保秒数为两位数字
}
function playSheet(sheetId){
  console.log(sheetId)
  //通过sheetid获取播放列表

  //写入
  //播放
}
</script>

<style lang="less">
.sheet-container {
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
    .sheet-img {

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

    .sheet-info {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .name {

        span {
          text-shadow: 0px 0px 100px #505050;
          transition: font-size 0.3s ease-in-out;
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

    .sheet-button {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* 左右对齐 */
      align-items: center;

      .sheet-button-left {
        justify-content: flex-end;

        .sheet-play-button {

          width: 56px;
          height: 56px;

          i {
            font-size: 32px;
          }
        }

        .sheet-other-button {
          width: 56px;
          height: 56px;
          color: #A7A7A7;

          i {
            font-size: 32px;
          }


        }

        .sheet-other-button:active {
          i {
            color: #fff;
          }
        }
      }

      .sheet-button-right {
        justify-content: flex-end;

        .sheet-sort-select {
          margin-right: 20px;
          /* 左右居左 */
          width: 32px;
        }
      }
    }
  }



  .sheet-table {
    max-height: 218px;
    min-height: 218px;
    height: 218px;
    margin-top: 10px;
    border-radius: 10px;

    .sheet-table-header {
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
            }

            .song-name:hover {
              text-decoration: underline;
            }

            .song-introduce {
              color: #a7a7a7;
            }
          }

          .song-album {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #a7a7a7;
          }

          .song-addtine {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #a7a7a7;
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
              display: flex;
              justify-content: center;
              align-items: center;
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

//  可以放表头position: fixed;</style>