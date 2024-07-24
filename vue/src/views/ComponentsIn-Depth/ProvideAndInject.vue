<script setup lang="ts">
// provide (提供)
import { provide, readonly, ref } from 'vue'
import ComponentProvideInject1 from '@/components/ComponentProvideInject1.vue'

provide(/* 注入名 */ 'message',/* 值 */ 'hello')
// provide() 函数接收两个参数。第一个参数被称为注入名，
// 可以是一个字符串或是一个 Symbol。后代组件会用注入名来查找期望注入的值。
// 一个组件可以多次调用 provide()，使用不同的注入名，注入不同的依赖值。
// 第二个参数是提供的值，值可以是任意类型，包括响应式的状态，比如一个 ref

// 可以在整个应用层提供依赖
/*
import { createApp } from 'vue'
const app = createApp({})
app.provide('message',  'hello!')
*/

// 和响应式数据配合使用
// 当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中。
// 这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。
// 有的时候，我们可能需要在注入方组件中更改数据。
// 在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数
const num = ref(0)
const text = ref()
const addNum = function() {
  num.value += 1
}
provide('num', {
  num,
  addNum
})

// 想确保提供的数据不能被注入方的组件更改，你可以使用 readonly() 来包装提供的值。
provide('text', readonly(text))

// 使用 Symbol 作注入名
import { numKey } from '@/keys.js'

provide(numKey, {})
</script>

<template>
  <!-- Prop 逐级透传问题  -->
  <!-- 通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。
  想象一下这样的结构：有一些多层级嵌套的组件，形成了一棵巨大的组件树，
  而某个深层的子组件需要一个较远的祖先组件中的部分数据。
  在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦。
   组件链路非常长，可能会影响到更多这条路上的组件。这一问题被称为“prop 逐级透传”-->

  <!-- provide 和 inject
   一个父组件相对于其所有的后代组件，会作为依赖提供者。
   任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。-->
  <div class="PI">
    <p>父组件</p>
    <ComponentProvideInject1></ComponentProvideInject1>
  </div>
</template>

<style scoped>
.PI {
  border: red double 1px;
  padding: 5px;
  margin: 5px;
}
</style>