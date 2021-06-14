import express from 'express'
import tradeController from '@/modules/trade/controller/trade-controller'

export const router: express.Router = express.Router()

router.route('/').post(tradeController.makeTrade)
