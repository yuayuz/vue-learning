<template>
  <!--
  条件渲染：
  v-if: 条件渲染一块内容，之后指令表达式为 true 时才会渲染
  v-if: 为 v-if 添加一个“else”区块
  v-else-if： 提供的是相应于 v-if 的“else if 区块”

  可以在<template>中使用
  -->
  <div v-if="value === 1" :style="{ background: 'red', fontSize: '50px' }">
    条件渲染 v-if="value === 1"
  </div>
  <div v-else-if="value === 2" :style="{ background: 'yellow', fontSize: '50px' }">
    条件渲染 v-else-if="value === 2"
  </div>
  <div v-else :style="{ background: 'green', fontSize: '50px' }">条件渲染 v-else</div>
  <button @click="setValue">试试看</button>
  <!--
  v-show 会在 DOM 渲染中保留该元,仅切换了该元素上名为 display 的 CSS 属性。
  v-show 不支持在 <template> 元素上使用，也不能和 v-else 搭配使用。
  -->
  <div v-show="value === 1" :style="{ background: 'blue', fontSize: '50px' }">
    v-show="value===1"
  </div>
  <!--
  区别：
  v-if 是“真实的”按条件渲染，因为它确保了在切换时，
  条件区块内的事件监听器和子组件都会被销毁与重建。
  v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。
  条件区块只有当条件首次变为 true 时才被渲染。
  相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，
  只有 CSS display 属性会被切换。
  总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
  因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，
  则 v-if 会更合适。
  -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value = ref(1)
let setValue = function () {
  value.value = ++value.value
  if (value.value > 3) {
    value.value = 1
  }
}
</script>
<style scoped></style>
