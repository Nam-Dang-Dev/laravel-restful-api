import Repository from './Repository'
const REGISTER = '/register'

export default {
    register(payload){
        return Repository.post(REGISTER, payload)
    },
}