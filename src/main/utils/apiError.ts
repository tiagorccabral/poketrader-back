export default class ApplicationError extends Error {
  public message: string = 'ApplicationError'

  public statusCode: number = 500

  constructor(message?: string, statusCode?: number, stack?: string) {
    super()
    if (message != null) {
      this.message = message
    }
    if (statusCode != null) {
      this.statusCode = statusCode
    }
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
