import { defineStore } from 'pinia'

// 可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，
// 同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// 这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。
// 为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
// defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
export const useExampleStore = defineStore('example', {
  // 在大多数情况下，state 都是 store 的核心。
  // 人们通常会先定义能代表他们 APP 的 state。
  // 在 Pinia 中，state 被定义为一个返回初始状态的函数。
  // 这使得 Pinia 可以同时支持服务端和客户端。

  // 为了完整类型推理，推荐使用箭头函数
  // 不需要做太多努力就能使 state 兼容 TS。
  // 确保启用了 strict，或者至少启用了 noImplicitThis，
  // Pinia 将自动推断状态类型！ 但是，在某些情况下，应该帮助它进行一些转换
  state: () => {
    return {
      count: 0,
      // 用于初始化空列表
      userList: [] as UserInfo[]
    }
  },
  // Getter 完全等同于 store 的 state 的计算值。
  // 可以通过 defineStore() 中的 getters 属性来定义它们。
  // 推荐使用箭头函数，并且它将接收 state 作为第一个参数
  getters: {
    doubleCount: (state) => state.count * 2,
    // 大多数时候，getter 仅依赖 state。不过，有时它们也可能会使用其他 getter。
    // 因此，即使在使用常规函数定义 getter 时，
    // 可以通过 this 访问到整个 store 实例，
    // 但(在 TypeScript 中)必须定义返回类型。
    // 这是为了避免 TypeScript 的已知缺陷，不过这不影响用箭头函数定义的 getter，
    // 也不会影响不使用 this 的 getter。

    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注
      return this.doubleCount + 1
    },
    // 向 getter 传递参数
    // Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。
    // 不过，可以从 getter 返回一个函数，该函数可以接受任意参数
    addCount: (state) => {
      return (num: number) => state.count + num // 不是数值相加
    }
    // 访问其他 store 的 getter
    // 想要使用另一个 store 的 getter 的话，那就直接在 getter 内使用就好
  },

  // Action 相当于组件中的 method。
  // 它们可以通过 defineStore() 中的 actions 属性来定义，
  // 并且它们也是定义业务逻辑的完美选择

  // 类似 getter，action 也可通过 this 访问整个 store 实例，
  // 并支持完整的类型标注(以及自动补全✨)。不同的是，action 可以是异步的，
  // 可以在它们里面 await 调用任何 API，以及其他 action！
  actions: {
    increment() {
      this.count++
    }
  }
})

interface UserInfo {
  name: string
  age: number
}
