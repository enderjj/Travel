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
import { mapState } from 'vuex'

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
      weekendList: [],
      lastCity: '' // 上一次的当前城市
    }
  },
  computed: {
    ...mapState(['city']) // 获取当前城市
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.city) // 填写实际开发中后端的真实接口
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
    this.lastCity = this.city
    this.getHomeData()
  },
  // activated 生命周期函数当页面被重新加载时执行
  activated () {
    // 如果两次加载的城市不相等，则需要重新发送 ajax 请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  }
}
</script>

<style>
</style>
