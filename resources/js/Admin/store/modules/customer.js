import CustomerRepository from '../../repositories/CustomerRepository'
const state = {
    customers: [],
    error: null
}

const getters = {

}

const actions = {
    async getCustomers({ commit }){
        await CustomerRepository.getCustomers()
            .then(response => {
                commit('GET_CUSTOMER', response.data)
            })
            .catch(error => {
                console.log("GET CUSTOMER ERROR", error)
                commit('GET_CUSTOMER_ERROR', response.data)
            })
        console.log("action")
    }
}

const mutations = {
    INIT(state) {
        state.customers = [],
        state.error = null
    },
    GET_CUSTOMER(state, data){
        state.customers = data
    },
    GET_CUSTOMER_ERROR(state, error){
        state.customers = error
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}