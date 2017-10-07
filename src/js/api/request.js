import axios from 'axios'
// visit request_old when implementing access_token logic in client


const getItemsConfig = {
  url: '/items',
  baseURL: 'http://localhost:8000',
  method: 'get',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Accept': 'application/json',
  }
}


 const request = {
  getItems: () => {
    return axios(getItemsConfig)
  },
}
 export default request;
