import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GettingStarted from '@/views/Essentials/GettingStarted.vue'
import DynamicRouteMatchingWithParams from '@/views/Essentials/DynamicRouteMatchingWithParams.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/GettingStarted',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/DynamicRouteMatchingWithParams/:name/:id',
      name: 'DynamicRouteMatchingWithParams',
      component: DynamicRouteMatchingWithParams
    }
  ]
})

export default router
