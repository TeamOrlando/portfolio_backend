import joi from 'joi'


export const skillsSchema = joi.object({
  name: joi.string().required(),
  levelOfProficiency: joi.string().valid('beginner', 'advanced', 'expert'),
  user: joi.string()
})

