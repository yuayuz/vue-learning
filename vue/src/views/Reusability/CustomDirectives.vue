<script setup lang="ts">
// Vue 允许你注册自定义的指令 (Custom Directives)。

// 组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑。
// 自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

// 一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。
// 钩子函数会接收到指令所绑定元素作为其参数。

// 当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦
import { ref } from 'vue'

const vFocus = {
  mounted: (el) => el.focus()
}

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。
// 因此可以自定义指令全局注册到应用层级

// 一个指令的定义对象可以提供几种钩子函数 (都是可选的)
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {
  }
}

// 对象字面量:如果你的指令需要多个值，你可以向它传递一个 JavaScript 对象字面量。
// 别忘了，指令也可以接收任何合法的 JavaScript 表达式。
const name = ref('小明')
const vLog = {
  mounted: (el, binding) => {
    el.style.backgroundColor = binding.value.color
    name.value = binding.value.name
  }
}
</script>


<template>
  <input v-focus />
  <p v-log="{color:'red',name:'小明'}">{{ name }}</p>
</template>

<style scoped>

</style>