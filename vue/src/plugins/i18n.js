// 一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。
// 安装函数会接收到安装它的应用实例和传递给 app.use() 的额外选项作为参数
// 这个函数应当能够在任意模板中被全局调用。
// 这一点可以通过在插件中将它添加到 app.config.globalProperties 上来实现


// $translate 函数会接收一个例如 greetings.hello 的字符串，
// 在用户提供的翻译字典中查找，并返回翻译得到的值。

export default {
  install: (app, options) => {
    // 我们可以通过 provide 来为插件用户供给一些内容。
    // 举例来说，我们可以将插件接收到的 options 参数提供给整个应用，
    // 让任何组件都能使用这个翻译字典对象。
    app.provide('i18n', options)
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}
// $translate 函数会接收一个例如 greetings.hello 的字符串，
// 在用户提供的翻译字典中查找，并返回翻译得到的值。

