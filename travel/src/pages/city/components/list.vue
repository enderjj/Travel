// 城市列表组件
<template>
  <div class="list" ref="list">
    <div>
      <div class="area">
        <p class="title border-topbottom">当前城市</p>
        <div class="city-list">
          <div class="city-wrapper">
            <div class="city">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <p class="title  border-topbottom">热门城市</p>
        <div class="city-list">
          <div
            class="city-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="city">{{item.name}}</div>
          </div>
        </div>
      </div>
      <ul class="area">
        <li v-for="(items,key) of cities" :key="key" :ref="key">
          <p class="title  border-topbottom">{{key}}</p>
          <ul class="item-list">
            <li
              class="city-item border-bottom"
              v-for="cityItem of items"
              :key="cityItem.id"
              @click="handleCityClick(cityItem.name)"
            >{{cityItem.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex' // vuex 对应的 map 属性可以将 vuex 中的数据映射到当前组件

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String // 需要跳转到的城市列表所在的字母
  },
  // 在 mounted 生命周期中使用 scroll 功能
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () { // 监听 letter 属性的变化
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) // 触发 vuex 中的 actions 事件
      // this.$store.commit('changeCity', city) // 触发 vuex 中的 mutations 事件
      this.changeCity(city) // 直接调用 map 过来的方法
      this.$router.push('/') // 选择城市后跳转到首页，改变当前路由为首页路由
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  .list
    // 下面几行布局去除浏览器自带的滚动
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .area
      color: #222
      .border-topbottom
        &:before
          color: #ccc
        &:after
          color: #ccc
      .border-bottom
        &:before
          color: #ccc
      .title
        height: .64rem
        line-height: .64rem
        font-size: .26rem
        background: #eee
        padding-left: .3rem
      .city-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        font-size: .32rem
        .city-wrapper
          float: left
          width: 33.33%
          .city
            height: .44rem
            line-height: .44rem
            margin: .1rem
            paddind: .1rem 0
            border: .02rem solid #ccc
            border-radius: .06rem
            text-align: center
      .item-list
        font-size: .32rem
        .city-item
          height: .64rem
          line-height: .64rem
          padding-left: .2rem
</style>
