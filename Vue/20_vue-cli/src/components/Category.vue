<template>
  <div class="category">
    <h2>{{ title }}分类</h2>
    <!-- 默认插槽 -->
    <slot name="center">默认值</slot>
    <!-- 具名插槽 -->
    <slot name="footer">默认值</slot>
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
