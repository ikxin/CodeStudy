<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作时间：{{ job.time.day }}</h2>
  <button @click="age++">修改年龄</button>
  <button @click="job.time.day++">修改时间</button>
  <hr>
  <h2>num的值为：{{ num.a }}</h2>
  <button @click="num.a++">修改num</button>
</template>

<script>
import { toRefs, shallowReactive, shallowRef } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    // 浅层次的响应式
    let person = shallowReactive({
      name: '张三',
      age: 18,
      job: {
        time: {
          day: 996
        }
      }
    })

    // 不进行对象的响应式处理
    let num = shallowRef({
      a: 100
    })

    return {
      num,
      ...toRefs(person)
    }
  }
}
</script>