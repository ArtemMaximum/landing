import axios from 'axios'
// import { checkExpires, manageHeaders } from 'lib/api-utils'

const LocalStore = {}

const api = axios.create({ baseURL: '/store/' })

LocalStore.request = (config) => api.request(config)

// eslint-disable-next-line semi-style
;['delete', 'get', 'head'].forEach((method) => {
  LocalStore[method] = (url, config) => LocalStore.request({ ...config, method, url })
})

// eslint-disable-next-line semi-style
;['post', 'put', 'patch'].forEach((method) => {
  LocalStore[method] = (url, data, config) => LocalStore.request({ ...config, method, url, data })
})

export default LocalStore