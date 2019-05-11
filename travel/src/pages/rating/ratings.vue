<template>
  <div>
    <router-link tag="div" class="rating-back" :to="'/detail/' + routeId">
      <span class="iconfont rating-back-icon">&#xe606;</span>
    </router-link>
    <div class="rating-title">评论</div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  data () {
    return {
      routeId: ''
    }
  },
  activated () {
    this.routeId = this.$route.params.id + '' // 保存当前动态路由参数
  }
}
</script>

<style lang="stylus" scoped>
.rating-back
  position: relative
  width: .8rem
  height: .8rem
  line-height: .8rem
  background: rgba(0, 0, 0, 0.6)
  border-radius: 50%
  color: #fff
  text-align: center
  .rating-back-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    color: #fff
.rating-title
  position: absolute
  top: 0
  left: 1rem
  right: 0
  text-align: center
</style>
