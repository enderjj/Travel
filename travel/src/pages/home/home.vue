// 首页组件
<template>
  <div>
    <!-- 通过 props 属性给子组件传递数据 -->
    <home-header></home-header>
    <home-swiper :slist="swiperList"></home-swiper>
    <home-icons :ilist="iconList"></home-icons>
    <home-recommend :rlist="recommendList"></home-recommend>
    <home-weekend :wlist="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/travelicons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'

import axios from 'axios'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json') // 填写实际开发中后端的真实接口
        .then(this.getHomeDataSucc) // axios 会返回一个 promise 对象
    },
    getHomeDataSucc (response) {
      response = response.data
      if (response.ret && response.data) {
        const data = response.data

        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style>
</style>
