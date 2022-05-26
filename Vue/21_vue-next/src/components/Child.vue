<template>
  <div class="child">
    <h2>我是Child组件（子）</h2>
    <Son />
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'ChildView',
  components: { Son }
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 20px;
}
</style>