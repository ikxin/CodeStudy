<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: 'HomeView',
  beforeDestroy () {
    console.log('组件即将被销毁')
  }
}
</script>
