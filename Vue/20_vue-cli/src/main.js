// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入ElementUI组件库
import { Card, Button, DatePicker } from 'element-ui'
Vue.component(Card.name, Card)
Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// Vue.use(ElementUI)

// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
})
