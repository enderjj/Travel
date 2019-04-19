// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css' // 初始化样式
import './assets/styles/border.css' // 解决移动端 border 1px 问题
import fastClick from 'fastclick' // 解决移动端点击事件的 300 ms 延迟问题

Vue.config.productionTip = false
fastClick.attach(document.body) // 启用 fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
