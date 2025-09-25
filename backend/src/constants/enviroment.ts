export class Environment {
  get debug() {
    return process.env.APP_DEBUG === 'true'
  }

  get isProduction() {
    return process.env.NODE_ENV === 'production'
  }

  get apiVersion() {
    return process.env.API_VERSION ?? 'v1'
  }

  get baseApiPath() {
    return ['', 'api', this.apiVersion].join('/')
  }
}

export const environment = new Environment()
