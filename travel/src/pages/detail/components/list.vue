<template>
  <ul>
    <li v-for="(item, index) of list" :key="index">
      <p class="item-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </p>
      <!-- 使用递归组件显示层级内容 组件调用自身组件 -->
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-icon
  display: inline-block
  position: relative
  width: .36rem
  height: .36rem
  top: .08rem
  left: .1rem
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right: .1rem
  background-size: .4rem 3rem
.item-title
  line-height: .8rem
  font-size: .32rem
  padding-left: .2rem
.item-children
  padding-left: .2rem
</style>
