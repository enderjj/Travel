// 推荐部分组件
<template>
  <div>
    <div class="title">热销榜单</div>
    <ul>
      <!-- 直接用 router-link 标签代替 li 标签，通过设置 tag 参数将 router-link 变成 li 标签 -->
      <router-link
        tag="li"
        class="item after-border-1px"
        v-for="item of rlist"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <input class="item-button" type="button" value="查看详情"> -->
            <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend', // 组件名称
  props: {
    rlist: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"

  .title
    // margin-top: .2rem
    line-height: .8rem
    background: #eee
    font-size: .32rem
    text-indent: .2rem
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    after-border-1px()
    .item-img
      width: 1.6rem
      height: 1.6rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        // height: .54rem
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        font-size: .26rem
        color: #ccc
        ellipsis()
      .item-button
        display: block
        line-height: .44rem
        background: #ff9300
        border-radius: .06rem
        padding: 0 .1rem
        color: #fff
        font-size: .24rem
        border: none
        margin-top: .14rem
</style>
