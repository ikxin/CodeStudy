<template>
  <h2>我是App组件</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <hr>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">弹窗</button>
</template>

<script>
// import { h } from 'vue'

export default {
  name: 'App',
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello() {
      alert(`姓名：${name}，年龄：${age}`)
    }

    // 返回一个对象
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => {
    //   return h('h2', '一纸忘忧')
    // }
  },
  data() {
    return {
      sex: '男'
    }
  }
}
</script>