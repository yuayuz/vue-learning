<script setup lang="ts">
// 在组件中使用 $route 或 useRoute() 会与路由紧密耦合，
// 这限制了组件的灵活性，因为它只能用于特定的 URL。
// 虽然这不一定是件坏事，但可以通过 props 配置来解除这种行为

// 可以通过声明 prop 来在 User.vue 中删除对 $route 的直接依赖
defineProps({
  id: String
})

// 可以通过设置 props: true 来配置路由将 id 参数作为 prop 传递给组件
/*
const routes = [{ path: '/PassingPropsToRouteComponents/:id', component: PassingPropsToRouteComponents, props: true }]
*/
</script>

<template>
  <div>User {{ id }}</div>
</template>

<style scoped></style>
