<script setup lang="ts">
// v-model 可以在组件上实现双向绑定，但是推荐的实现方法是 defineModel 宏
import ComponentModelChild from '@/components/ComponentModelChild.vue'
import { ref } from 'vue'

const model = defineModel()
model.value = 0

function update() {
  model.value++
}

// defineModel() 返回的值是一个 ref。可以像其他 ref 一样被访问以及修改，能起到在父组件和当前变量之间的双向绑定的作用：
// 它的 .value 和父组件的 v-model 的值同步；
// !!!当它被子组件变更了，会触发父组件绑定的值一起更新。

// defineModel 是一个便利宏。编译器将其展开为以下内容：
// 一个名为 modelValue 的 prop，本地 ref 的值与其同步；
// 一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。

// 因为 defineModel 声明了一个 prop，你可以通过给 defineModel 传递选项，来声明底层 prop 的选项
// 使 v-model 必填
// const model1 = defineModel({ required: true })

// 提供一个默认值
// const model2 = defineModel({ default: 0 })

// 在子组件中，我们可以通过将字符串作为第一个参数传递给 defineModel() 来支持相应的参数,
// 额外的 prop 选项，应该在 model 名称之后传递：

const name = ref('')
const age = ref()
const text = ref('abcd')
</script>

<template>
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">Increment</button>
  <br />
  <input placeholder="请输入姓名" v-model="name" />
  <br />
  <input placeholder="请输入年龄" v-model="age" />
  <p>name is:{{ name }}</p>
  <p>age is:{{ age }}</p>
  <input placeholder="请输入文本" v-model="text" />
  <p>{{ text }}</p>
  <ComponentModelChild v-model:name="name" v-model:age="age" v-model.capitalize="text">
  </ComponentModelChild>
</template>

<style scoped></style>
