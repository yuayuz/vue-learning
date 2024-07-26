<template>
  <button @click="handleRouter('TemplateSyntax')">Template Syntax</button>
  <button @click="handleRouter('ReactivityFundamentals')">Reactivity Fundamentals</button>
  <button @click="handleRouter('ComputedProperties')">Computed Properties</button>
  <button @click="handleRouter('ClassAndStyleBindings')">Class and Style Bindings</button>
  <button @click="handleRouter('ConditionalRendering')">Conditional Rendering</button>
  <button @click="handleRouter('ListRendering')">List Rendering</button>
  <button @click="handleRouter('EventHandling')">Event Handling</button>
  <button @click="handleRouter('FormInputBindings')">Form Input Bindings</button>
  <button @click="handleRouter('LifecycleHooks')">Lifecycle Hooks</button>
  <button @click="handleRouter('Watchers')">Watchers</button>
  <button @click="handleRouter('TemplateRefs')">Template Refs</button>
  <button @click="handleRouter('ComponentsBasics')">Components Basics</button>
  <button @click="handleRouter('ComponentRegistration')">Component registration</button>
  <button @click="handleRouter('Props')">Props</button>
  <button @click="handleRouter('ComponentEvents')">Component Events</button>
  <button @click="handleRouter('Component_vModel')">Component v-model</button>
  <button @click="handleRouter('FallthroughAttributes')">Fallthrough Attribute</button>
  <button @click="handleRouter('Slots')">Slots</button>
  <button @click="handleRouter('ProvideAndInject')">Provide And Inject</button>
  <button @click="handleRouter('Composables')">Composables</button>
  <button @click="handleRouter('CustomDirectives')">Custom Directives</button>
  <button @click="handleRouter('Plugins')">Plugins</button>
  <button @click="handleRouter('Transition')">Transition</button>
</template>
<script setup lang="ts">
import router from '@/router'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>
<style scoped></style>
