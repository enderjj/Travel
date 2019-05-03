export default {
  changeCity (state, city) { // mutations 事件接收两个参数，一个是 state 对象，一个是传入的参数
    state.city = city // 改变当前的城市

    try {
      localStorage.city = city // 每次改变城市时，让 localStorage 中的城市也更改为当前选择的值
    } catch (e) {
      console.log(e)
    }
  }
}
