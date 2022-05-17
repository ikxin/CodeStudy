<template>
  <div class="category">
    <h2>{{ title }}分类</h2>
    <!-- 默认插槽 -->
    <slot name="center"></slot>
    <!-- 具名插槽 -->
    <slot name="footer"></slot>
    <!-- 作用域插槽 -->
    <slot :films="films"></slot>
  </div>
</template>

<script>
export default {
  name: 'CategoryView',
  props: ['title'],
  data () {
    return {
      // foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      // games: ['穿越火线', '王者荣耀', 'QQ飞车', '和平精英'],
      films: ['《功夫》', '《复仇者联盟》', '《钢铁侠》', '《流浪地球》']
    }
  }
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
