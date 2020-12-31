// import AuthRepository from '../../repositories/AuthRepository'
import {registerApi} from '../../api/authApi'
const state = {
    auth: {},
    error: null
}

const getters = {

}

const actions = {
    async register ({commit}, user) {
        console.log("dataaaa", user)
        await registerApi(user)
            .then(response => {
                console.log("res register", response)
                commit('SET_AUTH', response.data)
            })
            .catch(error => {
                console.log("error register", error)
                commit('ERROR', error)
            })
    }
}

const mutations = {
    INIT(state) {
        state.auth = {},
        state.error = null
    },
    ERROR(state, error) {
        state.error = error.data
    },
    SET_AUTH(state, data){
        state.auth = data.user
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}