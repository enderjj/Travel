// 顶部轮播图片组件
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="banner-img-wrapper">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_600x330_405288ba.jpg" alt="西溪国家湿地洪园">
      </div>
      <div class="banner-info">
        <p class="info-title">西溪国家湿地洪园</p>
        <div class="info-number">
          <span class="iconfont info-icon">&#xe6dd;</span>
          <span class="number">59</span>
        </div>
      </div>
      <router-link class="banner-return" to="/">
        <div class="iconfont back-icon">&#xe606;</div>
      </router-link>
    </div>
    <!-- 初始不显示，后面再显示的话会存在问题，宽度计算不正确 -->
    <common-gallary
      :imags="imags"
      v-show="showGallary"
      @click="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imags: [
        'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_350x240_99142bd2.jpg',
        'http://img1.qunarzz.com/sight/p0/1904/6d/6dd775aa7d985158a3.water.jpg_r_800x800_ba5cbbe0.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () { // 显示图片画廊
      this.showGallary = true
    },
    handleGallaryClose () { // 关闭图片画廊
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
      height: 4.12rem
    .banner-info
      position: absolute
      display: flex
      left: 0
      right: 0
      bottom: 0
      font-size: .36rem
      padding: 0 .4rem .32rem .2rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .info-title
        flex: 1
        text-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.7)
      .info-number
        display: flex
        justify-content: center
        width: 1rem
        height: .4rem
        line-height: .4rem
        font-size: .24rem
        background: rgba(0, 0, 0, 0.6)
        border-radius: .2rem
        .info-icon
          font-size: .24rem
          margin-right: .1rem
    .banner-return
      position: absolute
      top: .1rem
      left: .1rem
      width: .72rem
      height: .72rem
      line-height: .72rem
      color: #fff
      text-align: center
      background-color: rgba(0, 0, 0, 0.5)
      border-radius: .5rem
      .back-icon
        font-size: .36rem
</style>
