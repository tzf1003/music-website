import { createRouter, createWebHistory } from 'vue-router';
import NavbarTopRouter from './NavbarTopRouter.js';
import MusicKuRouter from './MusicKuRouter.js';
import BottonBarRouter from './BottonBarRouter.js';
import MainHeaderRouter from './MainHeaderRouter.js';


const routes = [
    ...NavbarTopRouter,
    ...MusicKuRouter,
    ...BottonBarRouter,
    ...MainHeaderRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
