import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { expressRouteAdapter } from '@/main/adapters'
// import env from '@/main/config/env'

const makeTrade = expressRouteAdapter(async (req: Request, res: Response) => {
  res.status(httpStatus.CREATED).send({})
})

export default {
  makeTrade
}
