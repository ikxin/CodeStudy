<template>
  <h2>我是App组件</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="testHello">测试hello事件</button>
  <slot></slot>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'DemoView',
  props: ['msg'],
  emits: ['hello'],
  setup(props, context) {
    console.log(props)
    console.log(context)

    let person = reactive({
      name: '张三',
      age: 18
    })

    function testHello() {
      context.emit('hello', 1)
    }

    return {
      person,
      testHello
    }
  }
}
</script>