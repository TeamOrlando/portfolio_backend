import { Router } from "express";
import {deleteAchievement, getAchievement, getAchievements, postAchievement, updateAchievement } from "../controller/achievement_controller.js";
//defining routes

export const achievementRouter = Router();
achievementRouter.post('users/achievements', postAchievement);
achievementRouter.get('users/achievements', getAchievements);
achievementRouter.get('users/achievements', getAchievement);
achievementRouter.patch('users/achievements', updateAchievement);
achievementRouter.delete('user/achievements', deleteAchievement);
