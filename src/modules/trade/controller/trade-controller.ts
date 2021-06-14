import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { expressRouteAdapter } from '@/main/adapters'
import { checkTrade } from '@/modules/trade/services'
// import env from '@/main/config/env'

const makeTrade = expressRouteAdapter(async (req: Request, res: Response) => {
  const reqData = req.body
  const tradeOk = await checkTrade(reqData)
  if (tradeOk) {
    // await saveTradeHistory()
    return res.status(httpStatus.CREATED).send({ message: 'Trade done!' })
  }
  return res.status(httpStatus.NOT_ACCEPTABLE).send({ message: 'Trade is unfair!' })
})

export default {
  makeTrade
}
