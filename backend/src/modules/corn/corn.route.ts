import type { Routes } from '@types'
import { CornController, onePerMinuteLimiter } from '@corn'

const prefix = 'corn'

export const CornRoutes: Routes[] = [
  {
    path: '/',
    method: 'post',
    prefix,
    auth: false,
    controller: CornController.purchase,
    middlewares: [onePerMinuteLimiter],
  },
]
