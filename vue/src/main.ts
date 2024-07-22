import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App) // 每个vue应用通过createApp函数创建一个新的应用实例
// createApp的对象实际上是一个组件，每一个应用都需要一个根组件，其他应用作为其子组件
app.use(createPinia())
app.use(router)

// DOM 中的根组件模板
// 根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供(App.vue)

app.mount('#app') // 应用实例必须在调用.mount方法后才会渲染出来
// .mount方法接受一个“容器”作为参数，可以是DOM对象或者CSS选择器字符串
// 返回值是根组件实例而非应用实例

/*应用实例会暴露一个.config对象运行我们配置一些应用级的选项，
类如定义一个应用级的错误处理器，用来捕获所有子组件的错误*/
app.config.errorHandler = (err) => {
  // 处理错误
}

//应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：
//app.component('TodoDeleteButton', TodoDeleteButton)

/* createApp API允许在同一个页面中创建多个共存的Vue应用，
 * 每个应用都有自己用于配置和全局资源的作用域*/
