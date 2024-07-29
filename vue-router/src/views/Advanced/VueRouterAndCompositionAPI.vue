<script setup lang="ts">
// 在 setup 里面没有访问 this，所以我们不能直接访问 this.$router 或 this.$route。
// 作为替代，我们使用 useRouter 和 useRoute 函数
import { onBeforeRouteLeave, onBeforeRouteUpdate, RouterLink, useLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route1 = useRoute()

// Vue Router 将更新和离开守卫作为组合式 API 函数公开
// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  // 取消导航并停留在同一页面上
  if (!answer) return false
})

const userData = ref()

// 与 beforeRouteUpdate 相同，无法访问 `this`
onBeforeRouteUpdate(async (to, from) => {})

// Vue Router 将 RouterLink 的内部行为作为一个组合式函数 (composable) 公开。
// 它接收一个类似 RouterLink 所有 prop 的响应式对象，
// 并暴露底层属性来构建你自己的 RouterLink 组件或生成自定义链接

const props = defineProps({
  // 如果使用 TypeScript，请添加 @ts-ignore
})
const {
  // 解析出来的路由对象
  route,
  // 用在链接里的 href
  href,
  // 布尔类型的 ref 标识链接是否匹配当前路由
  isActive,
  // 布尔类型的 ref 标识链接是否严格匹配当前路由
  isExactActive,
  // 导航至该链接的函数
  navigate
} = useLink(props)
</script>

<template>
  <!--
  route 对象是一个响应式对象。
  在多数情况下，你应该避免监听整个 route 对象，同时直接监听你期望改变的参数。
  -->
  <p>meta.hi is: {{ route1.meta.hi }}</p>
</template>

<style scoped></style>
