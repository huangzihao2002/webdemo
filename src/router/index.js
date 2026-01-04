// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 动态导入视图组件（支持代码分割）
const HomeView = () => import('@/HomeView.vue')
const BagsView = () => import('@/BagsView.vue')
const AccessoriesView = () => import('@/AccessoriesView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/bags', name: 'bags', component: BagsView },
  { path: '/accessories', name: 'accessories', component: AccessoriesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router