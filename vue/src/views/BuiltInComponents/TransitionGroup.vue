<script setup lang="ts">
import { ref } from 'vue'

const items = ref([1, 2, 3, 4, 5, 6, 7])
const newValue = ref()
const oldValue = ref()
</script>

<template>
  <!-- <TransitionGroup> 是一个内置组件，
  用于对 v-for 列表中的元素或组件的插入、移除和顺序改变添加动画效果。 -->
  <!--
  <TransitionGroup> 支持和 <Transition> 基本相同的 props、CSS 过渡 class
  和 JavaScript 钩子监听器，但有以下几点区别：
  默认情况下，它不会渲染一个容器元素。但你可以通过传入 tag prop 来指定一个元素作为容器元素来渲染。
  过渡模式在这里不可用，因为我们不再是在互斥的元素之间进行切换。
  列表中的每个元素都必须有一个独一无二的 key attribute。
  CSS 过渡 class 会被应用在列表内的元素上，而不是容器元素上。
  -->

  <!-- 对一个 v-for 列表添加进入 / 离开动画 -->
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
  <input placeholder="请输入要添加的数值" v-model="newValue" />
  <button @click="()=>items.push(newValue)">添加</button>
  <br />
  <button @click="()=>items.pop()">删除</button>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/*
确保将离开的元素从布局流中删除
以便能够正确地计算移动的动画。
*/
.list-leave-active {
  position: absolute;
}
</style>