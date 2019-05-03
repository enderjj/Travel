// vuex 内容
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // 在 Vue 中使用 Vuex

// 输入 Vuex.Store() 对象
export default new Vuex.Store({
  // state 类似于 vue 中的 data
  state,
  // actions 中的是异步事件
  // actions: {
  //   changeCity (context, city) { // 异步事件有两个参数，一个是当前的上下文，一个是传入的参数
  //     context.commit('changeCity', city) // 调用 mutations 事件改变 state 中的数据
  //   }
  // },
  // mutations 类似于 vue 中的 methods
  mutations
})
