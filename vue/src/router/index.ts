import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/ReactivityFundamentals.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/templateSyntax',
      name: 'TemplateSyntax',
      component: TemplateSyntax
    },
    {
      path: '/ReactivityFundamentals',
      name: 'ReactivityFundamentals',
      component: ReactivityFundamentals
    }
  ]
})

export default router
