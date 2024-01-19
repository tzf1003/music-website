<template>
    <div class="lyrics-container" >
        <div v-for="(line, index) in parsedLyrics" :key="index" :class="{
            'lyric-line': true,
            'active': currentLine === index,
            'played': index < currentLine
            }"
            ref="lyricLines"
        >
            {{ line.text }}
        </div>
    </div>
</template>
  
<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    currentTime: Number,
  lyrics: {
    type: String,
    default: ''
  }
});

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



// 初始化时解析歌词
onMounted(() => {
  parsedLyrics.value = parseLyrics(props.lyrics);
});

watch(() => props.lyrics, (newLyrics) => {
  parsedLyrics.value = parseLyrics(newLyrics);
});

watch(() => props.currentTime, (newTime) => {
  for (let i = 0; i < parsedLyrics.value.length; i++) {
    if (parsedLyrics.value[i].time > newTime) {
      currentLine.value = i - 1;
      console.log(currentLine.value);
      break;
    }
  }
});

// const lyricsContainer = ref(null);
const lyricLines = ref([]);

// 发射一个自定义事件，包含滚动到的目标位置
const emit = defineEmits(['scroll-to']);

// 当currentLine变化时，滚动到当前播放的歌词行
watch(() => currentLine.value, () => {
  if (lyricLines.value[currentLine.value]) {
    const lineElement = lyricLines.value[currentLine.value];
    // console.log(lineElement.offsetTop);
    emit('scroll-to', lineElement.offsetTop);
  }
});


</script>
  
<style scoped>
.lyrics-container {
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
  