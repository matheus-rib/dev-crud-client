import {
  Developer,
  ListParams,
  PaginatedList,
  DeepPartial,
} from '@/utils/types'
import api from './api'

export default {
  list(params: ListParams): Promise<PaginatedList<Developer>> {
    return api.get('/developers', { params })
  },

  show(developerId: number): Promise<Developer> {
    return api.get(`/developers/${developerId}`)
  },

  create(body: DeepPartial<Developer>): Promise<Developer> {
    return api.post('/developers', body)
  },

  update(body: DeepPartial<Developer>): Promise<Developer> {
    return api.put(`/developers/${body.id}`, body)
  },

  destroy(developerId: number): Promise<void> {
    return api.delete(`/developers/${developerId}`)
  },
}
