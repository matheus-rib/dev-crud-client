import developersServices from '@/services/developers'
import {
  emptyApiError,
  emptyDeveloper,
  emptyDevelopersList,
} from '@/utils/emptyState'
import { ApiError, Developer, PaginatedList } from '@/utils/types'
import { useCallback, useState } from 'react'

type Developers = {
  developersList: PaginatedList<Developer>
  currentDeveloper: Developer
  error: ApiError
  fetchDevelopersList: CallableFunction
  fetchCurrentDeveloper: CallableFunction
  createDeveloper: CallableFunction
  updateDeveloper: CallableFunction
  destroyDeveloper: CallableFunction
}

export default function useDevelopers(): Developers {
  const [developersList, setDevelopersList] = useState(emptyDevelopersList)
  const [currentDeveloper, setCurrentDeveloper] = useState(emptyDeveloper)
  const [error, setError] = useState(emptyApiError)

  const fetchDevelopersList = useCallback(async params => {
    try {
      const data = await developersServices.list(params)
      setDevelopersList(data)
    } catch (e) {
      setError(e)
    }
  }, [])

  const fetchCurrentDeveloper = useCallback(async params => {
    try {
      const data = await developersServices.show(params)
      setCurrentDeveloper(data)
    } catch (e) {
      setError(e)
    }
  }, [])

  const createDeveloper = useCallback(async params => {
    try {
      const data = await developersServices.create(params)
      setDevelopersList({
        ...developersList,
        rows: [...developersList.rows, { ...data }],
      })
    } catch (e) {
      setError(e)
    }
  }, [])

  const updateDeveloper = useCallback(async params => {
    try {
      const data = await developersServices.update(params)
      setCurrentDeveloper(data)
    } catch (e) {
      setError(e)
    }
  }, [])

  const destroyDeveloper = useCallback(async params => {
    try {
      await developersServices.destroy(params)
      setCurrentDeveloper(emptyDeveloper)
    } catch (e) {
      setError(e)
    }
  }, [])

  return {
    developersList,
    currentDeveloper,
    fetchDevelopersList,
    error,
    fetchCurrentDeveloper,
    createDeveloper,
    updateDeveloper,
    destroyDeveloper,
  }
}
