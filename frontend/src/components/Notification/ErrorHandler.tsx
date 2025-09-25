import type { ErrorResponse } from '@types'
import { toast } from 'sonner'

export const handlerError = (error: ErrorResponse['error'] | Error) => {
  const title = error instanceof Error ? error.name : error.type
  toast.dismiss()
  toast.error(title, {
    description: error.message,
  })
}
