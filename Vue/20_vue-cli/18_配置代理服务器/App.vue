<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudent () {
      axios.get('http://localhost:8080/student').then(
        (response) => {
          console.log('请求成功', response)
        },
        (error) => {
          console.log('请求失败', error)
        }
      )
    }
  }
}
</script>
