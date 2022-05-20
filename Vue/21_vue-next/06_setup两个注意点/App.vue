<template>
  <Demo @hello='showHelloMsg' msg="hello">
    <template v-slot:name>
      <span>插槽内容</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg() {
      alert('hello')
    }
    return {
      showHelloMsg
    }
  }
}
</script>