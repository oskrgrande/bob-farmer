import { purchase } from '@/api/corn/index.ts'
import { queryClient } from '@/constants/tanstack.js'
import { useMutation } from '@tanstack/react-query'


export const usePurchase = () => {
  return useMutation({
    mutationFn: (data: FormData) => purchase(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
      return data
    },
  })
}
