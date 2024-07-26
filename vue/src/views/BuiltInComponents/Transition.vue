<script setup lang="ts">
import { ref } from 'vue'

const show = ref()
</script>

<template>
  <!-- <Transition> 会在一个元素或组件进入和离开 DOM 时应用动画。 -->
  <!--
  <Transition> 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。
  它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。
  进入或离开可以由以下的条件之一触发：
  由 v-if 所触发的切换
  由 v-show 所触发的切换
  由特殊元素 <component> 切换的动态组件
  改变特殊的 key 属性
  -->

  <!-- 基本用法 -->
  <button @click="show = !show">Toggle</button>

  <Transition>
    <p v-if="show">hello</p>
  </Transition>
  <!-- TIP:<Transition> 仅支持单个元素或组件作为其插槽内容。
  如果内容是一个组件，这个组件必须仅有一个根元素。 -->

  <!-- <Transition> 组件传一个 name prop 来声明一个过渡效果名 -->
  <!-- 对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 v 作为前缀。 -->
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>

  <!-- 可以向 <Transition> 传递以下的 props 来指定自定义的过渡 class -->
</template>
<!-- CSS 过渡 class -->
<!--
v-enter-from：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。

v-enter-active：进入动画的生效状态。应用于整个进入动画阶段。
在元素被插入之前添加，在过渡或动画完成之后移除。
这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。

v-enter-to：进入动画的结束状态。在元素插入完成后的下一帧被添加
(也就是 v-enter-from 被移除的同时)，在过渡或动画完成之后移除。

v-leave-from：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。

v-leave-active：离开动画的生效状态。应用于整个离开动画阶段。
在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。

v-leave-to：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加
(也就是 v-leave-from 被移除的同时)，在过渡或动画完成之后移除。
-->
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  <Transition> 一般都会搭配原生 CSS 过渡一起使用
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>