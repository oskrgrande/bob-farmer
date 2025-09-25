import type { IRouter, RequestHandler, Router } from 'express'

type HandlerParameters = Parameters<RequestHandler>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EndpointHandler = (...args: HandlerParameters) => any

export type Methods = Pick<
  IRouter,
  'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options'
>

export type AuthType = 'bearer' | 'apiKey' | 'none'

export interface Routes {
  path: string
  method: keyof Methods
  middlewares?: EndpointHandler[]
  prefix?: string
  auth?: boolean | AuthType
  permissions?: string[]
  controller: EndpointHandler
}

export interface RouteOptions {
  prefix?: string
  router?: Router
}
