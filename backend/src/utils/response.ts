import type { Response } from 'express'
import { HTTP_STATUS } from '@constants'
import type { AnyObject } from '@types'

export function singleResponse(response: Response, data: unknown, meta?: AnyObject) {
  return response.status(HTTP_STATUS.OK).json({ data, meta })
}

export function singleTooManyRequestsResponse(response: Response, message: string, meta?: AnyObject) {
  return response.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({ error: message, meta })
}

export function noContentResponse(response: Response) {
  return response.status(HTTP_STATUS.NO_CONTENT).json({})
}
