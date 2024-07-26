<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input placeholder="请输入" v-model="message">
</template>

<style scoped>

</style>