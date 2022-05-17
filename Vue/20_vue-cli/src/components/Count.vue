<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <h2>当前求和放大十倍为：{{ $store.getters.bigSum }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'CountView',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment', this.num)
    },
    decrement () {
      this.$store.commit('decrement', this.num)
    },
    incrementOdd () {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait () {
      this.$store.dispatch('incrementWait', this.num)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
