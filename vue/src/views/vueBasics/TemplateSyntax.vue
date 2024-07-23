<template>
  <!--
    Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。
  所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。
    在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，
  当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。
  -->

  <!-- 最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)： -->
  <span>数据绑定Message:{{ msg }}</span>

  <!-- 双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 v-html 指令 -->
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- 这里看到的 v-html attribute 被称为一个指令。指令由 v- 作为前缀，
  表明它们是一些由 Vue 提供的特殊 attribute，它们将为渲染的 DOM 应用特殊的响应式行为。
  这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 某 属性保持同步。 -->

  <!--
  attribute 绑定
   双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令
   v-bind 指令指示 Vue 将元素的 id attribute 与组件的 dynamicId 属性保持一致。
   -->
  <div v-bind:style="style">attribute绑定</div>
  <!-- 简写 -->
  <div :style="style">attribute简写绑定</div>
  <!-- 如果 attribute 的名称与绑定的 JavaScript 值的名称相同，
  那么可以进一步简化语法，省略 attribute 值： -->
  <div :style>attribute绑定进一步简写</div>

  <!-- 布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上。 -->
  <button :disabled="isButtonDisabled">Button</button>

  <!-- 动态绑定多个值 -->
  <div v-bind="objectOfAttrs"></div>

  <!--
  绑定js表达式
  在文本插值中 (双大括号)
  在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中 -->
  <p>{{ num }}</p>
  <div v-bind:id="`list-${num}`"></div>
  <!-- 每个绑定仅支持单一表达式 -->
  <!--  模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。-->
  <!--  调用函数
  可以在绑定的表达式中使用一个组件暴露的方法 -->
  <button @click="addNum(1)">num+1</button>

  <!--  指令 Directives
   指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面的 v-bind 和 v-html。
    指令 attribute 的期望值为一个 JavaScript 表达式 (如 v-for、v-on 和 v-slot)。
    一个指令的任务是在其表达式的值变化时响应式地更新 DOM。-->
  <!--  参数 Arguments
    某些指令需要一个“参数”，在指令名后通过一个冒号做标识，如 v-on指令，监听Dom事件，有一个相应缩写：@-->
  <button @click="addNum(2)">num+2</button>
  <!--  动态参数：指令参数可以使用一个 js 表达式，需要包含在一个方括号内-->
  <button @[clickButton]="addNum(3)">num+3</button>

  <!--  修饰符 Modifiers :修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。-->
</template>

<script setup lang="ts">
import { ref } from 'vue'

let msg = ref('hello,world!')

let isButtonDisabled = ref(true)

let style = 'background-color: cornflowerblue'

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

let num = ref(1)

let addNum = function (n: number) {
  num.value = num.value + n
}

let clickButton = ref('click')
</script>

<style scoped>
.attribute_background_color {
  background-color: cornflowerblue;
}
</style>
