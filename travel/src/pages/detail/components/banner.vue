// 顶部轮播图片组件
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="banner-img-wrapper">
        <img class="banner-img" :src="bannerImg" :alt="sightName">
      </div>
      <div class="banner-info">
        <p class="info-title">{{sightName}}</p>
        <div class="info-number">
          <span class="iconfont info-icon">&#xe6dd;</span>
          <span class="number">{{this.gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- 初始不显示，后面再显示的话会存在问题，宽度计算不正确 -->
      <common-gallary
        :imags="gallaryImgs"
        v-show="showGallary"
        @click="handleGallaryClose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/fadeAnimation' // 引入动画效果

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array
    }
  },
  data () {
    return {
      showGallary: false
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
</style>
