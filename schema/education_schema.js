import joi from 'joi'


export const EducationSchema = joi.object({
  schoolName: joi.string().required(),
  program: joi.string(),
  qualification: joi.string(),
  grade: joi.string(),
  startDate: joi.string(),
  endDate: joi.string()
})