<template>
  <div class="container">
    <!-- 默认插槽 -->
    <Category title="美食" :listData="foods">
      <img slot="center" src="./assets/logo.png" />
      <a slot="footer" href="https://www.ikxin.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <!-- 新版具名插槽（只能用于template） -->
      <template v-slot:center>
        <ul slot="center">
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="电影">
      <!-- 作用域插槽 -->
      <template slot-scope="data">
        <ol>
          <li v-for="(item, index) in data.films" :key="index">{{ item }}</li>
        </ol>
      </template>
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
      games: ['穿越火线', '王者荣耀', 'QQ飞车', '和平精英']
      // films: ['《功夫》', '《复仇者联盟》', '《钢铁侠》', '《流浪地球》']
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
