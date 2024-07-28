<script setup lang="ts"></script>

<template>
  <div class="nv__nav">
    <router-link to="/NamedViews/id">id</router-link>
    <br />
    <router-link to="/NamedViews/people">people</router-link>
  </div>
</template>

<style scoped>
.nv__nav {
  border: darkgreen double 5px;
  margin-right: 0.75rem;
  padding: 0.3rem;
  grid-area: nav;
}
</style>
