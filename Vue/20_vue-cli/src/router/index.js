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
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
      children: [
        {
          path: 'Message',
          component: Message,
          children: [
            {
              name: 'Detail',
              path: 'detail/:id/:title',
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
