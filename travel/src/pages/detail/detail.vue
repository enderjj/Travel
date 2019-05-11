// 旅游详情页面
<template>
  <div>
    <detail-banner></detail-banner>
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
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票三馆联票'
            },
            {
              title: '成人票五馆联票',
              children: [
                {
                  title: '三馆联票-杭州销售'
                }
              ]
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ],
      routeId: ''
    }
  },
  activated () {
    this.routeId = this.$route.params.id + '' // 保存当前动态路由参数
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
