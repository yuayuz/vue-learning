<template>
  <button @click="templateSyntax">Template Syntax</button>
</template>
<script setup lang="ts">
import router from '@/router'

let templateSyntax = function () {
  router.push({ name: 'TemplateSyntax' })
}
</script>
<style scoped></style>
