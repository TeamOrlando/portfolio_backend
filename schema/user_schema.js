import joi from "joi";

export const userSchema = joi.object({

  firstName: joi.string().required(),
  surName: joi.string().required(),
  otherNames: joi.string(),
  email: joi.string().email().required(),
  userName: joi.string().required(),
  password: joi.string().min(4).required(),
  confirmedPassword: joi.ref('password'),


}).with('password', 'confirmedPassword');