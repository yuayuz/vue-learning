<script setup lang="ts">
// 重定向
// 重定向也是通过 routes 配置来完成，下面例子是从 /home 重定向到 /：
import Home from '@/views/Home.vue'

const routes1 = [{ path: '/home', redirect: '/' }]
// 重定向的目标也可以是一个命名的路由
const routes2 = [{ path: '/home', redirect: { name: 'homepage' } }]
// 可以是一个方法，动态返回重定向目标
const routes3 = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: (to) => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { q: to.params.searchText } }
    }
  }
]

// 别名
// 将 / 别名为 /home，意味着当用户访问 /home 时，URL 仍然是 /home，
// 但会被匹配为用户正在访问 /
const routes4 = [{ path: '/', component: Home, alias: '/home' }]
</script>

<template></template>

<style scoped></style>
