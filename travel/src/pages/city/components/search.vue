// 城市页面搜索框组件
<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl";

  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgcolor
    font-size: .28rem
    .search-input
      // 设置 box-sizing: border-box 解决 padding 带来的输入框右移问题
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      text-align: center
      color: #666
      border-radius: .06rem
    // 去掉 input 框输入时的默认边框
    input:focus
      outline: none
</style>
