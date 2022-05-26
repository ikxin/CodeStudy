<template>
  <div class="son">
    <h2>我是Son组件</h2>
    <DialogView />
  </div>
</template>

<script>
import DialogView from './Dialog.vue'
export default {
  name: "SonView",
  components: { DialogView }
}
</script>

<style>
.son {
  background-color: orange;
  padding: 20px;
}
</style>