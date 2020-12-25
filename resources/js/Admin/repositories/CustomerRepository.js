import Repository from './Repository'
const URL_GET_CUSTOMERS = '/customers'
export default {
    getCustomers(){
        return Repository.get(URL_GET_CUSTOMERS)
    }
}