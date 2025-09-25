import type { AnyObject } from '@types'

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
