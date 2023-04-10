import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/'
})

// api.interceptors.request.use((config) => {    
//   console.log('DADOS ENVIADOS:', config.data);

//   return config
// }, (error) => {
//   return Promise.reject(error);
// })

api.interceptors.response.use((response) => {
  console.log('teste');
  
  
  return response
}, (error) => {
  console.log('INTERCEPTOR RESPONSE:', error)
  return Promise.reject(error);
})

export { api }