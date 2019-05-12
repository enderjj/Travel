import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/home'
// import City from '@/pages/city/city'
// import Detail from '@/pages/detail/detail'
// import Rating from '@/pages/rating/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      component: () => {import '@/pages/home/home'} // 通过异步组件异步地加载所需要的组件，提升页面性能
    },
    {
      path: '/city',
      name: 'City',
      // component: City
      component: () => {import '@/pages/city/city'} // 通过异步组件异步地加载所需要的组件，提升页面性能
    },
    {
      path: '/detail/:id', // :id 表示接收参数保存在 id 中，该路由是一个动态路由
      name: 'Detail',
      // component: Detail
      component: () => {import '@/pages/detail/detail'} // 通过异步组件异步地加载所需要的组件，提升页面性能
    },
    {
      path: '/detail/:id/rating', // :id 表示接收参数保存在 id 中，该路由是一个动态路由
      name: 'Rating', // 评论页
      // component: Rating
      component: () => {import '@/pages/rating/ratings'} // 通过异步组件异步地加载所需要的组件，提升页面性能
    }
  ],
  // 阻止多个页面滚动之间的相互影响，比如详情页滚动会影响首页，首页滚动会影响详情页
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
