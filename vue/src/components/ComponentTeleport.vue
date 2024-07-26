<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const isMobile = ref(false)
</script>
<!--
  场景：一个组件模板的一部分在逻辑上从属于该组件，
  但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。
  比如全屏的模态框
 -->
<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
  <!-- 搭配组件使用 -->
  <!--
  <Teleport> 只改变了渲染的 DOM 结构，它不会影响组件间的逻辑关系。
  也就是说，如果 <Teleport> 包含了一个组件，那么该组件始终和这个使用了
  <teleport> 的组件保持逻辑上的父子关系。传入的 props 和触发的事件也会照常工作。
  这也意味着来自父组件的注入也会按预期工作，子组件将在 Vue Devtools 中
  嵌套在父级组件下面，而不是放在实际内容移动到的地方。
  -->

  <!-- 禁用 Teleport -->
  <!--
  在某些场景下可能需要视情况禁用 <Teleport>。举例来说，
  我们想要在桌面端将一个组件当做浮层来渲染，但在移动端则当作行内组件。
  我们可以通过对 <Teleport> 动态地传入一个 disabled prop 来处理这两种不同情况。
   -->
  <Teleport :disabled="isMobile"></Teleport>

</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border: #181818 double 2px;
  padding: 20px;
}
</style>