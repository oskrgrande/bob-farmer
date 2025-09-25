import rateLimitMiddleware from 'express-rate-limit'
import { singleTooManyRequestsResponse } from '@utils'
import type { Request, Response } from 'express'

export const onePerMinuteLimiter = rateLimitMiddleware({
  windowMs: 60 * 1000,
  max: 1,
  message: 'Too many requests, please try again in 1 minute',
  keyGenerator: (request: Request): string => {
    const ip
      = request.ip
        || (request.headers['x-forwarded-for'] as string).split(',')[0]
        || request.socket.remoteAddress
        || 'unknown'
    return ip
  },
  handler: (_request: Request, response: Response) => {
    singleTooManyRequestsResponse(response, 'Too many requests, please try again in 1 minute')
  },
})
