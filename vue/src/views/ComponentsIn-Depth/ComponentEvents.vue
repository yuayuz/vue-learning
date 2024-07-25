<script setup lang="ts">
// emits 选项和 defineEmits() 宏还支持对象语法。通过 TypeScript 为参数指定类型，它允许我们对触发事件的参数进行验证
/*const emit = defineEmits({
  submit(payload: { email: string, password: string }) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})*/

// ts可以使用纯类型标注来声明触发的事件
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 事件校验
/* 和对 props 添加类型校验的方式类似，所有触发的事件也可以使用对象形式来描述。
要为事件添加校验，那么事件可以被赋值为一个函数，
接受的参数就是抛出事件时传入 emit 的内容，返回一个布尔值来表明事件是否合法 */

/* const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
} */
</script>

<template>
  <p>Component Events</p>
  <!-- 触发与监听事件-->
  <!--在组件的模板表达式中，可以直接使用 $emit 方法触发自定义事件 (例如：在 v-on 的处理函数中)-->
  <!-- MyComponent -->
  <button @click="$emit('someEvent')">Click Me</button>
  <!--  父组件可以通过 v-on (缩写为 @) 来监听事件：-->
  <!--  <MyComponent @some-event="callback" />-->
  <!--  像组件与 prop 一样，事件的名字也提供了自动的格式转换。
  注意这里我们触发了一个以 camelCase 形式命名的事件，但在父组件中可以使用 kebab-case 形式来监听。
  与 prop 大小写格式一样，在模板中我们也推荐使用 kebab-case 形式来编写监听器。-->

  <!--  事件参数-->
  <!--  可以给 $emit 方法提供一个额外的值，父组件中监听事件，
  可以先简单写一个内联的箭头函数作为监听器，此函数会接收到事件附带的参数，
  也可以用一个组件方法来作为事件处理函数-->
  <!--  所有传入 $emit() 的额外参数都会被直接传向监听器。-->

  <!--  声明触发的事件-->
  <!--  在 <template> 中使用的 $emit 方法不能在组件的 <script setup> 部分中使用,
  可以显式地通过 defineEmits() 宏来声明它要触发的事件,defineEmits()不能在子函数中使用，
  emits 选项和 defineEmits() 宏还支持对象语法，通过 TypeScript 为参数指定类型，它允许我们对触发事件的参数进行验证-->
</template>

<style scoped></style>
