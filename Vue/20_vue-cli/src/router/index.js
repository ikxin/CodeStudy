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
              // 声明接收params
              // path: 'detail/:id/:title',
              path: 'detail',
              component: Detail,
              // 值为对象，直接以props形式传给组件
              // props: {}

              // 值为布尔值，若值为真，把所有params以props形式传给组件
              // props: true

              // 值为函数，可以收到$route
              props ($route) {
                return { id: $route.query.id, title: $route.query.title }
              }
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
