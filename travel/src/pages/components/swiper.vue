<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides 轮播页面 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e5104d77fbfdb522bd4fe4f0451e517f.jpg_750x200_7d44f64b.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 下面两行是为了消除 scoped 的影响，设置轮播图圆点的样式，表示 .wrapper 下面的所有 .swiper-pagination-bullet-active 元素都设置这个样式
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
</style>
