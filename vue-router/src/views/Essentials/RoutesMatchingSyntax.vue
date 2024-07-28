<script setup lang="ts">
// 在参数中自定义正则
// 当定义像 :userId 这样的参数时，
// 内部使用以下的正则 ([^/]+) (至少一个不是斜杠 / 的字符)来从 URL 中提取参数。
const routes1 = [
  // 匹配 /o/3549
  { path: '/o/:orderId' },
  // 匹配 /p/books
  { path: '/p/:productName' }
]
const routes2 = [
  // /:orderId -> 仅匹配数字
  { path: '/RoutesMatchingSyntax(\\d+)' },
  // /:productName -> 匹配其他任何内容
  { path: '/RoutesMatchingSyntax' }
]

// 可重复的参数
// 如果你需要匹配具有多个部分的路由，如 /first/second/third，
// 应该用 *（0 个或多个）和 +（1 个或多个）将参数标记为可重复
const routes3 = [
  // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
  { path: '/:chapters+' },
  // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
  { path: '/:chapters*' }
]

// 可选参数
// 可以通过使用 ? 修饰符(0 个或 1 个)将一个参数标记为可选
</script>

<template>
  <p>number</p>
  <p>type is {{ typeof $route.params.r }}</p>
</template>

<style scoped></style>
