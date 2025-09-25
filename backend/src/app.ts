import express, { json, urlencoded } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { parse } from 'qs'
import { routeNotFound, handleError } from '@middlewares'
import { router } from '@modules'
import { environment } from '@constants'

const PORT = process.env.PORT || 3000

export class Application {
  app: express.Application

  constructor() {
    this.app = express()

    this.configure()

    this.middlewares()
    this.routes()
  }

  configure() {
    // configuracion para manjerar json con varios niveles
    this.app.set('query parser', (query: string) => parse(query, { depth: 20 }))
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(compression())

    this.app.use(helmet())
    this.app.use(json({ limit: '20mb' })) // peso maximo del body
    this.app.use(urlencoded({ extended: false }))
  }

  routes() {
    this.app.use(environment.baseApiPath, router)

    this.app.use(routeNotFound)

    this.app.use(handleError)
  }

  start() {
    const server = this.app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log('Server is running at', PORT)
    })

    server.setTimeout(500_000)
  }
}
