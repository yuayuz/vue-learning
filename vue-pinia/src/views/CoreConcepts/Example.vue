<script setup lang="ts">
// 使用 Store
import { useExampleStore } from '@/stores/example'
import { ref } from 'vue'

const store = useExampleStore()
const num = ref(0)
// 重置 Store:可以通过调用 store 的 $reset() 方法将 state 重置为初始值
// 在 $reset() 内部，会调用 state() 函数来创建一个新的状态对象，并用它替换当前状态
// store.$reset()
</script>

<template>
  <!-- 默认情况下，你可以通过 store 实例访问 state，直接对其进行读写 -->
  <input placeholder="请输入count值" v-model="store.count" />
  <p>count is: {{ store.count }}</p>
  <p>doubleCount is: {{ store.doubleCount }}</p>
  <input placeholder="请输入num值" v-model="num" />
  <!-- 当这样做时，getter 将不再被缓存。它们只是一个被你调用的函数 -->
  <p>addCount is: {{ store.addCount(num) }}</p>
  <button @click="store.increment()">action_add</button>
</template>

<style scoped></style>
