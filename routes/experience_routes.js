import { Router } from "express";
import { addExperience, getAllUserExperience, getOneExperience } from "../controller/experience_controller.js";

//defining routes
export const experienceRouter = Router();
experienceRouter.post('users/experience', addExperience)
experienceRouter.get('/users/experience/:id', getOneExperience)
experienceRouter.get('/users/experience', getAllUserExperience)