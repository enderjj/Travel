<template>
  <div id="app">
    <!-- keep-alive 表示一个路由被加载后就将其放在内存中，下次再使用时只需要从内存中加载，不需要重新发送 ajax 请求 -->
    <!-- exclude 参数表示不缓存指定组件 -->
    <!-- <keep-alive exclude="Detail"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
