import type { NextFunction, Request, Response } from 'express'
import { buildError } from '@utils'

export const handleError = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const [_response, status] = buildError(error)

  response.status(status).json(_response)
}

export default handleError
