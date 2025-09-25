import { axiosInstance } from '@/constants/axios.js'

export const purchase = async (data: FormData) => {
  return await axiosInstance('corn', {
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response)
    .then(data => data)
}
