<script setup lang="ts">
// 一个组件需要显式声明它所接受的 Props，这样 vue 才能知道外部传入的那些是 Props，那些是透传 attribute
// 在使用 <script setup> 的 vue 单文件中，props可以使用 defineProps() 宏来声明
// const props = defineProps(['foo'])
// console.log(props.foo)

// 除了使用字符串声明 props 外,还可以使用对象的形式
const props1 = defineProps({
  name: String,
  age: Number
})
// 对于以对象形式声明的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。

/*如果一个 prop 的名字很长，应使用 camelCase 形式，
因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号*/
</script>

<template>
  <p>Component A</p>
  <p>Name is:{{ props1.name }}</p>
  <p>Age is:{{ props1.age }}</p>
</template>

<style scoped></style>
