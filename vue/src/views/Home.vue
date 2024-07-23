<template>
  <button @click="templateSyntax">Template Syntax</button>
  <button @click="reactivityFundamentals">Reactivity Fundamentals</button>
  <button @click="computedProperties">Computed Properties</button>
  <button @click="classAndStyleBindings">Class and Style Bindings</button>
  <button @click="conditionalRendering">Conditional Rendering</button>
  <button @click="listRendering">List Rendering</button>
  <button @click="eventHandling">Event Handling</button>
  <button @click="formInputBindings">Form Input Bindings</button>
  <button @click="lifecycleHooks">Lifecycle Hooks</button>
  <button @click="watchers">Watchers</button>
  <button @click="templateRefs">Template Refs</button>
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

let listRendering = function () {
  router.push({ name: 'ListRendering' })
}

let eventHandling = function () {
  router.push({ name: 'EventHandling' })
}

let formInputBindings = function () {
  router.push({ name: 'FormInputBindings' })
}
let lifecycleHooks = function () {
  router.push({ name: 'LifecycleHooks' })
}
let watchers = function () {
  router.push({ name: 'Watchers' })
}
let templateRefs = function () {
  router.push({ name: 'TemplateRefs' })
}
</script>
<style scoped></style>
