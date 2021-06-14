import joi from 'joi'

const makeTrade = {
  body: joi.object().keys({
    trader1: joi.object({
      pokemon_ids: joi.array().items(joi.number().required()).required()
    }).required(),
    trader2: joi.object({
      pokemon_ids: joi.array().items(joi.number().required()).required()
    }).required()
  })
}

export default { makeTrade }
