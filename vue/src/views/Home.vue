<template>
  <button @click="templateSyntax">Template Syntax</button>
  <button @click="reactivityFundamentals">Reactivity Fundamentals</button>
  <button @click="computedProperties">Computed Properties</button>
  <button @click="classAndStyleBindings">Class and Style Bindings</button>
  <button @click="conditionalRendering">Conditional Rendering</button>
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

let classAndStyleBindings = function () {
  router.push({ name: 'ClassAndStyleBindings' })
}

let conditionalRendering = function () {
  router.push({ name: 'ConditionalRendering' })
}
</script>
<style scoped></style>
