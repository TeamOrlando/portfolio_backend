import { Router } from "express";
import { experience } from "../controller/experience_controller.js";

//defining routes
export const experienceRouter = Router();
experienceRouter.post('users/experience', experience)