import { Router } from "express";
import { addExperience, deleteExperience, getAllUserExperience, updateExperience } from "../controller/experience_controller.js";

//defining routes
export const experienceRouter = Router();
experienceRouter.post('/users/experience', addExperience)
// experienceRouter.get('/users/experience/:id', getExperienceById)
experienceRouter.get('/users/experience', getAllUserExperience)
experienceRouter.patch('/users/experience/:id', updateExperience)
experienceRouter.delete('/users/experience/:id', deleteExperience)