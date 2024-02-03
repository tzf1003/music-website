export const musicQueue = {
  // 写入音乐队列到LocalStorage
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
  },

  // 清空音乐队列
  clearQueue() {
    localStorage.removeItem('musicPlaylist');
    localStorage.removeItem('currentMusicIndex');
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
    if (index !== null) {
      const queue = this.getQueue();
      return queue[index] || null;
    }
    return null;
  },

  // 设置下一首歌曲为当前播放
  nextMusic() {
    const queue = this.getQueue();
    let index = this.getCurrentMusicIndex();
    if (index !== null && index + 1 < queue.length) {
      this.setCurrentMusicIndex(index + 1);
    } else {
      this.setCurrentMusicIndex(0); // 循环到队列开始
    }
  },

  // 设置上一首歌曲为当前播放
  prevMusic() {
    const queue = this.getQueue();
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
      // 这里可以加入实际播放音乐的逻辑，比如调用音乐播放器的API
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
