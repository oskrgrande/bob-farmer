import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { handlerError } from '@/components/Notification/ErrorHandler.tsx'
import type { ErrorResponse } from '@types'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const { response } = error as AxiosError
      const _error = response?.data as ErrorResponse | undefined

      handlerError(_error?.error ?? error)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const { response } = error as AxiosError
      const _error = response?.data as ErrorResponse | undefined

      handlerError(_error?.error ?? error)
    },
  }),
})
