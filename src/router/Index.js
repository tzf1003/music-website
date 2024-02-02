import { createRouter, createWebHistory } from 'vue-router';
import NavbarTopRouter from './NavbarTopRouter.js';
import MusicKuRouter from './MusicKuRouter.js';
import BottonBarRouter from './BottonBarRouter.js';


const routes = [
    ...NavbarTopRouter,
    ...MusicKuRouter,
    ...BottonBarRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
