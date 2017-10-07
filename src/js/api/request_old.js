/*
This file has code for inititing the /rquest , /authorize
to get 'code' by redirection happeing on /request
and /authorize to generate access_token

*/


import axios from 'axios'
const consumer_key = '70528-d4c930d82ac9e088637b73e7'
const redirect_uri = 'http://localhost:3000/home'
const code='c9476674-7d33-6acd-0a77-d8a5e0'

const getContentConfig = Object.freeze({
  url: '/get',
  baseURL: 'https://getpocket.com/v3',
  method: 'post',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Accept': 'application/json',

  },
  data:{
    consumer_key,
    "access_token": localStorage.getItem('user_token') ? localStorage.getItem('user_token') : null,
    "detailType":"complete",
  }


})

const getItemsConfig = {
  url: '/items',
  baseURL: 'http://localhost:8000',
  method: 'get',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Accept': 'application/json',
  }
}

const pocketTokenConfig = Object.freeze({
  url: '/request',
  baseURL: 'http://localhost:8000',
  method: 'get',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Accept': 'application/json',
  }
  // },
  // data: {
  //   "consumer_key":"170528-d4c930d82ac9e088637b73e7",
  //   "redirect_uri":"http://localhost:3000/home"
  // }
})

export const getPocketAuthUrl = () => {
  return `https://getpocket.com/auth/authorize?request_token=70528-d4c930d82ac9e088637b73e7&redirect_uri=${redirect_uri}`
}


 const request = {
  getUserContent: () => {
    return axios.post(getContentConfig)
  },
  getAuth: () => {
    return axios(pocketTokenConfig)
  },
  getItems: () => {
    return axios(getItemsConfig)
  },
  authorize: () => {
    return axios({
      url: '/authorize',
      baseURL: 'http://localhost:8000',
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Accept': 'text/plain',
      }
    })
  }

}
 export default request;
