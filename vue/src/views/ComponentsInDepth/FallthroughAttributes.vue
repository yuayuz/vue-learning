<script setup lang="ts">
// 没有参数的 v-bind 会将一个对象的所有属性都作为 attribute 应用到目标元素上。

// 多个根节点的组件没有自动 attribute 透传行为，如果 $attrs 没有被显式绑定，
// 将会抛出一个运行时警告。
import ComponentFallthrough from '@/components/ComponentFallthrough.vue'
</script>

<template>
  <!-- “透传 attribute”指的是传递给一个组件，
  却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。
  最常见的例子就是 class、style 和 id -->
  <!-- 当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。 -->

  <!--  例如：<MyButton> 的模板 <button>Click Me</button> -->
  <!-- 一个父组件使用了这个组件，并且传入了 class-->
  <!-- 渲染出的 Dom 结果为： <button class="large">Click Me</button> -->

  <!-- 如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并。 -->

  <!-- v-on 监听器的合并 -->
  <!--
  click 监听器会被添加到 <MyButton> 的根元素，即那个原生的 <button> 元素之上。
  当原生的 <button> 被点击，会触发父组件的 onClick 方法。
  同样的，如果原生 button 元素自身也通过 v-on 绑定了一个事件监听器，
  则这个监听器和从父组件继承的监听器都会被触发。
  -->

  <!-- 深层组件继承 -->

  <!--  <MyButton/> 的模板，只是渲染另一个组件 <BaseButton /> -->
  <!-- <MyButton> 接收的透传 attribute 会直接继续传给 <BaseButton> -->
  <!-- 透传的 attribute 不会包含 <MyButton> 上声明过的 props 或是针对 emits 声明事件的 v-on 侦听函数 -->
  <!-- 透传的 attribute 若符合声明，也可以作为 props 传入 <BaseButton> -->
  <p>Fallthrough Attributes</p>
  <br />
  <ComponentFallthrough class="border" text="hello"></ComponentFallthrough>
</template>

<style scoped>
.border {
  border: 5px double yellow;
  padding: 20px;
}
</style>
