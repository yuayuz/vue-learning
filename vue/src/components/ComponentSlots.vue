<script setup lang="ts">
import { ref } from 'vue'

  const message = ref("")
</script>

<template>
  <div class="slot">
    <!-- 为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段。 -->
    <p>子组件</p>
    <input placeholder="请输入子组件默认插槽传给父组件的消息" v-model="message" />
    <div class="slot">
      <div>
        <p>默认插槽</p>
        <slot :message="message">
          你好 <!-- 默认内容 -->
        </slot>   <!-- 插槽出口 -->
      </div>
      <div class="slot">
        <p>显式标注默认插槽</p>
        <slot name="default" message="来自子组件显式默认插槽的消息" />
        <slot name="body" /> <!-- 因为同时使用默认和具名插槽，导致此不生效 -->
      </div>
    </div>
    <div class="slot">
      <p>具名插槽</p>
      <!--这类带 name 的插槽被称为具名插槽 (named slots)。
     没有提供 name 的 <slot> 出口会隐式地命名为“default”-->
      <div class="slot">
        <slot name="first" message1="来自动态具名插槽的消息" />
      </div>
      <!--  条件插槽：可以根据插槽内容是否存在来渲染某些内容  -->
      <div v-if="$slots.second" class="slot">
        <p>条件插槽</p>
        <slot name="second" message2="来自条件具名插槽的消息" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slot {
  padding: 10px;
  border: darkgreen 2px solid;
  margin: 10px;
}
</style>