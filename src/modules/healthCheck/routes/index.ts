import express from 'express'
import healthCheckController from '@/modules/healthCheck/controller/health-check-controller'

export const router: express.Router = express.Router()

router.route('/').get(healthCheckController.getHealth)
