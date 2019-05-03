// 城市选择页面右侧字母列表组件
<template>
  <ul class="list">
    <li class="item" v-for="(alpha,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl";

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      // height: .4rem
      line-height: .32rem
      font-size: .26rem
      text-align: center
      color: $bgcolor
</style>
