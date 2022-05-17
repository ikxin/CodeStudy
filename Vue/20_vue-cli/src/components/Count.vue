<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求和放大十倍为：{{ bigSum }}</h2>
    <h2>我在{{ site }}学{{ lang }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'CountView',
  data () {
    return {
      num: 1
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    ...mapState({ sum: 'sum', site: 'site', lang: 'lang' }),
    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'site', 'lang']),
    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment () {
    //   this.$store.commit('increment', this.num)
    // },
    // decrement () {
    //   this.$store.commit('decrement', this.num)
    // },
    // incrementOdd () {
    //   this.$store.dispatch('incrementOdd', this.num)
    // },
    // incrementWait () {
    //   this.$store.dispatch('incrementWait', this.num)
    // }

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
    ...mapMutations(['increment', 'decrement']),
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
    ...mapActions(['incrementOdd', 'incrementWait'])
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
