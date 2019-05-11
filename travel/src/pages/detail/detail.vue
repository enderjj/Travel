// 旅游详情页面
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'

export default {
  name: 'Detail',
  components: {
    detailBanner,
    DetailHeader,
    DetailList
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
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
