<script setup lang="ts">
/*理论上可以在向子组件传递 props 时使用 camelCase 形式 (使用 DOM 内模板时例外)，
但实际上为了和 HTML attribute 对齐，我们通常会将其写为 kebab-case 形式*/

// 使用 v-bind 或缩写 : 来进行动态绑定的 props

// 任何类型的值都可以作为 props 的值被传递

// 如果想要将一个对象的所有属性都当作 props 传入，可以使用没有参数的 v-bind，即只使用 v-bind 而非 :prop-name
import ComponentA from '@/components/ComponentA.vue'

const post = {
  name: '小明',
  age: 18
}

// 单向数据流
/*所有的 props 都遵循着单向绑定原则，
props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况*/
/*不应该在子组件中改变 prop 值;
prop 被作为初始值，子组件将其作为一个局部数据属性，这应该新定义一个局部数据属性；
对传入的 prop 值进行转换时，应该根据该 prop 新定义一个计算属性*/

// 当对象和数组作为props被传入时，虽然不能更改props绑定，但是可以更改其内部的值，这是因为 JavaScript 的对象和数组是按引用传递

// prop校验
// 声明对 props 的校验，你可以向 defineProps() 宏提供一个带有 props 校验选项的对象

// Boolean 类型转换
// 为了更贴近原生 boolean attributes 的行为，声明为 Boolean 类型的 props 有特别的类型转换规则。

</script>


<template>

  <ComponentA v-bind="post" />
</template>

<style scoped></style>
