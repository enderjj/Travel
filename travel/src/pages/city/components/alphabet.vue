// 城市选择页面右侧字母列表组件
<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchMove: false // 标识是否进行了触摸移动事件
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    // 字母点击事件
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText) // 向父组件 city 传递数据，然后再由父组件将数据传递给兄弟组件 list
    },
    // 字母开始触摸事件
    handleTouchStart () {
      this.touchMove = true // 标识触摸事件开始
    },
    // 触摸移动事件
    handleTouchMove (e) {
      if (this.touchMove) {
        const startY = this.$refs['A'][0].offsetTop // 字母 A 距离顶部的距离
        const touchY = e.touches[0].clientY - 79 // 触摸移动的 Y 轴的距离
        const index = Math.floor((touchY - startY) / 16) // 当前触摸到的字母索引

        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]) // 向父组件 city 传递数据，然后再由父组件将数据传递给兄弟组件 list
        }
      }
    },
    // 触摸结束事件
    handleTouchEnd () {
      this.touchMove = false // 标识触摸事件结束
    }
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
      line-height: .32rem
      font-size: .26rem
      text-align: center
      color: $bgcolor
</style>
