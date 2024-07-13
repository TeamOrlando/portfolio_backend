import joi from "joi";


export const userSchema = joi.object({

  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: joi.ref('password'),
  userName: joi.string(),
  termsAndConditions: joi.boolean(),

})
