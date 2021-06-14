import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { expressRouteAdapter } from '@/main/adapters'
import { checkTrade } from '@/modules/trade/services'
import { createTradeHistory } from '@/modules/tradeHistory/services'
// import env from '@/main/config/env'

const makeTrade = expressRouteAdapter(async (req: Request, res: Response) => {
  const reqData = req.body
  const tradeOk = await checkTrade(reqData)
  if (tradeOk) {
    await createTradeHistory({ trader1: reqData.trader1.pokemon_ids, trader2: reqData.trader2.pokemon_ids, result: true })
    return res.status(httpStatus.CREATED).send({ message: 'Trade done!' })
  } else {
    await createTradeHistory({ trader1: reqData.trader1.pokemon_ids, trader2: reqData.trader2.pokemon_ids, result: false })
    return res.status(httpStatus.NOT_ACCEPTABLE).send({ message: 'Trade is unfair!' })
  }
})

export default {
  makeTrade
}
