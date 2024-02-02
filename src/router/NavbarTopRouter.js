import HomePage from "@/components/Main/HomePage.vue";
import SearchPage from "@/components/Main/SearchPage.vue"
import HomeHeader from "@/components/Main/MainHeader/HomeHeader.vue"
import SearchHeader from "@/components/Main/MainHeader/SearchHeader.vue"


export default [
  {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      header: HomeHeader
    }
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      default: SearchPage,
      header: SearchHeader
    }
  }
];

