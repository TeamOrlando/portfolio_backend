import joi from 'joi'

export const AchievementSchema = joi.object({
  award: joi.string(),
  description: joi.string(),
  image: joi.string(),
  date: joi.string(),
  nameOfInstitution: joi.string()

})