import express from 'express'
import { router as tradeRouter } from '@/modules/trade/routes'
import { router as tradeHistory } from '@/modules/tradeHistory/routes'
import { router as healthCheckRouter } from '@/modules/healthCheck/routes'

export const router: express.Router = express.Router()

router.use('/v1', [
  router.use('/trade', tradeRouter),
  router.use('/trade_history', tradeHistory),
  router.use('/health', healthCheckRouter)
])
