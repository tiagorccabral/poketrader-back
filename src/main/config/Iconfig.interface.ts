type ISystem = {
  name: string
}

type ILogs = {
  sendErrorStackTrace: boolean
}

type IDatabase = {
  isMongoCloudProvided: boolean
  mongoRootUsername: string
  mongoRootPassword: boolean
  development: {
    mongodbUrl: string
    mongodbUsername: string
    mongodbPassword: string
    mongodbDatabaseName: string
  }
  test: {
    mongodbUrl: string
    mongodbUsername: string
    mongodbPassword: string
    mongodbDatabaseName: string
  }
  production: {
    mongodbUrl: string
    mongodbUsername: string
    mongodbPassword: string
    mongodbDatabaseName: string
  }
}

export interface IConfig {
  env: string
  port: number
  database: IDatabase
  system: ISystem
  logs: ILogs
}
