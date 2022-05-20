<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>当前鼠标坐标为：x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'

export default {
  name: 'DemoView',
  setup() {
    let sum = ref(0)
    // 自定义hooks函数
    let point = usePoint()
    return {
      sum,
      point
    }
  },
}
</script>