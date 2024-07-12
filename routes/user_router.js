import { getUser, signup } from '../controller/user_controller.js'
import { Router } from 'express'


export const userRouter = Router();
userRouter.post('/users/signup', signup)
userRouter.get('/users/:id', getUser)

