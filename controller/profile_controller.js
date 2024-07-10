import { userProfileSchema } from "../schema/user_profile_schema.js";


//validating user-profile

export const userProfile = (req, res) => {
  const { error, value } = userProfileSchema.validate(req.body)
  if (error) {
    res.status(400).send(error)
  }
}