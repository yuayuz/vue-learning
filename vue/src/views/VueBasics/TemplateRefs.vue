<template>
  <!--
  模板引用
  虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，
  但在某些情况下仍然需要直接访问底层 DOM 元素。
  要实现这一点，可以使用特殊的 ref attribute
  -->
  <!--
  ref 是一个特殊的 attribute，和 v-for 章节中提到的 key 类似。
  它允许在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。
  这可能很有用，比如说在组件挂载时将焦点设置到一个 input 元素上，
  或在一个元素上初始化一个第三方库
  -->
  <input ref="input" />

  <!--
  当在 v-for 中使用模板引用时，
  对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素
  -->
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
  <!--
  ref attribute 还可以绑定为一个函数，
  会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数
  -->
  <input :ref="(el) => {}" />
  <!--
  这里需要使用动态的 :ref 绑定才能够传入一个函数。
  当绑定的元素被卸载时，函数也会被调用一次，
  此时的 el 参数会是 null。也可以绑定一个组件方法而不是内联函数。
  -->
  <!-- 模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例 -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})

const list = ref(['A', 'B', 'C'])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>
<style scoped></style>
