<script setup lang="ts">
const name = defineModel('name')
const age = defineModel('age')

// 处理 v-model 修饰符
const [text, modifiers] = defineModel({
  set(value: any) {
    if (modifiers.capitalize) {
      return  value.charAt(0).toUpperCase() + value.slice(1)
    }
    return  value
  },
  get(value: any) {
    if (modifiers.capitalize) {
      value= value.charAt(0).toUpperCase() + value.slice(1)
      return  value
    }
    return value
  }
})
</script>

<template>
  <div class="A">
    <p>子组件</p>
    <p>old name is :{{ name }}</p>
    <p>old age is :{{ age }}</p>
    <input type="text" placeholder="请输入新姓名" v-model="name" />
    <p>{{ modifiers }}</p>
    <p>text is:{{ text }}</p>
    <input type="text" placeholder="请输入文本" v-model="text" />
  </div>
</template>

<style scoped>
.A {
  border: red dashed 4px;
  padding: 20px;
}

</style>