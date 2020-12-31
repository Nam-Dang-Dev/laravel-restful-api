require('./bootstrap')
window.Vue = require('vue')
import 'core-js/stable'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import TheContainer from './containers/TheContainer.vue'
import NoneLayout from './containers/NoneLayout.vue'
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.router = Routes
Vue.use(VueRouter)
Vue.prototype.$log = console.log.bind(console)
Vue.component('default-layout', TheContainer)
Vue.component('none-layout', NoneLayout)

new Vue({
  el: '#app',
  router: Routes,
  store,
  icons,
  render: h => h(App),
})
