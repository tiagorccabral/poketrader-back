import { Document, Model, model, Schema } from 'mongoose'

export interface ITradeHistory extends Document {
  trader1: number[]
  trader2: number[]
  result: boolean
}

const tradeHistorySchema: Schema = new Schema({
  trader1: [{
    type: Number,
    required: true
  }],
  trader2: [{
    type: Number,
    required: true
  }],
  result: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const TradeHistory: Model<ITradeHistory> = model('trade_histories', tradeHistorySchema)

export default TradeHistory
