// 游玩列表组件
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" :src="item.imgUrl">
          </div>
          <div class="icon-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination' // 轮播图分页设置
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '杭州必游'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '杭州必游'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '千岛湖'
        }
      ]
    }
  },
  computed: {
    // pages 属性用来保存轮播页数
    pages () {
      const pages = [] // 初始为空
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 每个 icon 所在的轮播页

        if (!pages[page]) { // 如果当前轮播页不存在，则初始化当前轮播页
          pages[page] = [] // 每个轮播页初始化为一个数组，用于保存当前轮播页显示的所有 icon
        }

        pages[page].push(item) // 向当前轮播页数组中保存当前元素
      })

      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';

  .icons >>> .swiper-slide swiper-slide-active
    padding-bottom: 40px
  // .icons >>> .swiper-pagination
  //   padding-bottom: -20px
  //   font-size: 8px
  .icons
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 50%
    padding-top: .1rem
    .icon
      position: relative
      float: left
      width: 25%
      height: 1.5rem
      padding-top: .1rem
      .icon-img
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: .44rem
        .img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        font-size: .28rem
        color: $darkTextColor
</style>
