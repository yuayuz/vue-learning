import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GettingStarted from '@/views/Essentials/GettingStarted.vue'
import DynamicRouteMatchingWithParams from '@/views/Essentials/DynamicRouteMatchingWithParams.vue'
import RoutesMatchingSyntax from '@/views/Essentials/RoutesMatchingSyntax.vue'
import RoutesMatchingSyntax1 from '@/views/Essentials/RoutesMatchingSyntax1.vue'

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
    },
    {
      path: '/RoutesMatchingSyntax/:rs(\\d+)',
      name: 'RoutesMatchingSyntax',
      component: RoutesMatchingSyntax
    },
    {
      path: '/RoutesMatchingSyntax/:rs',
      name: 'RoutesMatchingSyntax',
      component: RoutesMatchingSyntax1
    }
  ]
})

export default router
