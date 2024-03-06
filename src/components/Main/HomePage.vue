<template>
  <div class="main-home-page">
    <div class="content top-historys">

      <div class="title history" style="font-size: 32px;">
        <span>晚上好</span>
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
    <ScrollableRow />
    <!-- 测试数据 -->
    <ScrollableRow />
    <ScrollableRow />

  </div>
</template>

<script setup>
import { ref } from "vue";
import ScrollableRow from "./ScrollableRow.vue"
import apiService from '@/tools/apiService';

const history = ref(null);
const hot = ref(null);
const like = ref(null);
const singer = ref(null);

const homeData = apiService.fetchWithAuth("home", "GET", null).then((result) => {
  console.log(homeData);
  history.value = result.historys;
  hot.value = result.hots
  like.value = result.likes;
  singer.value = result.singers;
  console.log(history.value);
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
