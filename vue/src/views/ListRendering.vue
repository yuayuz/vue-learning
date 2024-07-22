<template>
  <!--  可以使用 v-for 指令基于一个数组来渲染一个列表。
  v-for 指令的值需要使用 item in items 形式的特殊语法，
  其中 items 是源数据的数组，而 item 是迭代项的别名-->
  <div style="display: flex">
    <div :style="{ background: '#574', height: '100%', width: '20%', margin: '20px' }">
      <li v-for="item in list1">{{ item }}</li>
      <!--    在 v-for 块中可以完整地访问父作用域内的属性和变量。
      v-for 也支持使用可选的第二个参数表示当前项的位置索引。-->
      <li v-for="(item, index) in list1">{{ item }} - {{ index }}</li>
    </div>
    <div :style="{ background: 'yellow', height: '100%', width: '20%', margin: '20px' }">
      <!--    对于多层嵌套的 v-for，作用域的工作方式和函数的作用域很类似。每个 v-for 作用域都可以访问到父级作用域：-->
      <li v-for="item in items">
        <p>{{ item }}</p>
        <!--      可以使用 of 作为分隔符来替代 in-->
        <p v-for="childItems of item.message">{{ childItems }}</p>
      </li>
    </div>
    <!--  可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。
    第一个参数代表值，第二个参数代表属性名，第三个参数代表索引-->
    <div :style="{ margin: '20px' }">
      <p>v-for="(value, key, index) in object"</p>
      <p v-for="(value, key, index) in object" :style="{ fontSize: '30px' }">
        {{ index }}--{{ key }}--{{ value }}
      </p>
    </div>
    <div :style="{ margin: '20px' }">
      <!--      v-for 可以直接接受一个整数,会将该模板基于 1...n 的取值范围重复多次。i 的初值是 1 而非 0 -->
      <p>v-for="i in 10"</p>
      <ul v-for="i in 10">
        {{
          i
        }}
      </ul>
    </div>
    <div>
      <!--  可以在 <template> 标签上使用 v-for 来渲染一个包含多个元素的块-->

      <!--  当 v-for 与 v-if 同时存在于一个节点上时，v-if 比 v-for 的优先级更高。
      这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名-->

      <!--  Vue 默认按照“就地更新”的策略来更新通过 v-for 渲染的元素列表。
      当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。
      默认模式是高效的，但只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况。
      为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，
      可以为每个元素对应的块提供一个唯一的 key attribute-->
      <!--  在任何可行的时候为 v-for 提供一个 key attribute，除非所迭代的 DOM 内容非常简单
      key 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 v-for 的 key。-->
      <p>:key="index"</p>
      <ul v-for="(item, index) in list1" :key="index">
        {{
          item
        }}
      </ul>
    </div>
    <div>
      <!--  在组件上可以直接使用 v-for，但是不会自动将任何数据传递给组件，因为组件有自己独立的作用域。
      为了将迭代后的数据传递到组件中，我们还需要传递 props：-->
      <MyComponent v-for="(item, index) in items" :item="item" :index="index" :key="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let childItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let items = ref([{ message: childItems }])

const object = reactive({
  A: 'a',
  B: 'b',
  C: 'c',
  D: 'd'
})
</script>
<style scoped></style>
