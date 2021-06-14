import httpStatus from 'http-status'
import ApiError from '@/main/utils/apiError'
import TradeHistory, { ITradeHistory } from '@/modules/tradeHistory/models/tradeHistory'

const createTradeHistory = async (tradeHistoryData: { trader1: number[], trader2: number[], result: boolean }): Promise<ITradeHistory> => {
  try {
    const result: ITradeHistory = await TradeHistory.create(tradeHistoryData)
    return result
  } catch (error) {
    throw new ApiError(error, httpStatus.INTERNAL_SERVER_ERROR)
  }
}

export { createTradeHistory }
