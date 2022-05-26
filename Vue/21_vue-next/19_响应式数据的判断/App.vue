<template>
  <h2>我是App组件</h2>
</template>

<script>
import { reactive, ref, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: '特斯拉',
      price: '80w'
    })
    let sum = ref(0)
    let readOnlyCar = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(readOnlyCar))
    console.log(isProxy(readOnlyCar))

    return {
      car,
      sum,
      readOnlyCar
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 20px;
}
</style>