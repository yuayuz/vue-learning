import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TheSimplestStore from '@/views/CoreConcepts/TheSimplestStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TheSimplestStore',
      name: 'TheSimplestStore',
      component: TheSimplestStore
    }
  ]
})

export default router
