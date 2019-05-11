import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'
import Rating from '@/pages/rating/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // :id 表示接收参数保存在 id 中，该路由是一个动态路由
      name: 'Detail',
      component: Detail
    },
    {
      path: '/detail/:id/rating', // :id 表示接收参数保存在 id 中，该路由是一个动态路由
      name: 'Rating', // 评论页
      component: Rating
    }
  ]
})
