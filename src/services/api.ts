import axios from 'axios'
import qs from 'qs'
import { errorHandlerInterceptor } from './interceptors'
import errors from './errors'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  paramsSerializer: qs.stringify,
})

api.interceptors.response.use(
  response => response.data,
  errorHandlerInterceptor(errors),
)

export default api
