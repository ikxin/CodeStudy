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
import { reactive, ref, watch } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18
    })

    // 情况1：监视ref定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变化了', newValue, oldValue)
    }, {
      immediate: true,
      deep: true
    })

    // 情况2：监视ref定义的多个响应式数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum/msg变化了', newValue, oldValue)
    })

    // 情况3：监视reactive定义的响应式数据的全部属性
    // 注意：此处无法正确获取oldValue
    // 注意：强制开启了深度监视
    watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue)
    })

    // 情况4：监视reactive定义的响应式数据的一个属性
    watch(() => person.age, (newValue, oldValue) => {
      console.log('person.age变化了', newValue, oldValue)
    })

    // 情况5：监视reactive定义的响应式数据的多个属性
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person.name/age变化了', newValue, oldValue)
    })

    return {
      sum,
      msg,
      person
    }
  },
  // watch: {
  //   sum(newValue, oldValue) {
  //     console.log('sum变化了', newValue, oldValue)
  //   }
  // }
}
</script>