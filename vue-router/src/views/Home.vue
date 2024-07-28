<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
const name = ref()
const id = ref()
const handleRouter1 = function (name: string, id: string, page: string) {
  router.push({ name: page, params: { name: name, id: id } })
}
</script>

<template>
  <h1>Home</h1>
  <button @click="handleRouter('GettingStarted')">GettingStarted</button>
  <br />
  <input placeholder="请输入要跳转的name" v-model="name" />
  <input placeholder="请输入要跳转的id" v-model="id" />
  <button @click="handleRouter1(name, id, 'DynamicRouteMatchingWithParams')">
    DynamicRouteMatchingWithParams
  </button>
</template>

<style scoped></style>
