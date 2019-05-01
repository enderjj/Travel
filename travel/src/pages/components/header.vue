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
    <div class="header-right">
      北京
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
      width: 1.24rem
      font-size: .2rem
      text-align: center
      .arrow-icon
        font-size: .2rem
</style>
