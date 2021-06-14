import dotenv from 'dotenv'
import path from 'path'
import Joi from 'joi'
import { IConfig } from '@/main/config/Iconfig.interface'

dotenv.config({ path: path.join(__dirname, '../../../env/mongo.env') })
dotenv.config({ path: path.join(__dirname, '../../../env/node.env') })

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3000).required(),
  MONGO_INITDB_ROOT_USERNAME: Joi.string(),
  MONGO_INITDB_ROOT_PASSWORD: Joi.string(),
  MONGODB_DEVELOPMENT_USERNAME: Joi.string().optional(),
  MONGODB_DEVELOPMENT_PASSWORD: Joi.string().optional(),
  MONGODB_DEVELOPMENT_DATABASE_NAME: Joi.string().optional(),
  MONGODB_TEST_URL: Joi.string().optional(),
  MONGODB_TEST_USERNAME: Joi.string().optional(),
  MONGODB_TEST_PASSWORD: Joi.string().optional(),
  MONGODB_TEST_DATABASE_NAME: Joi.string().optional(),
  MONGODB_PROD_URL: Joi.string().optional(),
  MONGODB_PROD_USERNAME: Joi.string().optional(),
  MONGODB_PROD_PASSWORD: Joi.string().optional(),
  MONGODB_PROD_DATABASE_NAME: Joi.string().optional(),
  IS_MONGO_CLOUD_PROVIDED: Joi.boolean().required(),
  LOG_ERROR_TRACE_TO_STACK: Joi.bool().required()
}).unknown()

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config: IConfig = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  database: {
    mongoRootUsername: envVars.MONGO_INITDB_ROOT_USERNAME,
    mongoRootPassword: envVars.MONGO_INITDB_ROOT_PASSWORD,
    isMongoCloudProvided: envVars.IS_MONGO_CLOUD_PROVIDED,
    development: {
      mongodbUsername: envVars.MONGODB_DEVELOPMENT_USERNAME,
      mongodbPassword: envVars.MONGODB_DEVELOPMENT_PASSWORD,
      mongodbDatabaseName: envVars.MONGODB_DEVELOPMENT_DATABASE_NAME,
      mongodbUrl: envVars.MONGODB_DEVELOPMENT_URL
    },
    test: {
      mongodbUsername: envVars.MONGODB_TEST_USERNAME,
      mongodbPassword: envVars.MONGODB_TEST_PASSWORD,
      mongodbDatabaseName: envVars.MONGODB_TEST_DATABASE_NAME,
      mongodbUrl: envVars.MONGODB_TEST_URL
    },
    production: {
      mongodbUsername: envVars.MONGODB_PROD_USERNAME,
      mongodbPassword: envVars.MONGODB_PROD_PASSWORD,
      mongodbDatabaseName: envVars.MONGODB_PROD_DATABASE_NAME,
      mongodbUrl: envVars.MONGODB_PROD_URL
    }
  },
  system: {
    name: 'poketraderapi'
  },
  logs: {
    sendErrorStackTrace: envVars.LOG_ERROR_TRACE_TO_STACK
  }
}

export default config
