import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore, Store } from 'vuex'

const app = createApp(App)

// 创建一个新的 store 实例
const store = createStore({
  // state 单一状态树
  // Vuex 使用单一状态树: 用一个对象就包含了全部的应用层级状态。
  // 至此它便作为一个“唯一数据源 (SSOT)”而存在。
  // 这也意味着,每个应用将仅仅包含一个 store 实例。
  // 单一状态树让我们能够直接地定位任一特定的状态片段，
  // 在调试的过程中也能轻易地取得整个当前应用状态的快照
  state: {
    people: [
      { id: 1, name: '小明', age: 18 },
      { id: 2, name: '小红', age: 24 }
    ],
    count: 0
  },
  // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
  // Getter 接受 state 作为其第一个参数
  getters: {
    // 属性
    getPeople(state) {
      return state.people
    },
    // 方法
    getById: (state: Store) => (id: number) => {
      return state.people.find((item) => item.id === id)
    }
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  // Vuex 中的 mutation 非常类似于事件：
  // 每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。
  // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
  mutations: {
    addOne(state: Store) {
      state.count++
    },
    // 提交载荷（Payload): 你可以向 store.commit 传入额外的参数，即 mutation 的载荷（payload
    add(state: Store, n) {
      state.count += parseInt(n.num)
      // state.count +=n  结果是字符串拼接
    }
  },
  // Action 类似于 mutation，不同在于：
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    // 因此可以调用 context.commit 提交一个 mutation，
    // 或者通过 context.state 和 context.getters 来获取 state 和 getters。
    addOne(context) {
      context.commit('addOne')
    }
  }
  // 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。
  // 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
  // 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
  // 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
})
// 在 store 创建之后，你可以使用 store.registerModule 方法注册模块
// 注册模块 `myModule`
/*
store.registerModule('myModule', {
  // ...
})

// 注册嵌套模块 `nested/myModule`
store.registerModule(['nested', 'myModule'], {
  // ...
})
*/
// 将 store 实例作为插件安装
app.use(store)

app.use(router)

app.mount('#app')
