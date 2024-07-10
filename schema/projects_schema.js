import joi from 'joi'


export const ProjectSchema = joi.object({
  projectName: joi.string(),
  description: joi.string(),
  contributors: joi.string(),
  link: joi.string(),
  nameOfInstitution: joi.string()

})