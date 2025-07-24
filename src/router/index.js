import { createRouter, createWebHistory } from 'vue-router'
const BASE_PATH = '/easy-chinese-app'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: BASE_PATH + '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: BASE_PATH + '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: BASE_PATH + '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
