import { createPinia } from 'pinia'

const pinia = createPinia()
//插件是通过 pinia.use() 添加到 pinia 实例的。
// 创建的每个 store 中都会添加一个名为 `secret` 的属性。
// 在安装此插件后，插件可以保存在不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

// 将该插件交给 Pinia
pinia.use(SecretPiniaPlugin)
// 这对添加全局对象很有用，如路由器、modal 或 toast 管理器

// Pinia 插件是一个函数，可以选择性地返回要添加到 store 的属性。
// 它接收一个可选参数，即 context
// 插件只会应用于在 pinia 传递给应用后创建的 store，否则它们不会生效。

// 扩展 Store: 可以直接通过在一个插件中返回包含特定属性的对象来为每个 store 都添加上特定属性
pinia.use(() => ({ hello: 'hello' }))
// 也可以直接在 store 上设置该属性，但可以的话，请使用返回对象的方法，
// 这样它们就能被 devtools 自动追踪到
/*
pinia.use(({ store }) => {
  store.hello = 'world'
})
*/

// ts 标注插件类型:一个 Pinia 插件可按如下方式实现类型标注：
import { PiniaPluginContext } from 'pinia'

export function myPiniaPlugin(context: PiniaPluginContext) {
  // ...
}
