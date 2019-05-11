// 旅游详情页面
<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-rating :routeId="routeId"></detail-rating>
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import DetailRating from './components/rating'

import Axios from 'axios'

export default {
  name: 'Detail',
  components: {
    detailBanner,
    DetailHeader,
    DetailList,
    DetailRating
  },
  data () {
    return {
      sightName: '', // 景点名称
      bannerImg: '', // banner 展示图片
      gallaryImgs: [], // 画廊图片
      list: [], // 景点列表
      routeId: '', // 本页面的动态路由参数 id
      lastId: '' // 上次详情页面的 id
    }
  },
  methods: {
    getDetailData () { // 获取详情页数据
      Axios.get('/api/detail.json?id=' + this.routeId)
        .then(this.getDetailDataSucc) // axios 请求会返回一个 promise 对象
    },
    getDetailDataSucc (response) { // 请求成功的回调函数
      response = response.data

      if (response.ret && response.data) {
        const data = response.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.routeId = this.$route.params.id + '' // 保存当前动态路由参数
    this.lastId = this.routeId
    this.getDetailData()
  },
  activated () {
    this.routeId = this.$route.params.id + '' // 保存当前动态路由参数
    // 如果两次加载的 id 不相等，则需要重新发送 ajax 请求
    if (this.lastId !== this.routeId) {
      this.lastId = this.routeId
      this.getDetailData()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
