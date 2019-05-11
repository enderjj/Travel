// 公共画廊组件
<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides 轮播页面 -->
        <swiper-slide v-for="(item, index) of imags" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls 轮播图其他选项 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imags: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 分页器类型：分数形式
        // 下面两个属性解决 swiper 由不显示到显示状态宽度计算不正确的问题
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('click') // 触发父组件的 click 事件
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  height 7.5rem
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  z-index 99
  .wrapper
    width 100%
    // overflow: hidden
    height 0
    padding-bottom 100%
    .gallary-img
      width 100%
      height 100%
  .swiper-pagination
    width 100%
    color #fff
    bottom -1rem
    font-size 0.32rem
</style>
