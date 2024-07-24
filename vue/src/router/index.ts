import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateSyntax from '@/views/vueBasics/TemplateSyntax.vue'
import ReactivityFundamentals from '@/views/vueBasics/ReactivityFundamentals.vue'
import ComputedProperties from '@/views/vueBasics/ComputedProperties.vue'
import ClassAndStyleBindings from '@/views/vueBasics/ClassAndStyleBindings.vue'
import ConditionalRendering from '@/views/vueBasics/ConditionalRendering.vue'
import ListRendering from '@/views/vueBasics/ListRendering.vue'
import EventHandling from '@/views/vueBasics/EventHandling.vue'
import FormInputBindings from '@/views/vueBasics/FormInputBindings.vue'
import LifecycleHooks from '@/views/vueBasics/LifecycleHooks.vue'
import Watchers from '@/views/vueBasics/Watchers.vue'
import TemplateRefs from '@/views/vueBasics/TemplateRefs.vue'
import ComponentsBasics from '@/views/vueBasics/ComponentsBasics.vue'
import ComponentRegistration from '@/views/ComponentsIn-Depth/ComponentRegistration.vue'
import Props from '@/views/ComponentsIn-Depth/Props.vue'
import ComponentEvents from '@/views/ComponentsIn-Depth/ComponentEvents.vue'
import ComponentVmodel from '@/views/ComponentsIn-Depth/ComponentVmodel.vue'
import FallthroughAttributes from '@/views/ComponentsIn-Depth/FallthroughAttributes.vue'
import Slots from '@/views/ComponentsIn-Depth/Slots.vue'
import ProvideAndInject from '@/views/ComponentsIn-Depth/ProvideAndInject.vue'

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
      component:ComponentEvents
    },
    {
      path: '/ComponentVmodel',
      name: 'Component v-model',
      component:ComponentVmodel
    },
    {
      path:'/FallthroughAttributes',
      name: 'FallthroughAttributes',
      component:FallthroughAttributes
    },
    {
      path:'/Slots',
      name: 'Slots',
      component:Slots
    },
    {
      path: '/ProvideAndInject',
      name: 'ProvideAndInject',
      component:ProvideAndInject
    }
  ]
})

export default router
