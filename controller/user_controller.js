// import { User} from "../models/users_model.js";

import { userSchema } from '../schema/user_schema.js'


//validating user credentials

export const signup = (req, res) => {
  const { error, value } = userSchema.validate(req.body)
  //handling errors
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  //validating if user exist
  const email = value.email

}



