export const musicQueue = {
  isRandomMode: false,
  // 写入音乐队列到LocalStorage
  // 设置随机播放模式
  setRandomMode(isRandom) {
    // 切换之前先存储当前音乐
    const beforeSwitchingMusic = this.getCurrentMusic();
    this.isRandomMode = isRandom;
    if (isRandom) {
      // 切换到随机模式，生成随机队列
      this.generateRandomQueue();
      // 设置当前播放的歌曲索引为0，因为它现在是随机列表中的第一首
      this.setCurrentMusicIndex(0);
    } else {
      // 切换回正向播放模式
      // const currentMusic = this.getCurrentMusic(); // 获取当前播放的歌曲
      const originalQueue =JSON.parse(localStorage.getItem('musicPlaylist')) ; // 获取原始队列
      console.log(originalQueue);
      if (beforeSwitchingMusic) {
        // 找到当前歌曲在原始队列中的索引
        const currentMusicIndex = originalQueue.findIndex(music => music.id === beforeSwitchingMusic.id);
        console.log("当前歌曲在原始队列中的索引:", currentMusicIndex);
        if (currentMusicIndex !== -1) {
          // 更新当前音乐的索引为原始队列中的位置
          this.setCurrentMusicIndex(currentMusicIndex);
        }
      }
      // 注意：不需要清除随机队列，因为可能会再次切换到随机模式
    }
  },
  // 生成随机播放列表
  generateRandomQueue() {
    const currentQueue = this.getQueue();
    const currentMusicIndex = this.getCurrentMusicIndex();
    let randomQueue = [];
    if (currentMusicIndex !== null && currentQueue.length > 0) {
      // 将当前播放的歌曲设置为随机列表的第一个
      randomQueue.push(currentQueue[currentMusicIndex]);
      // 获取除当前播放歌曲外的其他歌曲
      let otherSongs = [...currentQueue.slice(0, currentMusicIndex), ...currentQueue.slice(currentMusicIndex + 1)];
      // 随机排序剩余歌曲
      otherSongs = otherSongs.sort(() => Math.random() - 0.5);
      // 合并当前播放的歌曲和随机排序的其他歌曲
      randomQueue = randomQueue.concat(otherSongs);
    }
    // 将随机列表保存到LocalStorage
    localStorage.setItem('randomMusicPlaylist', JSON.stringify(randomQueue));
  },
  // 从LocalStorage获取随机音乐队列
  getRandomQueue() {
    const queue = localStorage.getItem('randomMusicPlaylist');
    return queue ? JSON.parse(queue) : [];
  },
  // 获取当前播放列表，根据播放模式决定是随机列表还是正向列表
  getCurrentQueue() {
    return this.isRandomMode ? this.getRandomQueue() : this.getQueue();
  },

  setQueue(queue) {
    if (!Array.isArray(queue)) {
      console.error('音乐队列必须是一个数组');
      return;
    }
    localStorage.setItem('musicPlaylist', JSON.stringify(queue));
  },

  // 从LocalStorage获取音乐队列
  getQueue() {
    const queue = localStorage.getItem('musicPlaylist');

    return queue ? JSON.parse(queue) : [];
  },

  // 添加单个音乐到队列
  addMusic(music) {
    const queue = this.getQueue();
    queue.push(music);
    this.setQueue(queue);
    if (this.isRandomMode) {
      this.generateRandomQueue(); // 在随机模式下重新生成随机队列
    }
  },

  // 清空音乐队列
  clearQueue() {
    localStorage.removeItem('musicPlaylist');
    localStorage.removeItem('currentMusicIndex');
    if (this.isRandomMode) {
      localStorage.removeItem('randomMusicPlaylist'); // 清除随机队列
    }
  },

  // 设置当前正在播放的歌曲索引
  setCurrentMusicIndex(index) {
    localStorage.setItem('currentMusicIndex', index);
  },

  // 获取当前正在播放的歌曲索引
  getCurrentMusicIndex() {
    const index = localStorage.getItem('currentMusicIndex');
    return index ? parseInt(index, 10) : null;
  },

  // 获取当前正在播放的歌曲
  getCurrentMusic() {
    const index = this.getCurrentMusicIndex();
    const queue = this.getCurrentQueue(); // 使用当前播放模式对应的队列
    return index !== null ? queue[index] || null : null;
  },

  // 重写nextMusic和prevMusic方法以适应随机模式
  nextMusic() {
    let queue = this.getCurrentQueue();
    let index = this.getCurrentMusicIndex();
    if (index !== null && index + 1 < queue.length) {
      this.setCurrentMusicIndex(index + 1);
    } else {
      this.setCurrentMusicIndex(0); // 循环到队列开始
    }
  },

  // 设置上一首歌曲为当前播放
  prevMusic() {
    let queue = this.getCurrentQueue();
    let index = this.getCurrentMusicIndex();
    if (index > 0) {
      this.setCurrentMusicIndex(index - 1);
    } else {
      this.setCurrentMusicIndex(queue.length - 1); // 循环到队列末尾
    }
  },

  // 直接播放指定索引的歌曲
  playMusicAtIndex(index) {
    const queue = this.getQueue();
    if (index >= 0 && index < queue.length) {
      this.setCurrentMusicIndex(index); // 更新当前播放歌曲的索引
      // 在这里添加播放逻辑
    } else {
      console.error('指定的索引超出音乐队列范围');
    }
  },
  // 获取音乐队列的长度
  getQueueLength() {
    const queue = this.getQueue();
    return queue.length;
  },
};