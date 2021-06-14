import express from 'express'
import tradeHistoryController from '@/modules/tradeHistory/controller/trade-history-controller'

export const router: express.Router = express.Router()

router.route('/').get(tradeHistoryController.getTradeHistories)
