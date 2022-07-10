import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/stored',
      name: 'stored',
      component: () => import('../views/XSSStoredView.vue')
    },
    {
      path: '/reflected',
      name: 'reflected',
      component: () => import('../views/XSSReflectedView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router
