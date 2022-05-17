// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
})
