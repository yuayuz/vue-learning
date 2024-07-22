<template>
  <!--  可以给.class传递一个对象来切换class-->
  <div :class="{ AClass: C, BClass: !C }">
    <button @click="setC">{{ message }}</button>
  </div>
  <!--  可以给 :class 绑定数组数组来渲染多个 CSS class-->
  <!--  使用三元表达式可以有条件区渲染某个class-->
  <div :class="[C ? A : B, D]">
    <p>AClass or BClass</p>
  </div>

  <!--  对于只有一个根元素的组件，当你使用了 class attribute 时，
  这些 class 会被添加到根元素上并与该元素上已有的 class 合并。-->

  <!--  绑定内联样式-->
  <div :style="{ color: color, fontSize: fontSize + 'px' }">
    <p>你好</p>
  </div>
  <div :style="styleObject">绑定样式对象</div>
  <!--  绑定数组: 可以给 :style 绑定一个包含多个样式对象的数组。这些对象会被合并后渲染到同一元素上-->
  <div :style="[styleObject, '', '']">绑定数组</div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

let C = ref(true)
let message = ref('切换类选择器B')
let setC = function () {
  message.value = C.value ? '切换类选择器B' : '切换类选择器A'
  C.value = !C.value
}

let A = ref('AClass')
let B = ref('BClass')
let D = ref('DClass')

let color = ref('red')
let fontSize = '50'
// 样式对象
const styleObject = reactive({
  color: 'yellow',
  fontSize: '30px'
})
</script>

<style scoped>
.AClass {
  background-color: cornflowerblue;
}

.BClass {
  background-color: darkgreen;
}

.DClass {
  font-size: 50px;
}
</style>
