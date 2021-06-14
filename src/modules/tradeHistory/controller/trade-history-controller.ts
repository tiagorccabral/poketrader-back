import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { expressRouteAdapter } from '@/main/adapters'
import { getAllTradeHistories } from '@/modules/tradeHistory/services'

const getTradeHistories = expressRouteAdapter(async (req: Request, res: Response) => {
  const result = await getAllTradeHistories()
  return res.status(httpStatus.OK).send(result)
})

export default {
  getTradeHistories
}
