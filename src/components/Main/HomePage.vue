<template>
  <div class="main-home-page">
    <div class="content top-historys">

      <div class="title history" style="font-size: 32px;">
        <span>{{ greeting }} {{ username }}</span>
      </div>
      <div class="historys">
        <el-row :gutter="10">
          <el-col :span="6" class="historys-content">
            <router-link class="router-link" v-if="history != undefined && history != null && history.length >= 1"
              :to="'/' + history[0].hisType + '/' + history[0].hisId">
              <div class="history">
                <el-avatar class="history-img" style="min-width: 48px; height: 48px;" shape="square" :size="48"
                  :src="history[0].hisObj.imgUrl" />
                <span class="history-title">{{ history[0].hisObj.name }}</span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="6" class="historys-content">
            <router-link class="router-link" v-if="history != undefined && history != null && history.length >= 2"
              :to="'/' + history[1].hisType + '/' + history[1].hisId">
              <div class="history">
                <el-avatar class="history-img" style="min-width: 48px; height: 48px;" shape="square" :size="48"
                  :src="history[1].hisObj.imgUrl" />
                <span class="history-title">{{ history[1].hisObj.name }}</span>
              </div>
            </router-link>
          </el-col>
          <el-col v-if="history != undefined && history != null && history.length >= 3" :span="6"
            class="historys-content">
            <router-link class="router-link" v-if="history != undefined && history != null && history.length >= 3"
              :to="'/' + history[2].hisType + '/' + history[2].hisId">
              <div class="history">
                <el-avatar class="history-img" style="min-width: 48px; height: 48px;" shape="square" :size="48"
                  :src="history[2].hisObj.imgUrl" />
                <span class="history-title">{{ history[2].hisObj.name }}</span>
              </div>
            </router-link>
          </el-col>
          <el-col v-if="history != undefined && history != null && history.length >= 4" :span="6"
            class="historys-content">
            <router-link class="router-link" v-if="history != undefined && history != null && history.length >= 4"
              :to="'/' + history[3].hisType + '/' + history[3].hisId">
              <div class="history">
                <el-avatar class="history-img" style="min-width: 48px; height: 48px;" shape="square" :size="48"
                  :src="history[3].hisObj.imgUrl" />
                <span class="history-title">{{ history[3].hisObj.name }}</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <ScrollableRow v-if="hotsItems.length!=0" title="热门推荐" :items="hotsItems" />
    <ScrollableRow v-if="likeItems.length!=0" title="猜你喜欢" :items="likeItems" />
    <ScrollableRow v-if="singersItems.length!=0" title="歌手推荐" :items="singersItems" />
    <ScrollableRow v-if="historyItems.length!=0" title="历史播放" :items="historyItems" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ScrollableRow from "./ScrollableRow.vue"
import apiService from '@/tools/apiService';

const history = ref(null);
const hot = ref(null);
const like = ref(null);
const singer = ref(null);
const hotsItems = ref([]);
const likeItems = ref([]);
const singersItems = ref([]);
const historyItems = ref([]);
const username = ref('')
// 创建一个响应式数据来存储当前的时间
const currentTime = ref(new Date());
// 计算属性，根据当前时间返回不同的问候语
const greeting = computed(() => {
  const hours = currentTime.value.getHours();
  if (hours >= 5 && hours < 12) {
    return '早上好';
  } else if (hours >= 12 && hours < 14) {
    return '中午好';
  } else if (hours >= 14 && hours < 18) {
    return '下午好';
  } else {
    return '晚上好';
  }
});
//获取用户名
var userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo != null) {
  username.value = userInfo.username;
}


const homeData = apiService.fetchWithAuth("home", "GET", null).then((result) => {
  history.value = result.historys;
  hot.value = result.hots
  like.value = result.likes;
  singer.value = result.singers;

  //设置热门推荐
  for (var hot1 of hot.value) { // 使用for...of循环遍历数组元素
    let list = {
      name: hot1.name,
      description: hot1.description,
      id: hot1.id,
      imgUrl: hot1.imgUrl,
      type: "sheet"
    };
    hotsItems.value.push(list); // 使用push方法添加元素到数组中
  }
  //设置猜你喜欢
  likeItems.value.push({
    name: like.value[0].name,
    description: like.value[0].description,
    id: like.value[0].id,
    imgUrl: like.value[0].imgUrl,
    type: "sheet"
  });
  likeItems.value.push({
    name: like.value[1].name,
    description: like.value[1].description,
    id: like.value[1].id,
    imgUrl: like.value[1].imgUrl,
    type: "sheet"
  });
  likeItems.value.push({
    name: like.value[2].name,
    description: like.value[2].description,
    id: like.value[2].id,
    imgUrl: like.value[2].imgUrl,
    type: "singer"
  });
  likeItems.value.push({
    name: like.value[3].name,
    description: like.value[3].description,
    id: like.value[3].id,
    imgUrl: like.value[3].imgUrl,
    type: "singer"
  });
  likeItems.value.push({
    name: like.value[4].name,
    description: like.value[4].description,
    id: like.value[4].id,
    imgUrl: like.value[4].imgUrl,
    type: "music"
  });
  likeItems.value.push({
    name: like.value[5].name,
    description: like.value[5].description,
    id: like.value[5].id,
    imgUrl: like.value[5].imgUrl,
    type: "music"
  });

  //设置歌手推荐
  for (var singer1 of singer.value) { // 使用for...of循环遍历数组元素
    let list = {
      name: singer1.name,
      description: singer1.description,
      id: singer1.id,
      imgUrl: singer1.imgUrl,
      type: "singer"
    };
    singersItems.value.push(list); // 使用push方法添加元素到数组中
  }
  //历史播放
  if (history.value != null) {
    for (var history1 of history.value) { // 使用for...of循环遍历数组元素
    let list = {
      name: history1.hisObj.name,
      description: history1.hisObj.description,
      id: history1.hisObj.id,
      imgUrl: history1.hisObj.imgUrl,
      type: history1.hisType
    };
    historyItems.value.push(list); // 使用push方法添加元素到数组中
  }
  }else{
    historyItems.value=[];
  }

});
const handle = (type, id) => {
  this.$router.push('/' + type + '/' + id);
}

</script>


<style>
.top-historys {
  padding-top: 74px;
  padding-bottom: 10px;
}

.main-home-page {
  padding-left: 3%;
  padding-right: 3%;
}

.top-historys .el-row .el-col .history {
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, 0.07);
}

.top-historys .el-row .el-col .history:hover {
  background-color: hsla(0, 0%, 100%, 0.2);
}

.top-historys .el-row .el-col:last-child {
  margin-bottom: 0;
}

.top-historys .el-row .el-col .history {
  display: flex;
  align-items: center;
}

.top-historys .el-row .el-col .history .history-title {

  width: calc(100% - 48px);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
}

.main-home-page .title {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-overflow: ellipsis;
}
</style>
