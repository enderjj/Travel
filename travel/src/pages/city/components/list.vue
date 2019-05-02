// 城市列表组件
<template>
  <div class="list" ref="list">
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="city-list">
        <div class="city-wrapper">
          <div class="city">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title  border-topbottom">热门城市</div>
      <div class="city-list">
        <div class="city-wrapper">
          <div class="city">北京</div>
        </div>
         <div class="city-wrapper">
          <div class="city">北京</div>
        </div>
        <div class="city-wrapper">
          <div class="city">北京</div>
        </div>
        <div class="city-wrapper">
          <div class="city">北京</div>
        </div><div class="city-wrapper">
          <div class="city">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title  border-topbottom">A</div>
      <div class="item-list">
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
      </div>
      <div class="title  border-topbottom">A</div>
      <div class="item-list">
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
      </div>
      <div class="title  border-topbottom">A</div>
      <div class="item-list">
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
        <div class="city-item border-bottom">阿拉尔</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  // 在 mounted 生命周期中使用 scroll 功能
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>

<style lang="stylus" scoped>
  .list
    // 下面几行布局去除浏览器自带的滚动
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .area
      color: #222
      .border-topbottom
        &:before
          color: #ccc
        &:after
          color: #ccc
      .border-bottom
        &:before
          color: #ccc
      .title
        height: .64rem
        line-height: .64rem
        font-size: .26rem
        background: #eee
        padding-left: .3rem
      .city-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        font-size: .32rem
        .city-wrapper
          float: left
          width: 33.33%
          .city
            height: .4rem
            line-height: .4rem
            margin: .1rem
            paddind: .1rem 0
            border: .02rem solid #ccc
            border-radius: .06rem
            text-align: center
      .item-list
        font-size: .32rem
        .city-item
          height: .64rem
          line-height: .64rem
          padding-left: .2rem
</style>
