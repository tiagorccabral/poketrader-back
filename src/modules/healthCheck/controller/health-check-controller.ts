import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { expressRouteAdapter } from '@/main/adapters'
import env from '@/main/config/env'

const getHealth = expressRouteAdapter(async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    message: 'Poketrader API is up and running',
    name: env.system.name,
    dateTime: (new Date()).toISOString(),
    timestamp: (new Date()).valueOf()
  })
})

export default {
  getHealth
}
