<script setup lang="ts">
// Inject (注入)
// 要注入上层组件提供的数据，需使用 inject() 函数
import { inject } from 'vue'

const message = inject('message',/* 默认值 */'这是默认值')
// 如果提供的值是一个 ref，注入进来的会是该 ref 对象，
// 而不会自动解包为其内部的值。这使得注入方组件能够通过 ref 对象保持了和供给方的响应性链接。

const { num, addNum } = inject('num')

// 注入Symbol
const numKey = inject('numKey')
</script>

<template>
  <div class="PI2">
    <p>子组件2</p>
    <p>Message is:{{ message }}</p>
    <p>Num is:{{ num }}</p>
    <button @click="addNum">Num++</button>
  </div>
</template>

<style scoped>
.PI2 {
  border: yellow double 1px;
  padding: 5px;
  margin: 5px;
}
</style>