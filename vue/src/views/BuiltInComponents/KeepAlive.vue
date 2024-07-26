<script setup lang="ts">
import { ref } from 'vue'
import ComponentKeepAliveA from '@/components/ComponentKeepAliveA.vue'
import ComponentKeepAliveB from '@/components/ComponentKeepAliveB.vue'

const currentTab = ref('ComponentKeepAliveA')
type t = {
  [key: string]: object
}

const tabs: t = {
  'ComponentKeepAliveA': ComponentKeepAliveA,
  'ComponentKeepAliveB': ComponentKeepAliveB
}

// 缓存实例的生命周期
// 当一个组件实例从 DOM 上移除但因为被 <KeepAlive> 缓存而仍作为组件树的一部分时，
// 它将变为不活跃状态而不是被卸载。
// 当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。
// 一个持续存在的组件可以通过 onActivated()
// 和 onDeactivated() 注册相应的两个状态的生命周期钩子
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
// 调用时机为首次挂载
// 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
// 在从 DOM 上移除、进入缓存
// 以及组件卸载时调用
})
</script>

<template>
  <!-- <KeepAlive> 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例 -->
  <!--
  <component> 元素来实现动态组件,但是默认情况下，一个组件实例在被替换掉后会被销毁。
  这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例
  -->
  <button v-for="(_,tab) in tabs"
          :key="tab"
          @click="currentTab=tab.toString()"
  >
    {{ tab }}
  </button>
  <component :is='tabs[currentTab]'></component>
  <p>type of Component is: {{ typeof ComponentKeepAliveA }} </p>


  <!-- 非活跃的组件将会被缓存！ -->
  <p>KeepAlive 内置组件包装的非活跃动态组件将会被缓存</p>
  <!--
  可以通过传入 max prop 来限制可被缓存的最大组件实例数。
  <KeepAlive> 的行为在指定了 max 后类似一个 LRU 缓存：
  如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，
  以便为新的实例腾出空间
  -->
  <KeepAlive :max="10">
    <component :is="tabs[currentTab]" />
  </KeepAlive>

  <!-- 包含/排除 -->
  <!--
  <KeepAlive> 默认会缓存内部的所有组件实例，
  但可以通过 include 和 exclude prop 来定制该行为。
  这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，
  或是包含这两种类型的一个数组
  -->
  <!-- 以英文逗号分隔的字符串 -->
  <KeepAlive include="a,b"></KeepAlive>

  <!-- 正则表达式 (需使用 `v-bind`) -->
  <KeepAlive :include="/a|b/"></KeepAlive>

  <!-- 数组 (需使用 `v-bind`) -->
  <KeepAlive :include="['a', 'b']"></KeepAlive>
  <!--
  根据组件的 name 选项进行匹配，
  所以组件如果想要条件性地被 KeepAlive 缓存，就必须显式声明一个 name 选项。
  -->
  <!--
  在 3.2.34 或以上的版本中，使用 <script setup> 的单文件组件
  会自动根据文件名生成对应的 name 选项，无需再手动声明。
  -->


</template>

<style scoped>

</style>