import axios from 'axios'
import { environment } from '@/constants/environment.js'
import { RequestTimeout } from '@constants'

const url
  = import.meta.env.MODE === 'development' ? '/api' : environment.apiUrl

export const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: false,
  timeout: RequestTimeout.General,
  headers: {
    'Content-Type': 'application/json',
  },
})
