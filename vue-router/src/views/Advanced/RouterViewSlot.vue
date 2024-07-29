<script setup lang="ts"></script>

<template>
  <!-- RouterView 组件暴露了一个插槽，可以用来渲染路由组件,其相当于router-view -->
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>

  <!-- KeepAlive & Transition -->
  <!--
  当在处理 KeepAlive 组件时，通常想要保持路由组件活跃，
  而不是 RouterView 本身。为了实现这个目的，可以将 KeepAlive 组件放置在插槽内
  -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- Transition 组件类似 -->
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- 也可以在 Transition 组件中使用 keep-alive 组件 -->
</template>

<style scoped></style>
