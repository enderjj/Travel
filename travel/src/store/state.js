let defaultCity = '北京'

try {
  if (localStorage.city) { // 如果本地 localStorage 存在，优先使用 localStorage 中的内容
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity
}
