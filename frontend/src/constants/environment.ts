import { z } from 'zod'

const envSchema = z.object({
  APP_DEBUG: z.string().optional(),
  VITE_API_URL: z.string(),
})

let instance: Environment | undefined

export class Environment {
  readonly #parsed: z.infer<typeof envSchema>

  constructor() {
    const schema = envSchema.parse(import.meta.env)

    this.#parsed = schema
  }

  static getInstance() {
    instance ??= new Environment()

    return instance
  }

  get debug() {
    return this.#parsed.APP_DEBUG === 'true'
  }

  get apiUrl() {
    return this.#parsed.VITE_API_URL
  }

}

export const environment = Environment.getInstance()
