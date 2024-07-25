<template>
  <!--
  组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。
在实际应用中，组件常常被组织成层层嵌套的树状结构
-->
  <!-- 单文件组件（SFC）将 Vue 组件单独定义在一个 .vue 文件中 -->

  <!-- 使用组件： 在父组件中导入组件,通过 <script setup>，导入的组件都在模板中直接可用 -->

  <!-- 传递 props:向组件中传递信息 -->
  <p>子组件 Props</p>
  <p>Name is:{{ nameProp.name }}</p>
  <button @click="$emit('enlarge-text')">Enlarge text</button>

  <!-- 子组件可以通过调用内置的 $emit 方法，通过传入事件名称来抛出一个事件 -->
  <!-- $emit()方法：在当前组件触发一个自定义事件。任何额外的参数都会传递给事件监听器的回调函数 -->
  <button @click="setBackgroundColor">将子组件背景颜色改为黄色</button>

  <!-- 能和 HTML 元素一样向组件中传递内容，使用 <slot> 元素 -->
  <br />
  <slot />
  <!-- 使用 <slot> 作为一个占位符，父组件传递进来的内容就会渲染在这里 -->
</template>

<script setup lang="ts">
// Props 是一种特别的 attributes，你可以在组件上声明注册

const nameProp = defineProps(['name'])
console.log(nameProp.name)
// 用到了defineProps
// defineProps 是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入。
// 声明的 props 会自动暴露给模板。
// defineProps 会返回一个对象，其中包含了可以传递给组件的所有 props：

// 一个组件拥有任意多的 props ，默认情况下，所有 prop 接受任意类型的值
// 当一个 prop 被注册后，可以像这样以自定义 attribute 的形式传递数据

// 可以通过 defineEmits 宏来声明需要抛出的事件
const emit = defineEmits(['backgroundColor'])
// 这声明了一个组件可能触发的所有事件，还可以对事件的参数进行验证。
// 同时，让 Vue 避免将它们作为原生事件监听器隐式地应用于子组件的根元素。

// 它返回一个等同于 $emit 方法的 emit 函数。
// 它可以被用于在组件的 <script setup> 中抛出事件，因为此处无法直接访问
const setBackgroundColor = function () {
  emit('backgroundColor')
}
</script>
<style scoped></style>
