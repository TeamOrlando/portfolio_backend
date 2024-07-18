import { Router } from "express";

import { checkUserAuth } from "../middlewares/auth.js";

import { createUserAchievement, deleteUserAchievement, getAllUserAchievements, updateUserAchievement } from "../controller/achievement_controller.js";


export const achievementRouter = Router()

achievementRouter.post('/users/achievements', checkUserAuth, createUserAchievement)

achievementRouter.get('/users/achievements', checkUserAuth, getAllUserAchievements)

achievementRouter.patch('/users/achievements/:id', checkUserAuth, updateUserAchievement)

achievementRouter.delete('/users/achievements/:id', checkUserAuth, deleteUserAchievement)