<script setup lang="ts">
import router from '@/router'

router.beforeEach((to, from) => {
  // 转跳到其他页面时,重定向为Home
  console.log(to.meta.hi)
})
</script>

<template>
  <p>RouteMetaFields</p>
  <button @click="() => router.push({ name: 'Home' })">Home</button>
</template>

<style scoped></style>
