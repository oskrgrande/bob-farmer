import { axiosInstance } from "@/constants/axios";
import { useMutation } from '@tanstack/react-query'

export const usePurchase = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post('/corn')
      console.log("🚀 ~ usePurchase ~ response:", response)
      return response
    },
  })
}
