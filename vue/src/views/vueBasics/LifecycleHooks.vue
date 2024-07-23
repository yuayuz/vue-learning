<template>
  <!--  生命周期钩子：让开发者在特定阶段运行自己的代码-->
  <!--  onMounted 钩子可以用来在组件完成初始渲染并创建 dom 节点后运行代码-->
  <p>{{ message }}</p>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
let message = ref()
onMounted(() => {
  message.value = 'the component is now mounted.'
})
</script>
<style scoped></style>
