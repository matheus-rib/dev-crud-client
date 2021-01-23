import { GenderType } from './enums'

export type Developer = {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  gender: GenderType
  age: number
  hobby: string
  dateOfBirth: string
}

export type ApiError = {
  code: string
  message: string
  additionalProperties?: any
}

export type PaginatedList<T> = {
  page: number
  pages: number
  count: number
  rows: Array<T>
}

export type ListParams = {
  page?: number
  take?: number
  q?: any
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
