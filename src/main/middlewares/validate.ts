import joi from 'joi'
import httpStatus from 'http-status'
import ApiError from '@/main/utils/apiError'
import { pick } from '@/main/utils/validationPicker'

export const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body'])
  const object = pick(req, Object.keys(validSchema))
  const { value, error } = joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object)

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ')
    return next(new ApiError(errorMessage, httpStatus.BAD_REQUEST))
  }
  Object.assign(req, value)
  return next()
}
