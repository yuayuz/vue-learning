<template>
  <p>父组件 ComponentsBasics</p>
  <input placeholder="请输入要传给子组件的姓名" v-model="name" />
  <div :style="{ fontSize: postFontSize + 'em', backgroundColor: color }">
    <!-- 父组件可以通过 v-on 或 @ 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样 -->
    <Props :name="name" @enlarge-text="postFontSize += 0.1" @backgroundColor="color = 'yellow'"
      >Props
    </Props>
    <!--
    有了 @enlarge-text="postFontSize += 0.1" 的监听，
    父组件会接收这一事件，从而更新 postFontSize 的值。
    -->

    <!-- 动态组件 -->
    <!-- currentTab 改变时组件也改变 -->
    <p>动态组件</p>
    <!-- 未使用 props 和上抛事件 -->
    <component :is="tabs[currentTab]"></component>
  </div>

  <!--
  大小写区分
  HTML 标签和属性名称是不分大小写的，所以浏览器会把任何大写的字符解释为小写。
  这意味着当使用 DOM 内的模板时，无论是 PascalCase 形式的组件名称、camelCase 形式的 prop 名称
  还是 v-on 的事件名称，都需要转换为相应等价的 kebab-case (短横线连字符) 形式
  -->

  <!--
  Vue 的模板解析器支持任意标签使用 /> 作为标签关闭的标志。
  然而在 DOM 内模板中，必须显式地写出关闭标签
  -->

  <!--
  自定义的组件作为无效的内容被忽略，因而在最终呈现的输出中造成错误。
  可以使用特殊的 is attribute 作为一种解决方案：
  -->
</template>

<script setup lang="ts">
import Props from '@/views/vueBasics/Props.vue'
import { ref } from 'vue'

let name = ref('')

const postFontSize = ref(1)
const color = ref('white')

const tabs = { Props }
const currentTab = ref('Props')
</script>
<style scoped></style>
