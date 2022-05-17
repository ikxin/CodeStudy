<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="./assets/logo.png" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <ul>
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category },
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['穿越火线', '王者荣耀', 'QQ飞车', '和平精英'],
      films: ['《功夫》', '《复仇者联盟》', '《钢铁侠》', '《流浪地球》']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
