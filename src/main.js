// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './firebase'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
Vue.config.productionTip = true
Vue.use(VueFire)
/* eslint-disable no-new */
new Vue({
  el: '#content',
  store,
  router,
  template: '<App/>',
  components: { App }
})
