import { ZodError } from 'zod'
import { BaseError, ValidationError } from '@errors'
import type { AnyObject, ErrorResponse } from '@types'
import { APP_ERROR, environment, HTTP_STATUS } from '@constants'

export function buildError(error: Error): [ErrorResponse, HTTP_STATUS] {
  let status = HTTP_STATUS.INTERNAL_SERVER_ERROR
  const _response: ErrorResponse = {
    error: {
      message: error.message,
      code: APP_ERROR.UNKNOWN_ERROR,
      type: error.name,
    },
  }

  if (error instanceof BaseError) {
    status = error.httpError
    _response.error.code = error.errorCode
    _response.error.details = error.details
  } else if (error instanceof TypeError) {
    status = HTTP_STATUS.INTERNAL_SERVER_ERROR
    _response.error.code = APP_ERROR.UNKNOWN_ERROR
    _response.error.details = error.cause as AnyObject
  } else if (error instanceof ValidationError || error instanceof ZodError) {
    status = HTTP_STATUS.UNPROCESSABLE_ENTITY
    _response.error.code = APP_ERROR.INVALID_PAYLOAD
    _response.error.details = error instanceof ZodError ? { errors: error.errors } : error.details
  }

  if (environment.debug) _response.error.stack = error.stack?.split('\n')

  return [_response, status]
}
