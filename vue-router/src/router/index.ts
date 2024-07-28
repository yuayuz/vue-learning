import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GettingStarted from '@/views/Essentials/GettingStarted.vue'
import DynamicRouteMatchingWithParams from '@/views/Essentials/DynamicRouteMatchingWithParams.vue'
import RoutesMatchingSyntax from '@/views/Essentials/RoutesMatchingSyntax.vue'
import RoutesMatchingSyntax1 from '@/views/Essentials/RoutesMatchingSyntax1.vue'
import NestedRoutes from '@/views/Essentials/NestedRoutes.vue'
import NestedRoutes1 from '@/views/Essentials/NestedRoutes1.vue'
import NestedRoutes2 from '@/views/Essentials/NestedRoutes2.vue'
import ProgrammaticNavigation from '@/views/Essentials/ProgrammaticNavigation.vue'

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
    },
    {
      path: '/NestedRoutes',
      name: 'NestedRoutes',
      component: NestedRoutes,
      children: [
        {
          path: 'NestedRoutes1',
          name: 'NestedRoutes1',
          component: NestedRoutes1
        },
        {
          path: 'NestedRoutes2',
          name: 'NestedRoutes2',
          component: NestedRoutes2
        }
      ]
    },
    {
      path: '/ProgrammaticNavigation',
      name: 'ProgrammaticNavigation',
      component: ProgrammaticNavigation
    }
  ]
})

export default router
