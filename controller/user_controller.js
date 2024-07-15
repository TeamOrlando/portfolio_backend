import { UserModel } from '../models/users_model.js'
import { userSchema } from '../schema/user_schema.js'
import * as bcrypt from 'bcrypt'

//validating user credentials

export const signup = async (req, res) => {
  const { error, value } = userSchema.validate(req.body)
  //handling errors
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
  //validating user by email
  const email = value.email
  console.log('email', email)

  //validating if user already exist
  const findIfUserExist = await UserModel.findOne({ email })
  //if user exist login
  if (findIfUserExist) {
    res.status(401).send('User already signup')
  }
  //if user isn't signup...sign user up
  else {
    const hashedPassword = await bcrypt.hash(value.password, 12)
    value.password = hashedPassword
    const addUser = await UserModel.create(value)
    return res.status(201).send(addUser)
  }
}
//create userLogin

export const Login = async (req, res, next) => {
  //finding user by email,username or password
  try {
    const { email, username, password } = req.body;
    const user = await UserModel.findOne(
      { $or: [{ email: email }, { username: username }, { password: password }] }
    )
    //return response if user doesn't exist
    if (!user)
      res.status(401).json('User does not exist')

    //verify user through password
    const correctPassword = bcrypt.compareSync(password, user.password)
    if (!correctPassword) {
      res.status(401).json('Invalid credentials')
    }
    //now generate session for user if user exist to login
    req.session.user = { id: user.id }
    console.log(user, req.session.user)
    //return response
    res.status(401).json('Login successful')
  } catch (error) {
    next(error)
  }
}

//user CRUD
export const getUser = async (req, res) => {
  const userId = req.params.id
  //get user based on the user id
  //use the select to exclude the password
  //use populate to populate the education
  const userDetails = await UserModel.findById(userId)
    .select('-password')
    .populate('education')
  return res.status(201).json({ user: userDetails })
}