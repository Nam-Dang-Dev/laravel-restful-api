import Repository from './Repository'
const URL_GET_CUSTOMERS = '/customers'
const URL_CUSTOMER = '/customer'

export default {
    getCustomers(){
        return Repository.get(URL_GET_CUSTOMERS)
    },
    updateCustomer(payload){
        return Repository.put(`${URL_CUSTOMER}/${payload.id}`, payload)
    },
    deleteCustomer(payload){
        return Repository.delete(`${URL_CUSTOMER}/${payload}`)
    },
    createCustomer(payload){
        return Repository.post(`${URL_CUSTOMER}`, payload)
    },
}