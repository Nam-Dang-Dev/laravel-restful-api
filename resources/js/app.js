require('./bootstrap');
import 'core-js/stable'
import Vue from 'vue'
import App from './Admin/App.vue'
import router from './Admin/router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './Admin/assets/icons/icons.js'
import store from './Admin/store'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
