<script setup lang="ts"></script>

<template>
  <div class="nR">
    <h1>NestedRoutes</h1>
    <router-link to="/NestedRoutes">NestedRoutes</router-link>
    <br />
    <router-link to="/NestedRoutes/NestedRoutes1">NestedRoutes1</router-link>
    <br />
    <router-link to="/NestedRoutes/NestedRoutes2">NestedRoutes2</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nR {
  border: darkgreen double 5px;
  padding: 20px;
}
</style>
