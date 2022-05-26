<template>
  <div class="son">
    <h2>我是Son组件（孙）</h2>
    <div>{{ car }}</div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'SonView',
  setup() {
    let car = inject('car')
    return { car }
  }
}
</script>

<style>
.son {
  background-color: orange;
  padding: 20px;
}
</style>