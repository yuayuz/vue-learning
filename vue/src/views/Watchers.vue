<template>
  <!--  计算属性可以声明性计算衍生值，当在状态变化时执行一些‘副作用’
  例如：修改 DOM 或者根据异步操作去修改另一处的变化-->
  <!--  在组合式 API 中，可以使用 watch 函数在每次响应式状态发生变化时触发回调函数-->
  <p>A:{{ A }}</p>
  <p>B:{{ B }}</p>
  <button @click="setA">A 说：你好</button>
  <button @click="setAOther">A 说：啊？</button>
  <p>响应性对象属性值</p>
  <p>{{ message }}</p>
  <button @click="obj.count++">count++</button>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'

let A = ref('')
let B = ref('')
let setA = function () {
  A.value = '你好'
}
let setAOther = function () {
  A.value = '啊？'
}
watch(A, () => {
  if (A.value === '你好') {
    B.value = '你好'
  } else {
    B.value = '听不懂你在说什么'
  }
})
// watch 的第一个参数可以是不同形式的“数据源”：
// 它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
// 不能直接侦听响应式对象的属性值
const obj = reactive({ count: 0 })
const message = ref('')
// 错误，因为 watch() 得到的参数是一个 number
/*watch(obj.count, (count) => {
  console.log(`Count is: ${count}`)
})*/
// 需要用返回这个属性的 getter 函数
// 提供一个 getter 函数
watch(
  () => obj.count,
  (newValue) => {
    message.value = `obj.count值已经发生改变，count is ${newValue}`
  }
)
// 深层侦听器
// 直接给 watch() 传入一个响应式对象，
// 会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发

watch(obj, (newValue, oldValue) => {
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})
// 一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调：
watch(
  () => obj.count,
  (newValue, oldValue) => {
    // 仅当 obj.count 被替换时触发
  },
  { deep: true } // 加上 deep 选项，强制转成深层侦听器
)

// watch 默认是懒执行的：仅当数据源变化时，才会执行回调。
// 但在某些场景中，希望在创建侦听器时，立即执行一遍回调。
// 通过传入 immediate: true 选项来强制侦听器的回调立即执行
watch(
  B,
  (newValue, oldValue) => {
    // 立即执行，且当 `B` 改变时再次执行
  },
  { immediate: true }
)

// 每当被侦听源发生变化时，侦听器的回调就会执行。
// 如果希望回调只在源变化时触发一次，请使用 once: true 选项
watch(
  B,
  (newValue, oldValue) => {
    // 立即执行，且当 `B` 改变时再次执行
  },
  { once: true }
)

// 侦听器的回调使用与源完全相同的响应式状态
// watchEffect() 允许我们自动跟踪回调的响应式依赖，并且会立即执行。

// 回调的触发时机
// 当更改了响应式状态，可能会同时触发 Vue 组件更新和侦听器回调。
// 默认情况下，侦听器回调会在父组件更新 (如有) 之后、所属组件的 DOM 更新之前被调用。
// 意味着如果尝试在侦听器回调中访问所属组件的 DOM，那么 DOM 将处于更新前的状态。

// 如果想在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM，你需要指明 flush: 'post' 选项
watch(B, () => {}, { flush: 'post' })

// 创建一个同步触发的侦听器，它会在 Vue 进行任何更新之前触发
watch(B, () => {}, { flush: 'sync' })

// 停止侦听器： 在 setup() 或 <script setup> 中用同步语句创建的侦听器，
// 会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。

// 但是侦听器必须用同步语句创建：
// 如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，必须手动停止它，以防内存泄漏。
// 要手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数：
const unwatch = watchEffect(() => {})
// ...当该侦听器不再需要时
unwatch()
</script>

<style scoped></style>
