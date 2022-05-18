// 求和相关配置
export default {
  // 开启命名空间
  namespaced: true,
  actions: {
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
  },
  mutations: {
    increment (state, value) {
      state.sum += value
    },
    decrement (state, value) {
      state.sum -= value
    }
  },
  state: {
    sum: 0,
    site: '哔哩哔哩',
    lang: 'Vue'
  },
  getters: {
    bigSum (state) {
      return state.sum * 10
    }
  }
}
