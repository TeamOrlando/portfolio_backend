import joi from 'joi'


export const SkillsSchema = joi.object({
  name: joi.string(),
  levelOfProficiency: joi.string()
})

