import axios from 'axios'
import store from '../store'

const baseURL = 'http://localhost:2000/api/v2/'
console.log("url", baseURL)
const axiosRequest = axios.create({
  baseURL
})

axiosRequest.interceptors.request.use(
    config => {
    //   let token = getAccessToken()
        let token = "sdf"
        let csrfToken = document.head.querySelector('meta[name="csrf-token"]')
        config.headers = {
            'Authorization': `Bearer ${token}`,
            'X-From': window.location.href,
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
            'X-CSRF-TOKEN': csrfToken.content
        }
  
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  axiosRequest.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log("error", error)
    return Promise.reject(error)
  })

  export default axiosRequest