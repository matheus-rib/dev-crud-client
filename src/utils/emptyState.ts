import { GenderType } from './enums'
import { ApiError, Developer, PaginatedList } from './types'

export const emptyDeveloper: Developer = {
  id: 0,
  createdAt: '',
  updatedAt: '',
  name: '',
  dateOfBirth: '',
  age: 0,
  gender: GenderType.M,
  hobby: '',
}

export const emptyDevelopersList: PaginatedList<Developer> = {
  count: 0,
  page: 1,
  pages: 1,
  rows: [],
}

export const emptyApiError: ApiError = {
  code: '',
  message: '',
  additionalProperties: null,
}

export const emptyDevelopersFilter = {
  id: '',
  name: '',
  gender: '',
  hobby: '',
  dateOfBirth: '',
  age: '',
}
