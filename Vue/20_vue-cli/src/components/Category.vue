<template>
  <div class="category">
    <h2>{{ title }}分类</h2>
    <!-- 定义一个插槽 -->
    <slot>默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'CategoryView',
  props: ['title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h2 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
</style>
