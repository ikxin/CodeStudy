import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
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
          name: 'Message',
          path: 'message',
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
          name: 'News',
          path: 'news',
          component: News
        }
      ]
    }
  ]
})

// 全局前置路由守卫（初始化、路由切换之前被调用）
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.path === '/home/news') {
    // eslint-disable-next-line no-constant-condition
    if (false) {
      next()
    } else {
      alert('没有权限')
    }
  } else {
    next()
  }
})

export default router
