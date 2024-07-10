import joi from 'joi'

export const VolunteeringSchema = joi.object({
  organization: joi.string(),
  description: joi.string(),
  role: joi.string(),
  responsibility: joi.string()
})