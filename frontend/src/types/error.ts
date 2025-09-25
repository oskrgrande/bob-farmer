import type { AnyObject } from './index.js'

export type ErrorLevel = 'error' | 'warn' | 'info' | 'hidden'

export interface ErrorResponse {
  error: {
    message: string
    code: number
    type: string
    details?: AnyObject
    stack?: string[]
    level?: ErrorLevel
  }
}
