import axios from 'axios';
import store from '../store'
const API_URL = 'http://localhost:2000/api/v2/';

function getToken() {
    console.log("store", store.state.auth.token)
    return store.state.auth.token
}

export default function callApi(endpoint, method = 'GET', body) {
    const token = getToken() || null
    return axios({
        method: method,
        url: `${API_URL}${endpoint}`,
        data: body,
        headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        },
    })
    .then(function(response) {
        return response;
    })
    .catch(err => {
        throw err.response.data;
    });
}