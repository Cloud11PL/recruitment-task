import axios from 'axios'
import NProgress from 'nprogress'

const API_URL = 'http://www.mocky.io/v2/5cd2c9be310000bc29339a2c'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getItems () {
    return apiClient.get()
  }
}
