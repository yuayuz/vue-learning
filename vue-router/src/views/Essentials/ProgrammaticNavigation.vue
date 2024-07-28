<script setup lang="ts">
// router 指代路由器实例。在组件内部，可以使用 $router 属性访问路由，
// 例如 this.$router.push(...)。如果使用组合式 API，
// 可以通过调用 useRouter() 来访问路由器。
// 想要导航到不同的 URL，可以使用 router.push 方法。
// 这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。
// 当你点击 <router-link> 时，内部会调用这个方法，所以
// 点击 <router-link :to="..."> 相当于调用 router.push(...)
// router.push()方法的参数可以是一个字符串路径，或者一个描述地址的对象

import router from '@/router'

// 字符串路径
// router.push('/users/eduardo')

// 带有路径的对象
// router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
// router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
// router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
// router.push({ path: '/about', hash: '#team' })

// 当指定 params 时，可提供 string 或 number 参数（或者对于可重复的参数可提供一个数组）。
// 任何其他类型（如对象、布尔等）都将被自动字符串化。对于可选参数，
// 你可以提供一个空字符串（""）或 null 来移除它
// 由于属性 to 与 router.push 接受的对象种类相同，所以两者的规则完全相同。
// router.push 和所有其他导航方法都会返回一个 Promise，
// 使得我们等到导航完成后才知道是成功还是失败。

// 替换当前位置
// router.replace() 的作用类似于 router.push，唯一不同的是，
// 它在导航时不会向 history 添加新记录，正如它的名字所暗示的那样——它取代了当前的条目。
// router.push({ path: '/home', replace: true })
// 相当于
// router.replace({ path: '/home' })

// router.go()该方法采用一个整数作为参数，
// 表示在历史堆栈中前进或后退多少步，类似于 window.history.go(n)
// 向前移动一条记录，与 router.forward() 相同
// router.go(1)

// 返回一条记录，与 router.back() 相同
// router.go(-1)

// 前进 3 条记录
// router.go(3)

// 如果没有那么多记录，静默失败
// router.go(-100)
// router.go(100)
</script>

<template>
  <h1>编程式导航</h1>
  <p>返回一条记录</p>
  <button @click="() => router.go(-1)">后退一步</button>
</template>

<style scoped></style>
