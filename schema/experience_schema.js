import joi from "joi";


export const ExperienceSchema = joi.object({
  company: joi.string().required(),
  location: joi.string(),
  startDate: joi.string(),
  endDate: joi.string(),
  role: joi.string(),
  responsibility: joi.string()
})