<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作时间：{{ job.time.day }}</h2>
  <button @click="age++">修改年龄</button>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        time: {
          day: '996'
        }
      }
    })

    return {
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // day: toRef(person.job.time, 'day')
      ...toRefs(person)
    }
  }
}
</script>