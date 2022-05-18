import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'Message',
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail
            }
          ]
        },
        {
          path: 'news',
          component: News
        }
      ]
    }
  ]
})
