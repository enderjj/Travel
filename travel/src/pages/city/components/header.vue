// 城市页面顶部组件
<template>
  <div class="header">
    城市选择
    <!-- 返回图标 图标必须指定  class="iconfont" 否则不生效 -->
    <router-link to="/">
      <div class="iconfont back-icon">&#xe606;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl";

.header
  position: relative
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  font-size: .32rem
  color: #fff
  background: $bgcolor
  .iconfont
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    color: #fff
</style>
