import express from 'express'
import tradeController from '@/modules/trade/controller/trade-controller'
import tradeValidation from '@/modules/trade/validations'
import { validate } from '@/main/middlewares/validate'

export const router: express.Router = express.Router()

router.route('/').post(validate(tradeValidation.makeTrade), tradeController.makeTrade)
