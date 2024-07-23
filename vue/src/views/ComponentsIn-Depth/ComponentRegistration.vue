<template>
  <ComponentA />
  <!--  vue 支持将模板中使用 kebab-case 的标签解析为使用 PascalCase 注册的组件-->
  <Component-A />
</template>
<script setup lang="ts">
// 局部注册：在父组件中显式导入，而且只能在父组件中使用。组件依赖关系更加明确，并且对 tree-shaking更加友好
import ComponentA from '@/components/ComponentA.vue'
</script>
<style scoped></style>
