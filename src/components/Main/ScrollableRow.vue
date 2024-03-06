<!-- 滚动条 -->

<template>
    <div class="title title-likes">
        <!-- <span>根据你的喜好推荐</span> -->
        <span>专辑目录</span>
        <el-button @click="toggleShowAll" text><span style="font-size: 14px; font-weight: bold;">{{ showAllName
                }}</span></el-button>
    </div>
    <div class="content likes">
        <div class="likes-container" ref="likesContainer" :class="{ 'expanded': showAll }">
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有应有尽有应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
            <div class="like">
                <el-avatar loading="lazy" class="like-img" shape="square"
                    :src="'https://t.mwm.moe/fj/?random=' + Math.random()" />
                <div class="like-title"><span>每日推荐1</span></div>
                <div class="like-info"><span>林俊杰，周杰伦 各种曲风应有尽有</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Props的定义
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

// 定义响应式状态
const showAll = ref(false);
const showAllName = ref("显示全部");
const startX = ref(0);
const scrollLeft = ref(0);
const isDragging = ref(false);
const likesContainer = ref(null); // 使用ref来引用DOM元素

// 定义方法
const handleWheel = (e) => {
  if (!showAll.value) {
    e.preventDefault();
    const scrollAmount = e.deltaY;
    const currentScrollPosition = likesContainer.value.scrollLeft;
    likesContainer.value.scrollTo({
      left: currentScrollPosition + scrollAmount,
      behavior: 'smooth'
    });
  }
};

const handleTouchStart = (e) => {
  startX.value = e.touches[0].pageX - likesContainer.value.offsetLeft;
  scrollLeft.value = likesContainer.value.scrollLeft;
};

const handleTouchMove = (e) => {
  e.preventDefault();
  const x = e.touches[0].pageX - likesContainer.value.offsetLeft;
  const walk = (x - startX.value) * 2; // 滚动速度因子
  likesContainer.value.scrollLeft = scrollLeft.value - walk;
};

const handleMouseDown = (e) => {
  e.preventDefault();
  isDragging.value = true;
  startX.value = e.pageX - likesContainer.value.offsetLeft;
  scrollLeft.value = likesContainer.value.scrollLeft;
};

const handleMouseUp = () => {
  isDragging.value = false;
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - likesContainer.value.offsetLeft;
  const walk = (x - startX.value); // 拖动距离
  likesContainer.value.scrollLeft = scrollLeft.value - walk;
};

const toggleShowAll = () => {
  showAll.value = !showAll.value;
  showAllName.value = showAll.value ? "折叠起来" : "显示全部";
};

// 生命周期钩子
onMounted(() => {
  // 直接操作likesContainer.value进行事件监听
  likesContainer.value.addEventListener('wheel', handleWheel, { passive: false });
  likesContainer.value.addEventListener('touchstart', handleTouchStart, { passive: true });
  likesContainer.value.addEventListener('touchmove', handleTouchMove, { passive: false });
  likesContainer.value.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  if (likesContainer.value) {
    likesContainer.value.removeEventListener('wheel', handleWheel);
    likesContainer.value.removeEventListener('touchstart', handleTouchStart);
    likesContainer.value.removeEventListener('touchmove', handleTouchMove);
    likesContainer.value.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mousemove', handleMouseMove);
  }
});
</script>


<style lang="less">
.title-likes {
    margin-top: 30px;
    margin-bottom: 20px;
    padding-left: 30px;

    display: block;
    width: 95%;

    span {

        font-size: 25px;
        font-weight: bold;
    }

    .el-button {
        display: block;
        float: right;
        /* justify-content:flex-end; */
    }
}

.likes {
    display: block;
    clear: both;
    /* width: 100%; */
    height: auto;

    /* overflow-x: auto; */
    .likes-container {
        display: flex;
        /* white-space: nowrap; */
        max-width: 100%;
        overflow-x: auto;
        /* 添加滚动条 */
        scrollbar-width: none;
        /* 针对Firefox */
        -ms-overflow-style: none;

        /* 针对IE和Edge */
    }

    .likes-container::-webkit-scrollbar {
        display: none;
        /* 针对Chrome, Safari 和 Opera */
    }

    .likes-container.expanded {
        /* 当展开全部时的样式 */
        flex-wrap: wrap;
        /* 使子元素换行显示 */
        overflow-x: hidden;
        /* 隐藏水平滚动条 */
        overflow-y: auto;
        /* 启用垂直滚动 */
    }



    .like {
        display: block;
        max-width: 195px;
        min-width: 145px;
        padding: 16px 16px 16px 16px;
        margin: 5px 5px 5px 5px;
        display: block;
        /* float: left; */
        width: calc(100% / 5 - 10px - 16px - 16px);
        /* 宽高比 */
        aspect-ratio: 160 / 243;
        border-radius: 5px;
        background-color: hsla(0, 0%, 100%, 0.07);

        :hover {
            background-color: hsla(0, 0%, 100%, 0.2);
        }

        .like-img {
            width: 100%;
            height: calc(100% * (159 / 242));
        }

        .like-title {
            width: 100%;
            /* display:inline-block;  */
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            color: #FFF;
            font-size: 14px;
            font-weight: bold;
        }

        .like-info {
            margin-top: 4px;
            width: 100%;

            /* 多行溢出省略 */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;

            color: #A7A7A7;
            font-size: 13px;

        }
    }



}
</style>
