// 引入createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
const app = createApp(App)
// 挂载app
app.mount('#app')

// createApp(App).mount('#app')
