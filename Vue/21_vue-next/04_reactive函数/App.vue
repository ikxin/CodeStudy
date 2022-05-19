<template>
  <h2>我是App组件</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作岗位：{{ job.type }}</h2>
  <h2>工作薪资：{{ job.salary }}</h2>
  <h2>工作时间：{{ job.time.day }}</h2>
  <h2>工作城市：{{ job.city }}</h2>
  <h2>爱好：{{ hobby }}</h2>
  <button @click="changeInfo">更改信息</button>
  <button @click="addCity">添加城市</button>
  <button @click="deleteTime">删除时间</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type: 'Web',
      salary: "30k",
      time: {
        day: '996'
      }
    })
    let hobby = reactive(['吃饭', '睡觉'])

    // 方法
    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.type = 'UI'
      job.salary = '60k'
      job.time.day = '007'
      hobby[0] = '打游戏'
    }
    function addCity() {
      job.city = '北京'
    }
    function deleteTime() {
      delete job.time.day
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      hobby,
      addCity,
      deleteTime,
      changeInfo
    }
  }
}
</script>