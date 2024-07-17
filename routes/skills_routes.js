import { Router } from "express";

import { checkUserSession } from "../middlewares/auth.js";
import { createUserSkill, deleteUserSkill, getAllUserSkills, updateUserSkill } from "../controller/skills_controller.js";



export const skillRouter = Router()

skillRouter.post('/users/skills', checkUserSession, createUserSkill)

skillRouter.get('/users/skills', checkUserSession, getAllUserSkills)

skillRouter.patch('/users/skills/:id', checkUserSession, updateUserSkill)

skillRouter.delete('/users/skills/:id', checkUserSession, deleteUserSkill)