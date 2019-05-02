// 城市页面组件
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>
</style>
