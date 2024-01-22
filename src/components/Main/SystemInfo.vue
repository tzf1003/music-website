<template>
    <div class="system-info-container">
        <div class="system-info-top">
            <div class="system-info-top-title">
                <span>系统通知</span>
            </div>
            <div class="system-info-top-info">
                <span>这里有您所收到的所有通知。</span>
            </div>
        </div>
        <el-timeline class="system-info-data">
            <el-timeline-item v-for="(activity, index) in notifications" v-bind:timestamp="activity.time" :key="index" placement="top">
                <el-card>
                    <h4>{{activity.title}}</h4>
                    <p>{{activity.content}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const notifications = ref([
    { title: '通知1', time: '2018/4/12', content: '这是第一个通知的内容' },
    { title: '通知2', time: '2018/4/12', content: '这是第二个通知的内容' },
    { title: '通知3', time: '2018/4/12', content: '这是第三个通知的内容' },
    { title: '通知4', time: '2018/4/12', content: '这是第四个通知的内容' },
    { title: '通知5', time: '2018/4/12', content: '这是第五个通知的内容' },
    { title: '通知6', time: '2018/4/12', content: '这是第六个通知的内容' },
    { title: '通知7', time: '2018/4/12', content: '这是第七个通知的内容' },
    { title: '通知8', time: '2018/4/12', content: '这是第八个通知的内容' },
]);
</script>
  
<style lang="less">
.system-info-container {
    margin-left: 20px;
    margin-top: 64px;

    /* 容器样式 */
    .system-info-top {
        .system-info-top-title {
            font-size: 30px;
            font-weight: bolds;
        }

        .system-info-top-info {
            font-size: 15px;
            color: #A7a7A7;
        }
    }
    .system-info-data{
        margin-top: 20px;
        margin-right: 40px;

    }
}

</style>
  