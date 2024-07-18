import { createUserExperience, deleteUserExperience, getAllUserExperience, updateUserExperience } from "../controller/experience_controller.js";
import { checkUserAuth } from "../middlewares/auth.js";

import { Router } from "express";


export const experienceRouter = Router()

experienceRouter.post('/users/experiences', checkUserAuth, createUserExperience)

experienceRouter.get('/users/experiences', checkUserAuth, getAllUserExperience)

experienceRouter.patch('/users/experiences/:id', checkUserAuth, updateUserExperience)

experienceRouter.delete('/users/experiences/:id', checkUserAuth, deleteUserExperience)