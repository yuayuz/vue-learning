<template>
  <!--  声明响应式状态 --- ref()
   在组合式中推荐使用 ref() 函数来声明相应式状态
   ref()接受参数，将其包裹在一个带有.value属性的ref对象中返回-->
  <!--  在模板中使用 ref() 的时候，不需要附加 .value，ref会自动解包-->
  <div>
    <p>{{ count }}</p>

    <!--  Vue 相应式系统的工作原理：
   你在模板中使用了一个 ref，然后改变了这个 ref 的值时，
    Vue 会自动检测到这个变化，并且相应地更新 DOM。
    这是通过一个基于依赖追踪的响应式系统实现的。
    当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每一个 ref。
    然后，当一个 ref 被修改时，它会触发追踪它的组件的一次重新渲染。-->
    <!--  通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。
     .value 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。
    在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。-->

    <!--  可以将 ref 传入函数，同时保留最新值和相应式连接的访问-->
    <button @click="addCount">count++</button>
  </div>
  <div>
    <!--  深层响应性--Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构。
    这意味着即使改变嵌套对象或数组时，变化也会被检测到：-->
    <p>{{ people }}</p>
    <button @click="addFriend('#')">addFriend</button>
  </div>
  <!--  Vue 更新时机：
  DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，
  以确保不管进行了多少次状态修改，每个组件都只会被更新一次。
  要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API-->
  <p></p>
  <div>
    <!-- reactive() : 与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性。
    reactive() 将深层地转换对象：当访问嵌套对象时，它们也会被 reactive() 包装。-->
    <p>{{ count1.count }}</p>
    <button @click="addCount1">count++</button>
  </div>
</template>

<!-- <script setup> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。
模板是在同一作用域内声明的一个 JavaScript 函数——自然可以访问与它一起声明的所有内容。-->
<script setup lang="ts">
import { reactive, ref } from 'vue'

let count = ref(1)
let addCount = function () {
  count.value++
}

let people = ref({
  name: '小明',
  age: 19,
  friend: ['a', 'b', 'c']
})
let addFriend = function (friend: String) {
  people.value.friend.push(friend.toString())
}
// 在模板中解包的注意事项:
// 在模板渲染上下文中，只有顶级的 ref 属性才会被解包。
let a = ref('a') //可以
let b = { b1: ref('b') } //不可以

let count1 = reactive({
  count: 0
})
let addCount1 = function () {
  count1.count++
}

// 数组和集合的注意事项：
// 与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count')!.value)
</script>
<style scoped></style>
