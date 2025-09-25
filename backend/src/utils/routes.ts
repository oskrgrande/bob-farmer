import { Router } from 'express'
import type { EndpointHandler, RouteOptions, Routes } from '@types'

function buildMiddlewares(route: Routes): EndpointHandler[] {
  const middlewares: EndpointHandler[] = []
  if (route.middlewares) middlewares.push(...route.middlewares)
  return middlewares
}

export function buildRoutes(routes: Routes[], options?: RouteOptions): Router {
  const router = options?.router ?? Router()

  for (const route of routes) {
    const path = ['', options?.prefix, route.prefix, route.path.replace(/^\//, '')]
      .filter(item => item !== undefined)
      .join('/')

    const middlewares = buildMiddlewares(route)

    router[route.method](path, ...middlewares, route.controller)
  }

  return router
}
