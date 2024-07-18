import { Router } from "express";

import { checkUserAuth } from "../middlewares/auth.js";
import { createUserSkill, deleteUserSkill, getAllUserSkills, updateUserSkill } from "../controller/skills_controller.js";



export const skillRouter = Router()

skillRouter.post('/users/skills', checkUserAuth, createUserSkill)

skillRouter.get('/users/skills', checkUserAuth, getAllUserSkills)

skillRouter.patch('/users/skills/:id', checkUserAuth, updateUserSkill)

skillRouter.delete('/users/skills/:id', checkUserAuth, deleteUserSkill)