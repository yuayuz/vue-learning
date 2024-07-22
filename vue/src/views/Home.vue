<template>
  <button @click="templateSyntax">Template Syntax</button>
  <button @click="reactivityFundamentals">Reactivity Fundamentals</button>
  <button @click="computedProperties">Computed Properties</button>
</template>
<script setup lang="ts">
import router from '@/router'

let templateSyntax = function () {
  router.push({ name: 'TemplateSyntax' })
}

let reactivityFundamentals = function () {
  router.push({ name: 'ReactivityFundamentals' })
}

let computedProperties = function () {
  router.push({ name: 'ComputedProperties' })
}
</script>
<style scoped></style>
