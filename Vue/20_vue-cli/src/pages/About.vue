<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'AboutView',
  beforeDestroy () {
    console.log('组件即将被销毁')
  }
}
</script>
