<template>
  <!--
  在前端处理表单时，我们常常需要将表单输入框的内容
  同步给 JavaScript 中相应的变量,v-model 指令简化了这一步
  -->
  <!-- v-model 不会在 IME 输入还在拼字阶段时触发更新 -->
  <p>单行输入</p>
  <p>Message is：{{ message }}</p>
  <input v-model="message" placeholder="请输入" />

  <!-- 多行文本 textarea -->
  <!-- textarea 不支持插值表达式 -->
  <p>多行文本</p>
  <p>multiLineMessage is: {{ multiLineMessage }}</p>
  <textarea v-model="multiLineMessage" placeholder="请输入"></textarea>

  <!-- 复选框 -->
  <p>复选框</p>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <!--  可以将多个复选框绑定到同一个数组或者集合的值-->
  <p>可以将多个复选框绑定到同一个数组或者集合的值</p>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <!-- 单选按钮 -->
  <p>单选按钮</p>
  <div>Picked:{{ picked }}</div>

  <input type="radio" id="one" value="one" v-model="picked" />
  <label for="one">0ne</label>

  <input type="radio" id="two" value="two" v-model="picked" />
  <label for="two">two</label>
  <!-- 单个选择器 -->
  <p>单个选择器</p>
  <div>Selected One:{{ selectedOne }}</div>
  <select id="selected" v-model="selected">
    <option disabled value="">请选择</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <!-- 多选择器 -->
  <p>多选择器</p>
  <div>Selected: {{ selectedOne }}</div>
  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p></p>
  <!-- 选择器可以使用 v-for 进行动态渲染 -->
  <p>使用 v-for 进行动态渲染</p>
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <p>值绑定</p>
  <div>Selected: {{ selected }}</div>
  <!--
  对于单选按钮，复选框和选择器选项，
  v-model 绑定的值通常是静态的字符串 (或者对复选框是布尔值)：
  -->

  <!-- `picked` 在被选择时是字符串 "a" -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` 只会为 true 或 false -->
  <p>toggle is:{{ toggle }}</p>
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` 在第一项被选中时为字符串 "abc" -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <!--
  将该值绑定到当前组件实例上的动态数据,可以通过使用 v-bind 来实现。
  此外，使用 v-bind 还使我们可以将选项值绑定为非字符串的数据类型。
  -->
  <p>toggle is:{{ toggle }}</p>
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

  <!--
  true-value 和 false-value 是 Vue 特有的 attributes，
  仅支持和 v-model 配套使用。
  toggle 属性的值会在选中时被设为 'yes'，取消选择时设为 'no'。
  可以通过 v-bind 将其绑定为其他动态值
  -->

  <!-- 单选按钮 -->
  <p>单选按钮值绑定</p>
  <input type="radio" v-model="pick" id="first" value="first" />
  <label for="first">First</label>
  <input type="radio" v-model="pick" value="second" />
  <label for="second">Second</label>
  <div>pick is:{{ pick }}</div>

  <!-- 选择器选项 -->
  <p>选择器选项值绑定</p>
  <p>selected is:{{ selected }}</p>
  <select v-model="selected">
    <!-- 内联对象字面量 -->
    <option :value="{ number: 123 }">123</option>
  </select>
  <!-- 修饰符 .lazy -->
  <!--
  默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。
  你可以添加 lazy 修饰符来改为在每次 change 事件后更新数据：
  -->
  <!-- 在 "change" 事件后同步更新而不是 "input" -->
  <p>msg is:{{ msg }}</p>
  <input v-model.lazy="msg" />
  <!-- .number 自动转换为数字 -->
  <p>msg is :{{ age }}</p>
  <input v-model.number="age" />
  <!--
  如果该值无法被 parseFloat() 处理，那么将返回原始值。
  number 修饰符会在输入框有 type="number" 时自动启用。
  -->

  <!-- .trim 自动去除输入内容两端的空格 -->
  <p>msg is:{{ msg }}</p>
  <input v-model.trim="msg" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

let message = ref('')
let multiLineMessage = ref('')
let checked = ref(false)
const checkedNames = ref([])
let picked = ref()
let selectedOne = ref()
const selected = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
let toggle = ref(false)
let pick = ref()
let msg = ref('')
let age = ref()
</script>
<style scoped></style>
