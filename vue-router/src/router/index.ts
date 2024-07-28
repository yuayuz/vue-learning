import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GettingStarted from '@/views/Essentials/GettingStarted.vue'

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
    }
  ]
})

export default router
