// 推荐部分组件
<template>
  <div>
    <div class="title">热销榜单</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <input class="item-button" type="button" value="查看详情">
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend', // 组件名称
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
          title: '西溪国家湿地公园',
          desc: '浪漫的湿地公园，风景美不胜收'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
          title: '西溪国家湿地公园',
          desc: '浪漫的湿地公园，风景美不胜收'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
          title: '西溪国家湿地公园',
          desc: '浪漫的湿地公园，风景美不胜收'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl";

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
        line-height: .44rem
        background: #ff9300
        border-radius: .06rem
        padding: 0 .1rem
        color: #fff
        font-size: .26rem
</style>
