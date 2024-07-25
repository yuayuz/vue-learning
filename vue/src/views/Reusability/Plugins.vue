<script setup lang="ts">
  import { inject } from 'vue'

const i18n = inject('i18n')

</script>

<template>
  <p>{{i18n.greetings.hello}}</p>
  <h1>{{ $translate('greetings.hello') }}</h1>
</template>

<style scoped>

</style>