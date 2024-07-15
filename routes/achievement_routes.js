import { Router } from "express";

import { checkUserSession } from "../middlewares/auth.js";

import { createUserAchievement, deleteUserAchievement, getAllUserAchievements, updateUserAchievement } from "../controller/achievement_controller.js";


export const achievementRouter = Router()

achievementRouter.post('/users/achievements', checkUserSession, createUserAchievement )

achievementRouter.get('/users/achievements', checkUserSession, getAllUserAchievements )

achievementRouter.patch('/users/achievements/:id', checkUserSession,updateUserAchievement )

achievementRouter.delete('/users/achievements/:id', checkUserSession, deleteUserAchievement)