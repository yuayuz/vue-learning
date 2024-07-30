import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Example from '@/views/CoreConcepts/Example.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})

export default router
