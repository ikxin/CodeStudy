<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <div>加载中...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入组件
// import Child from './components/Child'

// 异步引入组件
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child.vue'))
export default {
  name: 'App',
  components: { Child }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 20px;
}
</style>