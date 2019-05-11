<template>
  <div>
    <router-link class="header-back" to="/" v-show="showBack">
      <div class="iconfont header-back-icon">&#xe606;</div>
    </router-link>
    <div class="header-fixed" :style="styleHeader" v-show="!showBack">
      景点详情
      <!-- 返回图标 图标必须指定  class="iconfont" 否则不生效 -->
      <router-link to="/">
        <div class="iconfont header-fixed-icon">&#xe606;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showBack: true, // 是否展示返回的箭头，默认展示
      styleHeader: { // 绑定的样式
        opacity: 0
      }
    }
  },
  methods: {
    handleDetailScroll () { // 详情页面滚动事件的事件处理程序
      const top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop // 滚动的距离，兼容手机
      if (top > 2) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity // 让 opacity 最大为 1
        this.styleHeader = {
          opacity: opacity
        }
        this.showBack = false
      } else {
        this.showBack = true
      }
    }
  },
  activated () { // 进入页面的时候调用，使得页面展示的时候绑定监听事件
    window.addEventListener('scroll', this.handleDetailScroll)
    this.handleDetailScroll() // 进入页面的时候，手动调用函数让 header 不显示，解决滚动页面带来的问题
    // document.documentElement.scrollTop = 0 // 进入页面时，初始化页面滚动高度为 0
  },
  deactivated () { // 离开页面的时候调用，解绑全局对象的事件
    window.removeEventListener('scroll', this.handleDetailScroll)
    // document.documentElement.scrollTop = 0 // 离开页面时，设置页面高度为初始化高度 0
    // this.handleDetailScroll() // 调用绑定事件，更改 showBack 值，防止再次进入时，showBack 状态还是之前离开时的状态
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl";

.header-back
  position: absolute
  top: .1rem
  left: .1rem
  width: .72rem
  height: .72rem
  line-height: .72rem
  color: #fff
  text-align: center
  background-color: rgba(0, 0, 0, 0.5)
  border-radius: .5rem
  .header-back-icon
    font-size: .36rem
.header-fixed
  z-index: 10
  position: fixed
  top: 0
  left: 0
  right: 0
  overflow: hidden;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .32rem
  color: #fff
  background: $bgcolor
  .header-fixed-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    color: #fff
</style>
