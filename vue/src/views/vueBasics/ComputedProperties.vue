<template>
  <!-- 计算属性--模板中表达式方便，但是只能用来做一些简单的操作 -->
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <div>
    <p>{{ publishedBooksMessage }}</p>
  </div>
  <div>
    <p>{{ name }}</p>
    <button @click="setName('c d')">set name c and d</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

// 一个计算属性 ref
// 定义了一个计算属性 publishedBooksMessage。computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。

// Vue 的计算属性会自动追踪响应式依赖。它会检测到 publishedBooksMessage 依赖于 author.books，
// 所以当 author.books 改变时，任何依赖于 publishedBooksMessage 的绑定都会同时更新。
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
// 计算属性与函数的区别
// 计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 author.books 不改变，
// 无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。
// 方法调用总是会在重渲染发生时再次执行函数。

// 计算属性默认是只读的，但可以通过同时提供 getter 和 setter 来创建
const oldName = ref('A')
const newName = ref('B')
const name = computed({
  get() {
    return oldName.value + ' ' + newName.value
  },
  set(newValue: string) {
    ;[oldName.value, newName.value] = newValue.split(' ')
  }
})

let setName = function (names: string) {
  name.value = names
}
</script>
<style scoped></style>
