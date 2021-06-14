import 'module-alias/register'
import env from '@/main/config/env'
import app from '@/main/config/app'
import logger from '@/main/config/logger'
import MongoConnection from '@/infra/db/mongo-helper'

const mongoConnection = new MongoConnection(env.database.isMongoCloudProvided)

let server: any = null

mongoConnection.connect(() => {
  server = app.listen(env.port, async () => {
    logger.info(`Server up! Listening to port ${env.port}`)
  })
})

const exitHandler = (): void => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: Error): any => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
