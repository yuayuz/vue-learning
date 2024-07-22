import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/ReactivityFundamentals.vue'
import ComputedProperties from '@/views/ComputedProperties.vue'
import ClassAndStyleBindings from '@/views/ClassAndStyleBindings.vue'
import ConditionalRendering from '@/views/ConditionalRendering.vue'
import ListRendering from '@/views/ListRendering.vue'
import EventHandling from '@/views/EventHandling.vue'

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
    },
    {
      path: '/ClassAndStyleBindings',
      name: 'ClassAndStyleBindings',
      component: ClassAndStyleBindings
    },
    {
      path: '/ConditionalRendering',
      name: 'ConditionalRendering',
      component: ConditionalRendering
    },
    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: ListRendering
    },
    {
      path: '/EventHandling',
      name: 'EventHandling',
      component: EventHandling
    }
  ]
})

export default router
