// 城市页面搜索框组件
<template>
  <div class="search">
    <input
      v-model="keyword"
      class="search-input"
      type="text"
      placeholder="请输入城市名或拼音"
    >
    <div class="search-result" ref="result" v-show="hasKeyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, index) of result"
          :key="index"
          @click="handleCityClick(item)"
        >{{item}}</li>
        <li class="search-item border-bottom" v-show="hasNoResult">未搜索到相关数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex' // vuex 对应的 map 属性可以将 vuex 中的数据映射到当前组件

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '', // 搜索关键词
      result: [], // 搜索结果
      timer: null // 定时器，控制函数节流
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.result)
  },
  computed: {
    hasNoResult () { // 如果搜索结果为空，就显示 “未搜到到相关数据”
      return !this.result.length
    },
    hasKeyword () { // 如果没有输入关键词，下方的结果区域就不显示
      return this.keyword
    }
  },
  watch: {
    keyword () { // 监听 keyword 的变化
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) { // 如果未输入关键字，重置列表为空
        this.result = []
        return
      }
      this.timer = setTimeout(() => {
        const filter = [] // 查询的结果数组
        for (let i in this.cities) {
          this.cities[i].forEach((val) => { // 每个值去匹配关键词，如果匹配到就放入结果数组
            // 如果拼音和名称有一个能匹配到关键词，就将名称推入结果数组中
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              filter.push(val.name)
            }
          })
        }
        this.result = filter
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) // 触发 vuex 中的 actions 事件
      // this.$store.commit('changeCity', city) // 触发 vuex 中的 mutations 事件
      this.keyword = ''
      this.changeCity(city) // 直接调用 map 过来的方法
      this.$router.push('/') // 选择城市后跳转到首页，改变当前路由为首页路由
    },
    ...mapMutations(['changeCity'])
  }
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
    .search-result
      position: absolute
      overflow: hidden
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      background: #eee
      z-index: 1
      .search-item
        line-height: .6rem
        padding-left: .2rem
        color: #666
        background: #fff
</style>
