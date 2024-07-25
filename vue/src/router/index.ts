import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/VueBasics/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/VueBasics/ReactivityFundamentals.vue'
import ComputedProperties from '@/views/VueBasics/ComputedProperties.vue'
import ClassAndStyleBindings from '@/views/VueBasics/ClassAndStyleBindings.vue'
import ConditionalRendering from '@/views/VueBasics/ConditionalRendering.vue'
import ListRendering from '@/views/VueBasics/ListRendering.vue'
import EventHandling from '@/views/VueBasics/EventHandling.vue'
import FormInputBindings from '@/views/VueBasics/FormInputBindings.vue'
import LifecycleHooks from '@/views/VueBasics/LifecycleHooks.vue'
import Watchers from '@/views/VueBasics/Watchers.vue'
import TemplateRefs from '@/views/VueBasics/TemplateRefs.vue'
import ComponentsBasics from '@/views/VueBasics/ComponentsBasics.vue'
import ComponentRegistration from '@/views/ComponentsInDepth/ComponentRegistration.vue'
import Props from '@/views/ComponentsInDepth/Props.vue'
import ComponentEvents from '@/views/ComponentsInDepth/ComponentEvents.vue'
import ComponentVmodel from '@/views/ComponentsInDepth/ComponentVmodel.vue'
import FallthroughAttributes from '@/views/ComponentsInDepth/FallthroughAttributes.vue'
import Slots from '@/views/ComponentsInDepth/Slots.vue'
import ProvideAndInject from '@/views/ComponentsInDepth/ProvideAndInject.vue'

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
    },
    {
      path: '/ComponentsBasics',
      name: 'ComponentsBasics',
      component: ComponentsBasics
    },
    {
      path: '/ComponentRegistration',
      name: 'ComponentRegistration',
      component: ComponentRegistration
    },
    {
      path: '/Props',
      name: 'Props',
      component: Props
    },
    {
      path: '/ComponentEvents',
      name: 'ComponentEvents',
      component: ComponentEvents
    },
    {
      path: '/ComponentVmodel',
      name: 'Component v-model',
      component: ComponentVmodel
    },
    {
      path: '/FallthroughAttributes',
      name: 'FallthroughAttributes',
      component: FallthroughAttributes
    },
    {
      path: '/Slots',
      name: 'Slots',
      component: Slots
    },
    {
      path: '/ProvideAndInject',
      name: 'ProvideAndInject',
      component: ProvideAndInject
    }
  ]
})

export default router
