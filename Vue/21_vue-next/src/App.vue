<template>
  <h2>我是App组件</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changeInfo">更改信息</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)

    // 方法
    function changeInfo() {
      name.value = '李四'
      age.value = 20
    }

    // 返回一个对象
    return {
      name,
      age,
      changeInfo
    }
  }
}
</script>