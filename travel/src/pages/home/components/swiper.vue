// 轮播图组件
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides 轮播页面 -->
      <swiper-slide v-for="item of slist" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls 轮播图其他选项 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    slist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 轮播图分页设置
        loop: true // 设置轮播图是否循环播放
      }
    }
  },
  computed: {
    showSwiper () {
      return this.slist.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 下面两行是为了消除 scoped 的影响，设置轮播图圆点的样式，表示 .wrapper 下面的所有 .swiper-pagination-bullet-active 元素都设置这个样式
  .wrapper >>> .swiper-container
    height: 100.18px
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    // 下面 4 行样式设置是为了防止图片下方的文字出现抖动现象
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.7% // 表示相对于宽度的 26.7%
    background: #eee
    .swiper-img
      width: 100%
    .swiper-pagination
      bottom: - .01rem
</style>
