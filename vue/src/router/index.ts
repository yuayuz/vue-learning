import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/ReactivityFundamentals.vue'
import ComputedProperties from '@/views/ComputedProperties.vue'

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
    },
    {
      path: '/ComputedProperties',
      name: 'ComputedProperties',
      component: ComputedProperties
    }
  ]
})

export default router
