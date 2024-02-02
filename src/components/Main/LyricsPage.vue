<template>
  <div class="lyrics-container">
    <div v-for="(line, index) in parsedLyrics" :key="index" :class="{
      'lyric-line': true,
      'active': currentLine === index,
      'played': index < currentLine
    }" ref="lyricLines">
      {{ line.text }}
    </div>
  </div>
</template>
  
<script setup>
import { ref, watch, onMounted,nextTick } from 'vue';

const props = defineProps({
  currentTime: Number,
  lyrics: {
    type: String,
    default: ''
  }
});

const parsedLyrics = ref([]);
const currentLine = ref(0);
// const lyricsContainer = ref(null);
const lyricLines = ref([]);

//解析歌词的操作
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




onMounted(() => {
  // 初始化时解析歌词
  parsedLyrics.value = parseLyrics(props.lyrics);
  //等待渲染完成
  nextTick().then(() => {
    //更新行位置
    updateCurrentLine(props.currentTime);
    //开始滚动行位置
    scrollToCurrentLine();
  });

});
//监听歌词内容。
watch(() => props.lyrics, (newLyrics) => {
  parsedLyrics.value = parseLyrics(newLyrics);
});


// 更新当前行位置的函数
// 该函数通过遍历解析后的歌词数组(parsedLyrics)，根据当前时间(newTime)来更新当前行的索引(currentLine)
// 当遍历到的歌词时间戳大于当前时间时，设置当前行为该歌词行的前一行，然后终止循环
const updateCurrentLine = (newTime) => {
  for (let i = 0; i < parsedLyrics.value.length; i++) {
    // 检查当前遍历到的歌词时间是否大于给定的新时间
    if (parsedLyrics.value[i].time > newTime) {
      // 更新当前行的值为当前歌词行的前一行
      currentLine.value = i - 1;
      // 可以在这里添加日志打印当前行，以便调试
      // console.log(currentLine.value);
      break; // 找到符合条件的行后终止循环
    }
  }
};

// 根据当前行位置滚动到对应的歌词行的函数
// 该函数检查当前行的元素是否存在，如果存在，则获取该元素的offsetTop（即该元素的顶部与其offsetParent的顶部之间的距离）
// 然后，发出一个自定义事件'scroll-to'，并传递该行元素的offsetTop值，以便父组件可以根据这个值来滚动显示当前行的歌词
const scrollToCurrentLine = () => {
  // 检查当前行是否有对应的元素
  if (lyricLines.value[currentLine.value]) {
    // console.log("进入scrollToCurrentLine");
    const lineElement = lyricLines.value[currentLine.value]; // 获取当前行的元素
    // console.log(lineElement.offsetTop); // 打印当前行元素的offsetTop值，以便调试
    emit('scroll-to', lineElement.offsetTop); // 发出'scroll-to'事件，传递当前行元素的offsetTop值
  }
};

//监听Time改变
watch(() => props.currentTime, (newTime) => {
  updateCurrentLine(newTime);
});


// 发射一个自定义事件，包含滚动到的目标位置
const emit = defineEmits(['scroll-to']);

// 当currentLine变化时，滚动到当前播放的歌词行
watch(() => currentLine.value, () => {
  scrollToCurrentLine();
});


</script>
  
<style scoped>
.lyrics-container {
  padding-top: 25%;
  background-color: #51833D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* Adjust based on your design */
  overflow: hidden;
  font-size: 1.2em;
}

.lyric-line {
  color: black;
  transition: all 0.3s ease;
  text-align: center;
}

.active {
  color: white;
  font-size: 1.6em;
  /* Larger font for active line */
}

.played {
  color: #CBDAC5;
}
</style>
