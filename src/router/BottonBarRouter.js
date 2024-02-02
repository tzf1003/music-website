import ListPage from "@/components/Main/ListPage.vue";
import LyricsPage from "@/components/Main/LyricsPage.vue";
import HomeHeader from "@/components/Main/MainHeader/HomeHeader.vue"
import SongInfoPage from "@/components/Main/SongInfoPage.vue"

export default [
  {
    // 歌词
    path: '/lyrics',
    name: 'Lyrics',
    components: {
      default: LyricsPage,
    }
  },
  {
    // 歌曲列表
    path: '/list',
    name: 'ListPage',
    components: {
      default: ListPage,
      header: HomeHeader
    }
  },
  {
    // 歌曲信息
    path: '/song/:id',
    name: 'Song',
    components: {
      default: SongInfoPage,
      header: HomeHeader
    }
  }
];

