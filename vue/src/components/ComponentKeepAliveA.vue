<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
</script>

<template>
  <p>Num is: {{ num }}</p>
  <button @click="num++">num++</button>
</template>

<style scoped>

</style>