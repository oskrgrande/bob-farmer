import { ZodError } from 'zod'
import { i18n } from '@locales'
import { APP_ERROR, HTTP_STATUS } from '@constants'
import type { ID, AnyObject, ErrorLevel, ErrorResponse } from '@types'
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

export class UnauthorizedError extends BaseError {
  constructor(message?: string) {
    const _message = message ?? i18n('errors.unauthorized')

    super(_message, 'UnauthorizedError', {})

    this.errorCode = APP_ERROR.UNAUTHORIZED
    this.httpError = HTTP_STATUS.UNAUTHORIZED
  }
}

export class UploadFileError extends BaseError {
  constructor() {
    const message = i18n('errors.upload.file')
    super(message, 'UploadFileError', {})
    this.errorCode = APP_ERROR.FILE_UPLOAD_ERROR
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}

export class NotOwnerError extends BaseError {
  constructor(model: string) {
    const message = i18n('errors.notOwner', model)

    super(message, 'NotOwnerError', {})

    this.errorCode = APP_ERROR.FORBIDDEN
    this.httpError = HTTP_STATUS.FORBIDDEN
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

export class RecordNotFoundError extends BaseError {
  constructor(message?: string) {
    const _message = message ?? i18n('errors.recordNotFound')

    super(_message, 'RecordNotFoundError', {})

    this.errorCode = APP_ERROR.RECORD_NOT_FOUND
    this.httpError = HTTP_STATUS.NOT_FOUND
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

export class InitializedPoolError extends BaseError {
  constructor(message?: string) {
    const _message = i18n('errors.pool.initialization')
    super(_message, 'InitializedPoolError', message ? { error: message } : {})

    this.errorCode = APP_ERROR.FAILED_TO_INITIALIZE_POOL
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}

export class EmptyTokenError extends BaseError {
  constructor() {
    const _message = i18n('errors.emptyToken')

    super(_message, 'EmptyTokenError', {})

    this.errorCode = APP_ERROR.EMPTY_TOKEN
    this.httpError = HTTP_STATUS.UNAUTHORIZED
  }
}

export class InvalidTokenError extends BaseError {
  constructor() {
    const _message = i18n('errors.invalidToken')

    super(_message, 'InvalidTokenError', {})

    this.errorCode = APP_ERROR.INVALID_TOKEN
    this.httpError = HTTP_STATUS.UNAUTHORIZED
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

export class AppSecurityAuthError extends BaseError {
  constructor(message: string, errors: AnyObject = {}) {
    super(message, 'AppSecurityAuthError', errors)

    this.errorCode = APP_ERROR.APP_SECURITY_AUTH_ERROR
    this.httpError = HTTP_STATUS.UNPROCESSABLE_ENTITY
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

export class PrismaError extends BaseError {
  constructor(details: AnyObject) {
    super(i18n('errors.prismaError'), 'PrismaError', details)

    this.errorCode = APP_ERROR.PRISMA_ERROR
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}

export class EmptyApiKeyError extends BaseError {
  constructor() {
    const _message = i18n('errors.emptyApiKey')

    super(_message, 'EmptyApiKeyError', {})

    this.errorCode = APP_ERROR.EMPTY_API_KEY
    this.httpError = HTTP_STATUS.UNAUTHORIZED
  }
}

export class InvalidApiKeyError extends BaseError {
  constructor() {
    const _message = i18n('errors.invalidApiKey')

    super(_message, 'InvalidApiKeyError', {})

    this.errorCode = APP_ERROR.INVALID_API_KEY
    this.httpError = HTTP_STATUS.UNAUTHORIZED
  }
}

export class MicroserviceError extends BaseError {
  constructor(details: ErrorResponse['error']) {
    const _message = i18n('errors.microservice')

    super(_message, 'MicroserviceError', details)

    this.errorCode = APP_ERROR.MICROSERVICE_ERROR
    this.httpError = HTTP_STATUS.INTERNAL_SERVER_ERROR
  }
}
