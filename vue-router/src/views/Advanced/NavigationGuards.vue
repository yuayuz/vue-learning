<script setup lang="ts">
import router from '@/router/index.js'

router.beforeEach((to, from) => {
  // 转跳到其他页面时,重定向为Home
  if (to.name !== 'Home') {
    return { name: 'Home' }
  }
})
</script>

<template>
  <!--
  vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
  有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的
  -->
  <!-- 全局前置守卫 -->
  <!-- 使用 router.beforeEach 注册一个全局前置守卫 -->
  <!--
   当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。
  每个守卫方法接收两个参数：
  to: 即将要进入的目标
  from: 当前导航正要离开的路由
  可以返回的值如下:
  false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，
  那么 URL 地址会重置到 from 路由对应的地址。
  一个路由地址: 通过一个路由地址重定向到一个不同的地址，如同调用 router.push()，且可以传入
  诸如 replace: true 或 name: 'home' 之类的选项。它会中断当前的导航，同时用相同的 from 创建一个新导航
  -->

  <!-- 全局解析守卫 -->
  <!--
  可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，
  因为它在每次导航时都会触发，不同的是，解析守卫刚好会在导航被确认之前、
  所有组件内守卫和异步路由组件被解析之后调用。

  router.beforeResolve 是获取数据或执行任何其他操作
 （如果用户无法进入页面时你希望避免执行的操作）的理想位置
  -->

  <!-- 全局后置钩子 router.afterEach -->
  <!--
  以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
  对于分析、更改页面标题、声明页面等辅助功能很有用
  -->
  <!-- 在守卫内的全局注入 -->
  <!-- 从 Vue 3.3 开始，可以在导航守卫内使用 inject() 方法,来获得provide提供的数据 -->

  <!-- 路由独享的守卫 -->
  <!-- 
  beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。
  例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。
  它们只有在 从一个不同的 路由导航时，才会被触发。
  你也可以将一个函数数组传递给 beforeEnter
  -->
  <h1>Navigation Guards</h1>
  <p>只能转跳到Home</p>
  <button @click="() => router.push({ name: 'Home' })">Home</button>
  <button @click="() => router.push({ name: 'GettingStarted' })">HGettingStarted</button>
</template>

<style scoped></style>
