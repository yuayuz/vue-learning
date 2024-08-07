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
import NamedViews from '@/views/Essentials/NamedViews.vue'
import NamedViewsId from '@/views/Essentials/NamedViewsId.vue'
import NamedViewsAge from '@/views/Essentials/NamedViewsAge.vue'
import NamedViewsPeople from '@/views/Essentials/NamedViewsPeople.vue'
import PassingPropsToRouteComponents from '@/views/Essentials/PassingPropsToRouteComponents.vue'
import NavigationGuards from '@/views/Advanced/NavigationGuards.vue'
import RouteMetaFields from '@/views/Advanced/RouteMetaFields.vue'
import VueRouterAndCompositionAPI from '@/views/Advanced/VueRouterAndCompositionAPI.vue'

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
    },
    {
      path: '/NamedViews',
      name: 'NamedViews',
      component: NamedViews,
      children: [
        {
          path: 'id',
          component: NamedViewsId
        },
        {
          path: 'people',
          name: 'people',
          components: {
            default: NamedViewsPeople,
            name: NamedViewsId,
            age: NamedViewsAge
          }
        }
      ]
    },
    {
      path: '/PassingPropsToRouteComponents/:id',
      name: 'PassingPropsToRouteComponents',
      component: PassingPropsToRouteComponents,
      props: true
    },
    {
      path: '/NavigationGuards',
      name: 'NavigationGuards',
      component: NavigationGuards
    },
    {
      path: '/RouterMetaFields',
      name: 'RouterMetaFields',
      component: RouteMetaFields,
      meta: {
        hi: 'Hello'
      }
    },
    {
      path: '/VueRouterAndCompositionAPI',
      name: 'VueRouterAndCompositionAPI',
      component: VueRouterAndCompositionAPI,
      meta: {
        hi: 'hello'
      }
    }
  ]
})

export default router
