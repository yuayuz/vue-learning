<script setup lang="ts">
// “组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数。
import { useMouse } from '@/FunctionMethod/ComposableMouse.js'

const { x, y } = useMouse()

// 可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。
// 这使得我们可以像使用多个组件组合成整个应用一样，
// 用多个较小且逻辑独立的单元来组合形成复杂的逻辑。

// 约定和最佳实践
// 命名:组合式函数约定用驼峰命名法命名，并以“use”作为开头。

// 输入参数:即便不依赖于 ref 或 getter 的响应性，
// 组合式函数也可以接收它们作为参数。如果你正在编写一个可能被其他开发者使用的组合式函数，
// 最好处理一下输入参数是 ref 或 getter 而非原始值的情况。
// 可以利用 toValue() 工具函数来实现

// 返回值:推荐的约定是组合式函数始终返回一个包含多个 ref 的普通的非响应式对象，
// 这样该对象在组件中被解构为 ref 之后仍可以保持响应性
// 更希望以对象属性的形式来使用组合式函数中返回的状态，
// 你可以将返回的对象用 reactive() 包装一次，这样其中的 ref 会被自动解包

// 使用限制:组合式函数只能在 <script setup> 或 setup() 钩子中被调用。
// 在这些上下文中，它们也只能被同步调用。
// 在某些情况下，你也可以在像 onMounted() 这样的生命周期钩子中调用它们
</script>

<template>
  <p>Mouse position is:{{ x }},{{ y }}</p>
</template>

<style scoped>

</style>