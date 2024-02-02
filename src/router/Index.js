import { createRouter, createWebHistory } from 'vue-router';
import NavbarTopRouter from './NavbarTopRouter.js';

const routes = [
    ...NavbarTopRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
