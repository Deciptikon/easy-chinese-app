import { createRouter, createWebHistory } from 'vue-router'
const BASE_PATH = '/easy-chinese-app'

if (import.meta.env.VITE_DEBUG_MODE === 'true') {
  console.log('Это сборка для дебага)))')
}

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
    {
      path: BASE_PATH + '/one_chinese_to_four_rus',
      name: '1_to_4rus',
      component: () => import('../views/OneChineseToFourRus.vue'),
    },
    {
      path: BASE_PATH + '/one_chinese_to_one_rus',
      name: '1_to_1rus',
      component: () => import('../views/OneChineseToOneRus.vue'),
    },
    {
      path: BASE_PATH + '/one_rus_to_four_chinese',
      name: '1_to_4chi',
      component: () => import('../views/OneRusToFourChinese.vue'),
    },
    {
      path: BASE_PATH + '/adaption_one_chinese_to_four_rus',
      name: 'adaption',
      component: () => import('../views/OneChineseToFourRus.vue'),
    },
  ],
})

export default router
