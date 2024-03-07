import SongSheetHeader from "@/components/Main/MainHeader/SongSheetHeader.vue";
import SongSheetPage from "@/components/Main/SongSheetPage.vue";
import ArtistPage from "@/components/Main/ArtistPage.vue";

export default [
  {
    path: '/sheet/:id',
    name: 'SongSheet',
    components: {
      default: SongSheetPage,
      header: SongSheetHeader
    }
  },
  {
    path: '/singer/:id',
    name: 'Artist',
    components: {
      default: ArtistPage,
      header: SongSheetHeader
    }
  }
];

