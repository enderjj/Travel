// 城市页面组件
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'

import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [], // 热门城市
      cities: {}, // 按字母表顺序排列的城市列表
      letter: '' // 当前列表所在的字母
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json') // 发送 get 请求获取数据
        .then(this.getCityInfoSucc)
    },

    getCityInfoSucc (res) { // 发送 get 请求成功后执行的函数
      res = res.data
      if (res.ret && res.data) {
        const data = res.data

        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  // mounted 时利用 ajax 获取后端数据
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
