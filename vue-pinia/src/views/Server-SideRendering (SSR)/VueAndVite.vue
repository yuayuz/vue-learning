<script setup lang="ts">
// 只要你只在 setup 函数、getter 和 action 的顶部调用你定义的 useStore() 函数，
// 那么使用 Pinia 创建 store 对于 SSR 来说应该是开箱即用的

// 这是可行的，
// 因为 pinia 知道在 `setup` 中运行的是什么程序。
import { useExampleStore } from '@/stores/example'
import router from '@/router'
import { createPinia } from 'pinia'

const main = useExampleStore()

// 假设这是在在 setup() 外部使用 store,
// 需要将原本被传递给应用 的 pinia 实例传递给 useStore() 函数
const pinia = createPinia()
router.beforeEach((to) => {
  // ✅这会正常工作，因为它确保了正确的 store 被用于
  // 当前正在运行的应用
  const main = useExampleStore(pinia)

  if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})
</script>

<template></template>

<style scoped></style>
