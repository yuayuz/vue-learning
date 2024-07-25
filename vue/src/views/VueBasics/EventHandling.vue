<template>
  <!-- 监听事件：可以使用 v-on （简写为 @）指令来监听 DOM 事件，并在事件触发时执行相应的JavaScript -->
  <!--
  事件处理器 (handler) 的值可以是：
  内联事件处理器：事件被触发时执行的内联 JavaScript 语句 (与 onclick 类似)。
  方法事件处理器：一个指向组件上定义的方法的属性名或是路径。
  -->

  <!-- 内联事件通常用于简单场景 -->
  <button @click="count++">Add 1</button>
  <p>{{ count }}</p>

  <!-- v-on 可以接受一个方法名或者对某个方法的调用 -->
  <button @click="addCount">Add 2</button>

  <!--
  方法与内联事件判断
  模板编译器会通过检查 v-on 的值是否是合法的 JavaScript 标识符或属性访问路径
  来断定是何种形式的事件处理器。
  举例来说，foo、foo.bar 和 foo['bar'] 会被视为方法事件处理器，
  而 foo() 和 count++ 会被视为内联事件处理器。
  -->
  <!-- 在内联事件处理器中访问事件参数----$event变量 -->
  <p>$event is{{ event }}</p>
  <button @click="($event) => (event = $event)">show $event</button>
  <!-- 事件修饰符-----让方法更专注于数据逻辑而不用去处理 DOM 事件的细节 -->
  <!-- 单击事件将停止传递 -->
  <button @click.stop="addCount">单击事件将停止传递</button>

  <!-- 提交事件将不再重新加载页面 -->
  <button @submit.prevent="addCount">提交事件将不再重新加载页面</button>

  <!-- 修饰语可以使用链式书写 -->
  <button @click.stop.prevent="addCount">修饰语可以使用链式书写</button>

  <!-- 也可以只有修饰符 -->
  <button @submit.prevent>可以只有修饰符</button>

  <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
  <!-- 例如：事件处理器不来自子元素 -->
  <button @click.self="addCount">...</button>

  <!-- 按键修饰符：Vue 允许在 v-on 或 @ 监听按键事件时添加按键修饰符。 -->
  <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
  <p>{{ message }}</p>
  <input @keyup.enter="setMessage" />
  <!--
  可以直接使用 KeyboardEvent.key 暴露的按键名称作为修饰符，
  但需要转为 kebab-case 形式。
  -->

  <!-- .exact 修饰符   .exact 修饰符允许精确控制触发事件所需的系统修饰符的组合。 -->
  <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
  <button @click.ctrl="onClick">当按下 Ctrl 时触发</button>

  <!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
  <button @click.ctrl.exact="onCtrlClick">仅当按下 Ctrl 且未按任何其他键时触发</button>

  <!-- 仅当没有按下任何系统按键时触发 -->
  <button @click.exact="onNoClick">没有按下任何系统按键时触发</button>

  <!--
  鼠标按键修饰符
  .left
  .right
  .middle
  这些修饰符将处理程序限定为由特定鼠标按键触发的事件。
  -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
let event = ref()

let addCount = function () {
  count.value = count.value + 2
}

let message = ref('无消息')
let setMessage = function () {
  message.value = '输入框中按下了回车'
}
let onClick = function () {
  message.value = '按下了Ctrl'
}
let onCtrlClick = function () {
  message.value = '仅当按下 Ctrl 且未按任何其他键'
}
let onNoClick = function () {
  message.value = '没有按下任何系统按键'
}
</script>
<style scoped></style>
