<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg = !msg">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.age++">修改年龄</button>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18
    })

    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum值变化了', newValue, oldValue)
    // })

    // watchEffect里面所依赖的数据更新时调用
    watchEffect(() => {
      sum.value
      msg.value
      console.log('watchEffect回调执行了')
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>