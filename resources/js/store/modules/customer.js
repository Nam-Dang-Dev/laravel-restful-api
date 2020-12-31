import CustomerRepository from '../../repositories/CustomerRepository'
const _ = require("lodash");  
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
                commit('SET_CUSTOMERS', response.data)
            })
            .catch(error => {
                commit('SET_CUSTOMERS_ERROR', response)
            })
    },
    async updateCustomer({ commit }, customer){
        await CustomerRepository.updateCustomer(customer)
            .then(response => {
                let customers = _.keyBy(this.state.customer.customers, 'id')
                customers[response.data.id] = response.data
                commit('SET_CUSTOMERS', _.toArray(customers))
            })
            .catch(error => {
                commit('UPDATE_CUSTOMER_ERROR')
            })
    },
    async deleteCustomer({ commit }, id){
        await CustomerRepository.deleteCustomer(id)
            .then(response => {
                let customers = this.state.customer.customers
                let result = customers.filter(customer => {
                    return customer.id !== id
                })
                commit('SET_CUSTOMERS', _.toArray(result))
            })
            .catch(error => {
                console.log("delete customer error", error)
                commit('UPDATE_CUSTOMER_ERROR')
            })
    },
    async createCustomer({ commit }, customer){
        await CustomerRepository.createCustomer(customer)
            .then(response => {
                let customers = this.state.customer.customers
                customers.push(response.data)
                commit('SET_CUSTOMERS', customers)
            })
            .catch(error => {
                console.log("error create", error)
                commit('UPDATE_CUSTOMER_ERROR')
            })
    },
}

const mutations = {
    INIT(state) {
        state.customers = [],
        state.error = null
    },
    SET_CUSTOMERS(state, data){
        state.customers = data
    },
    SET_CUSTOMERS_ERROR(state, error){
        state.error = error
    },
    UPDATE_CUSTOMER_ERROR(state, error){
        state.error = error
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}