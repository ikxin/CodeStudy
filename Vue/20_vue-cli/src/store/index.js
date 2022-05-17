// 引入Vue
import Vue from 'vue'
// 引入和使用Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions（用于响应组件中的动作）
const actions = {
  // increment (context, value) {
  //   context.commit('increment', value)
  // },
  // decrement (context, value) {
  //   context.commit('decrement', value)
  // },
  incrementOdd (context, value) {
    if (context.state.sum % 2) {
      context.commit('increment', value)
    }
  },
  incrementWait (context, value) {
    setTimeout(() => {
      context.commit('increment', value)
    }, 500)
  }
}

// 准备mutations（用于操作数据）
const mutations = {
  increment (state, value) {
    state.sum += value
  },
  decrement (state, value) {
    state.sum -= value
  }
}

// 准备state（用于存储数据）
const state = {
  sum: 0
}

// 创建store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
