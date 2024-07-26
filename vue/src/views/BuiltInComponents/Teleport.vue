<script setup lang="ts">
import ComponentTeleport from '@/components/ComponentTeleport.vue'
</script>

<template>
  <!--
  <Teleport> 是一个内置组件，
  它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。
  -->

  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <ComponentTeleport />
    </div>
  </div>

</template>

<style scoped>

</style>