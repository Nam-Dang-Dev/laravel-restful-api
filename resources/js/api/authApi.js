import callApi from './apiCaller';

export const loginApi = data => {
  return callApi('login', 'POST', data);
};
export const registerApi = data => {
    console.log("data", data)
  return callApi('register', 'POST', data);
};