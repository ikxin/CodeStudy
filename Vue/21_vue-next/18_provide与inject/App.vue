<template>
  <div class="app">
    <h2>我是App组件（祖）</h2>
    <Child />
  </div>
</template>

<script>
import Child from './components/Child'
import { reactive, provide } from 'vue'
export default {
  name: 'App',
  components: { Child },
  setup() {
    let car = reactive({
      name: '特斯拉',
      price: '80w'
    })

    // 给自己的后代组件传递数据
    provide('car', car)

    return { car }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 20px;
}
</style>