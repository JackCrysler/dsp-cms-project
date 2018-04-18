import Vue from 'vue'
import App from './App'
import $http from './utils/request'
import router from './router'
import store from './store/store'
import './utils/utils'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
