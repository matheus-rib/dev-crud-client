/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-promise-reject-errors */
import { ApiError } from '@/utils/types'
import { AxiosError } from 'axios'

export const errorHandlerInterceptor = (errors: any = {}) => {
  return (error: AxiosError): Promise<ApiError> => {
    if (error?.response?.status === 401) window.location.replace('/login')
    if (error.message === 'Network Error') {
      return Promise.reject({
        code: 'networkError',
        message: 'Falha na conexão',
      })
    }
    const e = {
      code: error.response?.data?.code,
      message: errors[error.response?.data?.code],
    }

    return Promise.reject(e)
  }
}
