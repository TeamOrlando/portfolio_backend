import { Router } from "express";
import { achievements } from "../controller/achievement_controller.js";
//defining routes

export const achievementRouter = Router();
achievementRouter.post('users/achievements', achievements);