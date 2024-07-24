<script setup lang="ts">
// 禁用 Attribute 继承
// 如果不想要一个组件继承 Attribute，可以在组件中设置 inheritAttrs: false
import { useAttrs } from 'vue'

defineOptions(
  {
    inheritAttrs: false
  }
)
// 通过设置 inheritAttrs 选项为 false，你可以完全控制透传进来的 attribute 被如何使用。

// 这些透传进来的 attribute 可以在模板的表达式中直接用 $attrs 访问到。
// 这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外
// 的所有其他 attribute，例如 class，style，v-on 监听器等等。

// 可以在 <script setup> 中使用 useAttrs() API 来访问一个组件的所有透传 attribute
const attrs = useAttrs()
// 这里的 attrs 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。
// 你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 prop。
</script>
<template>
  <div :class='$attrs.class'>
    <p>Component Fallthrough</p>
    <p>text is:{{ $attrs.text }}</p>
    <p>attrs is:{{ attrs }}</p>
  </div>
</template>
<style scoped></style>