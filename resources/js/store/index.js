import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer'
import auth from './modules/auth'

import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

const vuexPersistLocal = new VuexPersist({
    storage: localStorage,
    reducer: (state) => ({
      customer: {
        customers: state.customer.customers
      },
      auth: {
        auth: state.auth.auth
      }
    })
})

export default new Vuex.Store({
    modules: {
        customer,
        auth
    },
    plugins: [vuexPersistLocal.plugin],
    state,
    mutations
})