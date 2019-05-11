<template>
  <router-link tag="div" :to="'/detail/' + routeId + '/rating'" class="rating border-bottom">
    <h2 class="rating-score">5.0</h2>
    <span class="rating-level">分 超赞</span>
    <span class="rating-num">109条评论</span>
    <span class="iconfont rating-icon">&#xe603;</span>
  </router-link>
</template>

<script>
export default {
  name: 'DetailRating',
  props: {
    routeId: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.rating
  position: relative
  height: .8rem
  line-height: .8rem
  font-size: 0
  padding: 0 .2rem
  color: red
  .rating-score
    display: inline-block
    font-size: .44rem
  .rating-level
    font-size: .28rem
  .rating-icon
    position: absolute
    top: 0
    right: 0
    padding: 0 .1rem
    color: #000
  .rating-num
    position: absolute
    top: .5rem
    right: .5rem
    margin-top: -.5rem
    font-size: .24rem
    color: #666
</style>
