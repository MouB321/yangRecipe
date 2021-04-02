import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端布局适配
import 'lib-flexible'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
