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

<script>
import { ref } from "vue";
export default {
    data() {
        return {
            // 将 showAll 放入函数中，以确保每个组件实例都有独立的状态
            showAll: false,
            showAllName: "显示全部",
            startX: 0,
            scrollLeft: 0,
            isDragging: false,
        };
    },
    mounted() {
        const likesContainer = this.$refs.likesContainer;

        // 之前的鼠标滚轮和触摸事件监听
        likesContainer.addEventListener('wheel', this.handleWheel, { passive: false });
        likesContainer.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        likesContainer.addEventListener('touchmove', this.handleTouchMove, { passive: false });

        // 新增的鼠标拖动事件监听
        likesContainer.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        const likesContainer = this.$refs.likesContainer;
        if (likesContainer) {
            likesContainer.removeEventListener('wheel', this.handleWheel);
            likesContainer.removeEventListener('touchstart', this.handleTouchStart);
            likesContainer.removeEventListener('touchmove', this.handleTouchMove);

            likesContainer.removeEventListener('mousedown', this.handleMouseDown);
            window.removeEventListener('mouseup', this.handleMouseUp);
            window.removeEventListener('mousemove', this.handleMouseMove);
        }
    },
    methods: {
        handleWheel(e) {
            // 只有在非“显示全部”模式下，才改变滚动行为
            if (!this.showAll) {
                e.preventDefault();
                const scrollAmount = e.deltaY;
                const currentScrollPosition = this.$refs.likesContainer.scrollLeft;
                this.$refs.likesContainer.scrollTo({
                    left: currentScrollPosition + scrollAmount,
                    behavior: 'smooth'
                });
            }
        },
        handleTouchStart(e) {
            this.startX = e.touches[0].pageX - this.$refs.likesContainer.offsetLeft;
            this.scrollLeft = this.$refs.likesContainer.scrollLeft;
        },
        handleTouchMove(e) {
            e.preventDefault();
            const x = e.touches[0].pageX - this.$refs.likesContainer.offsetLeft;
            const walk = (x - this.startX) * 2; // 滚动速度因子
            this.$refs.likesContainer.scrollLeft = this.scrollLeft - walk;
        },
        handleMouseDown(e) {
            e.preventDefault(); // 防止默认事件，如文本选择或图片拖动
            this.isDragging = true;
            this.startX = e.pageX - this.$refs.likesContainer.offsetLeft;
            this.scrollLeft = this.$refs.likesContainer.scrollLeft;
        },
        handleMouseUp() {
            this.isDragging = false;
        },
        handleMouseMove(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.likesContainer.offsetLeft;
            const walk = (x - this.startX); // 拖动距离
            this.$refs.likesContainer.scrollLeft = this.scrollLeft - walk;
        },
        toggleShowAll() {
            console.log(this.showAll);
            if (this.showAll) {
                this.showAll = false
                this.showAllName = "显示全部"
            } else {
                this.showAll = true
                this.showAllName = "折叠起来"
            }


            // 如果需要，当切换到“显示全部”模式时，可以重置滚动位置
            // if (this.showAll) {
            //     this.$refs.likesContainer.scrollLeft = 0;
            // }
        },
    },

};
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
