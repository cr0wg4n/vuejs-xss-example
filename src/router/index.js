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
    },
    {
      path: '/search-mitigated',
      name: 'search-mitigated',
      component: () => import('../views/SearchViewMitigated.vue')
    },
    {
      path: '/stored-mitigated',
      name: 'stored-mitigated',
      component: () => import('../views/XSSStoredMitigatedView.vue')
    },
    {
      path: '/reflected-mitigated',
      name: 'reflected-mitigated',
      component: () => import('../views/XSSReflectedMitigatedView.vue')
    },
  ]
})

export default router
