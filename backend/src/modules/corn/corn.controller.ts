import type { NextFunction, Request, Response } from 'express'
import { noContentResponse } from '@utils'

export const CornController = {
  purchase: (_request: Request, response: Response, next: NextFunction) => {
    try {
      noContentResponse(response)
    } catch (error) {
      next(error)
    }
  },
}
