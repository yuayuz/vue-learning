import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useExampleStore } from '@/stores/example'

const app = createApp(App)

const useStore1 = useExampleStore
// 失败，因为它是在创建 pinia 之前被调用的

app.use(createPinia())
app.use(router)
// 在组件外使用 store
const useStore = useExampleStore
// 成功，因为 pinia 实例现在激活了
// 为确保 pinia 实例被激活，
// 最简单的方法就是将 useStore() 的调用放在 pinia 安装后才会执行的函数中。
app.mount('#app')
