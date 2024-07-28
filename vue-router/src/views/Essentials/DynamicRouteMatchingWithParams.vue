<script setup lang="ts"></script>

<template>
  <h1>DynamicRouteMatchingWithParams</h1>
  <!--
  路径参数 用冒号 : 表示。当一个路由被匹配时，
  它的 params 的值将在每个组件中以 route.params 的形式暴露出来。
  -->
  <!--
  可以在同一个路由中设置有多个 路径参数，它们会映射到 $route.params 上的相应字段
   -->
  <p>动态路由</p>
  <!-- 当前路由可以通过 $route 在模板中访问 -->
  <p>当前路由为: {{ $route.params.name }}/{{ $route.params.id }}</p>
</template>

<style scoped></style>
