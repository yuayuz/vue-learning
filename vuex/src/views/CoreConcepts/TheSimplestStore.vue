<script setup lang="ts">
import { mapGetters, useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()

// 不能直接调用一个 mutation 处理函数。
// 这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，
// 调用此函数。”要唤醒一个 mutation 处理函数，你需要以相应的 type 调用 store.commit 方法
const addOne = function () {
  store.commit('addOne')
}
const add = function (n: number) {
  // store.commit('add', n)
  // 对象风格提交方式
  store.commit({
    type: 'add',
    num: n
  })
}
const num = ref(0)
// mapGetters 辅助函数: mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
const c = computed({
  // 使用对象展开运算符将 getter 混入 computed 对象中
  ...mapGetters([
    'getPeople',
    'getById'
    // ...
  ])
})
</script>

<template>
  <h1>The Simplest Store</h1>
  <p>{{ store.state.count }}</p>
  <button @click="addOne">addOne</button>
  <br />
  <input placeholder="请输入要增加的数值" v-model="num" />
  <button @click="add(num)">add</button>
  <!-- 通过属性访问: Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值： -->
  <p>people is: {{ store.getters.getPeople }}</p>
  <!-- 通过方法访问:可以通过让 getter 返回一个函数，来实现给 getter 传参 -->
  <!-- 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果 -->
  <p>getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果</p>
  <p>{{ store.getters.getById(1) }}</p>
</template>

<style scoped></style>
