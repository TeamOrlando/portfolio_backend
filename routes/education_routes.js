import { addEducation, deleteUserEducation, getAllUserEducation, updateUserEducation } from "../controller/education_controller.js";
import { checkUserAuth } from "../middlewares/auth.js";

import { Router } from "express";

export const educationRouter = Router()

educationRouter.post('/users/education', checkUserAuth, addEducation)
educationRouter.get('/users/education', checkUserAuth, getAllUserEducation)
educationRouter.patch('/users/education/:id', checkUserAuth, updateUserEducation)
educationRouter.delete('/users/education/:id', checkUserAuth, deleteUserEducation)
