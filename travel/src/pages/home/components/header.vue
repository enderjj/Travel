// 顶部搜索栏组件
<template>
  <div class="header">
    <div class="header-left">
      <!-- 图标必须指定  class="iconfont" 否则不生效 -->
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-center">
      <span class="iconfont search-icon">&#xe611;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{currentCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex 对应的 map 属性可以将 vuex 中的数据映射到当前组件

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

// scoped 表示样式只对当前组件有效
<style lang="stylus" scoped>
@import '~styles/variable.styl'; // variable.styl 文件中存放所有全局共用的样式

  .header
    display: flex
    line-height: .86rem
    background-color: $bgcolor
    color: #fff
    .header-left
      float: left
      width: .64rem
      text-align: center
    .header-center
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      background-color: #fff
      font-size: .2rem
      color: #ccc
      .search-icon
        font-size: .2rem
    .header-right
      float: right
      min-width: 1.04rem // 防止选择城市名称太长时，样式不正确
      padding: 0 .1rem
      font-size: .28rem
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
</style>
