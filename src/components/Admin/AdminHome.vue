<template>
    <div>
        <!-- 首页数据块 -->
        <el-row class="admin-home-cards">
            <el-col :span="5">
                <el-card style="background:linear-gradient(135deg,#57ca85,#184e68)" class="card">
                    <p class="card-title">总播放量：</p>
                    <br />
                    <p class="card-num">10000次</p>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="5">
                <el-card style="background:linear-gradient(135deg,#c53364,#622774)" class="card">
                    <p class="card-title">歌曲数量：</p>
                    <br />
                    <p class="card-num">10000首</p>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="5">
                <el-card style="background:linear-gradient(135deg,#65799b,#5e2563)" class="card">
                    <p class="card-title">歌单数量：</p>
                    <br />
                    <p class="card-num">100个</p>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="5">
                <el-card style="background:linear-gradient(135deg,#72c6ef,#004e8f)" class="card">
                    <p class="card-title">用户数量：</p>
                    <br />
                    <p class="card-num">10个</p>
                </el-card>
            </el-col>
        </el-row>

        <!-- 系统信息 -->
        <el-descriptions title="系统信息" style="margin-top: 10px">
            <el-descriptions-item label="系统版本">v0.1</el-descriptions-item>
            <el-descriptions-item label="服务器信息">Ubuntu22.04</el-descriptions-item>
            <el-descriptions-item label="数据库信息">Mysql</el-descriptions-item>
            <el-descriptions-item label="服务器总览">
                <el-tag size="success">优秀</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="数据库状态">
                <el-tag size="danger">负载</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="服务器内存">
                <el-tag size="warning">75%</el-tag>
            </el-descriptions-item>
        </el-descriptions>
        <!-- 图表 -->
        <div style="margin-top: 10px;font-size: 16px; font-weight: 700;">每周播放量数据</div>

        <div ref="echartsBoxRef" style="width: 500px;height:300px;"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const echartsBoxRef = ref(null);
let myChart = null;

onMounted(() => {
    // 确保 echarts 容器 DOM 已经被渲染
    if (echartsBoxRef.value) {
        myChart = echarts.init(echartsBoxRef.value);
        // 绘制图表
        myChart.setOption({
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {},
            series: [
                {
                    data: [2642, 4816, 2012, 9922, 2341, 1055, 4222],
                    type: 'line',
                    smooth: true
                }
            ]
        });
    }
});
</script>

<style lang="less">
.admin-home-cards {
    display: flex;

    .card {
        width: 100%;
        max-width: 200px;

        .card-num {
            font-size: 25px;
        }
    }
}
</style>
