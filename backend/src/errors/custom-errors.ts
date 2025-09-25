import { ZodError } from 'zod'
import { i18n } from '@locales'
import { APP_ERROR, HTTP_STATUS } from '@constants'
import type { ID, AnyObject, ErrorLevel } from '@types'
import { BaseError } from '@errors'

export class ModelNotFoundError extends BaseError {
  constructor(model: string, id?: ID, level: ErrorLevel = 'error') {
    const message = id
      ? i18n('errors.entityWithIdNotFound', model, id)
      : i18n('errors.entityNotFound', model)

    super(message, 'ModelNotFoundError', {}, level)

    this.errorCode = APP_ERROR.MODEL_NOT_FOUND
    this.httpError = HTTP_STATUS.NOT_FOUND
  }
}

export class NotImplementedError extends BaseError {
  constructor() {
    const message = i18n('errors.notImplemented')

    super(message, 'NotImplementedError', {})

    this.errorCode = APP_ERROR.NOT_IMPLEMENTED
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}

export class ForbiddenError extends BaseError {
  constructor() {
    const message = i18n('errors.forbidden')

    super(message, 'ForbiddenError', {})

    this.errorCode = APP_ERROR.FORBIDDEN
    this.httpError = HTTP_STATUS.FORBIDDEN
  }
}

export class MissingEnviromentVariablesError extends BaseError {
  constructor(variables: string[]) {
    const _message = i18n('errors.missingEnvVariables')

    super(_message, 'MissingEnviromentVariablesError', { variables })

    this.errorCode = APP_ERROR.MISSING_ENV_VARIABLES
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}

export class ValidationError extends BaseError {
  constructor(error?: ZodError | AnyObject) {
    const _message = i18n('errors.invalidPayload')
    const details = error instanceof ZodError ? { errors: error.errors } : error

    super(_message, 'ValidationError', details)

    this.errorCode = APP_ERROR.INVALID_PAYLOAD
    this.httpError = HTTP_STATUS.UNPROCESSABLE_ENTITY
  }
}

export class UnsupportedContentTypeError extends BaseError {
  constructor(error?: ZodError | AnyObject) {
    const _message = i18n('errors.invalidPayload')
    const details = error instanceof ZodError ? { errors: error.errors } : error

    super(_message, 'UnsupportedContentTypeError', details)

    this.errorCode = APP_ERROR.UNSUPPORTED_CONTENT_TYPE
    this.httpError = HTTP_STATUS.UNSUPPORTED_CONTENT_TYPE
  }
}

export class ExpectedObjectError extends ValidationError {
  constructor(field: string) {
    super({ field, reason: i18n('errors.expectedObject') })
  }
}

export class ExpectedArrayError extends ValidationError {
  constructor(field: string) {
    super({ field, reason: i18n('errors.expectedArray') })
  }
}
