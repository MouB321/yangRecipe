import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端布局适配
import 'lib-flexible'

// vue中的图片懒加载
import {lazyload} from "vant";
Vue.use(lazyload, {
  lazyComponent: true,
});

// 引入common.css样式
import "../static/css/common.css"

Vue.config.productionTip = false

// 引入axios和api
import axios from "../src/config/axios";
Vue.prototype.$http = axios;
import api from "../src/server/api";
Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
