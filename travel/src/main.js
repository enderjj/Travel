// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入 vuex.store
import 'styles/reset.css' // 初始化样式
import 'styles/border.css' // 解决移动端 border 1px 问题
import 'styles/iconfont.css' // 引入图标样式
import fastClick from 'fastclick' // 解决移动端点击事件的 300 ms 延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入轮播图插件
import 'swiper/dist/css/swiper.css' // 轮播图插件对应的样式

Vue.config.productionTip = false
fastClick.attach(document.body) // 启用 fastclick

Vue.use(VueAwesomeSwiper) // 在 Vue 中使用 vue-awesome-swiper 插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 在根组件中注册 store
  components: { App },
  template: '<App/>'
})
