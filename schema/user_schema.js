import joi from "joi";


export const userSchema = joi.object({

  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.ref('password'),
  userName: joi.string().required(),
  termsAndConditions: joi.boolean(),

})
