<script setup lang="ts">
import ComponentSlots from '@/components/ComponentSlots.vue'
import { ref } from 'vue'

const first = ref('first')
</script>

<template>
  <p class="f" >父组件</p>
  <ComponentSlots>

    <!--  显式标明默认插槽  -->
    <!--  使用了具名插槽与默认插槽时，则需要为默认插槽使用显式的 <template> 标签。  -->
    <!--  当一个组件同时接收子组件通过默认插槽和具名插槽传递的信息时，
        所有位于顶级的非 <template> 节点都被隐式地视为默认插槽的内容  -->
    <template #default="{ message }">
      我来自父组件   <!-- 插槽内容 -->
      <body>body</body>   <!--此时的body被认为是默认插槽-->
      <!--   作用域插槽（子组件通过默认插槽传递信息）   -->
      <p>子组件通过默认插槽传来的消息：{{ message }}</p>
    </template>


    <!--  动态插槽名：动态指令参数在 v-slot 上也是有效的  -->
    <template v-slot:[first]="firstMessage">
      <p>动态插槽名</p>
      <p>first</p>
      <p>{{firstMessage}}</p>
    </template>

    <!-- 要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 <template> 元素，
        并将目标插槽的名字传给该指令  -->
    <template #second="secondMessage">
      <p>second</p>
      <p>{{ secondMessage }}</p>
    </template>
  </ComponentSlots>
  <!-- 插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件 -->
  <!--  通过使用插槽，组件更加灵活和具有可复用性。
  现在组件可以用在不同的地方渲染各异的内容，但同时还保证都具有相同的样式。-->
  <!-- 插槽内容可以访问父组件定义域，但是不能访问子组件数据 -->
</template>

<style scoped>
  .f{
    border: red dashed 4px;
  }
</style>