<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作时间：{{ job.time.day }}</h2>
  <button @click="age++">修改年龄</button>
  <button @click="job.time.day++">修改时间</button>
  <hr>
  <h2>num的值为：{{ num }}</h2>
  <button @click="num++">修改num</button>
</template>

<script>
import { reactive, ref, toRefs, shallowReadonly } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        time: {
          day: 996
        }
      }
    })

    let num = ref(0)

    // 数据只读
    // person = readonly(person)
    // 数据第一层只读
    person = shallowReadonly(person)

    return {
      num,
      ...toRefs(person)
    }
  }
}
</script>