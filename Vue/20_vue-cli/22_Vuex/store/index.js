// 引入Vue
import Vue from 'vue'
// 引入和使用Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)
// 准备actions（用于响应组件中的动作）
// const actions = {
//   incrementOdd (context, value) {
//     if (context.state.sum % 2) {
//       context.commit('increment', value)
//     }
//   },
//   incrementWait (context, value) {
//     setTimeout(() => {
//       context.commit('increment', value)
//     }, 500)
//   }
// }

// 准备mutations（用于操作数据）
// const mutations = {
//   increment (state, value) {
//     state.sum += value
//   },
//   decrement (state, value) {
//     state.sum -= value
//   },
//   addPerson (state, value) {
//     state.personList.unshift(value)
//   }
// }

// 准备state（用于存储数据）
// const state = {
//   sum: 0,
//   site: '哔哩哔哩',
//   lang: 'Vue',
//   personList: [
//     { id: '001', name: '张三' }
//   ]
// }

// 准备getters（用于加工state中的数据）
// const getters = {
//   bigSum (state) {
//     return state.sum * 10
//   }
// }

// 创建store
export default new Vuex.Store({
  // actions,
  // mutations,
  // state,
  // getters
  modules: {
    count: countOptions,
    person: personOptions
  }
})
