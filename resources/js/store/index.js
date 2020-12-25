import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    storage: localStorage,
    reducer: (state) =>({
        auth: {
            token: state.auth.token
        }
    })
})

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [vuexPersist.plugin]
})