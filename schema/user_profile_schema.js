import joi from "joi";

export const userProfileSchema = joi.object({
  userProfile: {
    profilePicture: joi.string().required(),
    location: joi.string(),
    about: joi.string(),
    contact: joi.string(),
    languages: joi.string(),
    resume: joi.string().required()
  }

})

