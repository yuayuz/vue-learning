import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/ReactivityFundamentals.vue'
import ComputedProperties from '@/views/ComputedProperties.vue'
import ClassAndStyleBindings from '@/views/ClassAndStyleBindings.vue'
import ConditionalRendering from '@/views/ConditionalRendering.vue'
import ListRendering from '@/views/ListRendering.vue'
import EventHandling from '@/views/EventHandling.vue'
import FormInputBindings from '@/views/FormInputBindings.vue'
import LifecycleHooks from '@/views/LifecycleHooks.vue'
import Watchers from '@/views/Watchers.vue'
import TemplateRefs from '@/views/TemplateRefs.vue'

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
    },
    {
      path: '/FormInputBindings',
      name: 'FormInputBindings',
      component: FormInputBindings
    },
    {
      path: '/LifecycleHooks',
      name: 'LifecycleHooks',
      component: LifecycleHooks
    },
    {
      path: '/Watchers',
      name: 'Watchers',
      component: Watchers
    },
    {
      path: '/TemplateRefs',
      name: 'TemplateRefs',
      component: TemplateRefs
    }
  ]
})

export default router
