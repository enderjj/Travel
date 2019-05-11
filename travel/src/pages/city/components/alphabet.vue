// 城市选择页面右侧字母列表组件
<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
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
      touchMove: false, // 标识是否进行了触摸移动事件
      startY: 0, // 字母 A 的 offsetTop 距离，初始为 0
      timer: null // 定时器，用于控制函数节流
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
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 字母 A 的 offsetTop 距离
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
        if (this.timer) { // 如果定时器已存在，就清除定时器
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 触摸移动的 Y 轴的距离
          const index = Math.floor((touchY - this.startY) / 16) // 当前触摸到的字母索引

          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // 向父组件 city 传递数据，然后再由父组件将数据传递给兄弟组件 list
          }
        }, 16)
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
    padding-left: .5rem
    .item
      line-height: .32rem
      font-size: .26rem
      text-align: center
      color: $bgcolor
</style>
