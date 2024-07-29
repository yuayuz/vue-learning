<script setup lang="ts">
// 组合式API
// 可以通过调用 useStore 函数，来在 setup 钩子函数中访问 store。
// 这与在组件中使用选项式 API 访问 this.$store 是等效的

// 访问 State 和 Getter
// 为了访问 state 和 getter，需要创建 computed 引用以保留响应性，
// 这与在选项式 API 中创建计算属性等效。
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()
// 在 computed 函数中访问 state
const count = computed(() => store.state.count)
// 在 computed 函数中访问 getters
const getPeople = computed(() => store.getters.getPeople)
const id = ref(0)
const num = ref(0)
const getById = function (id: number) {
  computed(() => store.getters.getById(id))
}

// 访问 Mutation 和 Action#
// 要使用 mutation 和 action 时，只需要在 setup 钩子函数中
// 调用 commit 和 dispatch 函数

// 使用 mutation
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
// 使用 action
const addOneA = function () {
  store.dispatch('addOne')
}
</script>

<template>
  <h1>Example</h1>
  <p>{{ count }}</p>
  <button @click="addOne()">add One</button>
  <button @click="addOneA">add One Action</button>
  <input v-model="num" />
  <button @click="add(num)">add</button>
  <p>{{ getPeople }}</p>
  <input v-model="id" />
  <p>{{ getById(id) }}</p>
</template>

<style scoped></style>
