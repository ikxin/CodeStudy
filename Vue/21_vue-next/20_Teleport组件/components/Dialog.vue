<template>
  <div>
    <button @click="isShow = true">点击弹窗</button>
    <teleport to='body'>
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h2>标题</h2>
          <hr>
          <p>这里是内容</p>
          <p>这里是内容</p>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'DialogView',
  setup() {
    let isShow = ref(false)
    return { isShow }
  }
}
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: green;
  text-align: center;
}
</style>
