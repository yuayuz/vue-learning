<script setup lang="ts">
import router from '@/router'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <h1>Home</h1>
  <button @click="handleRouter('Example')">example</button>
</template>

<style scoped></style>
