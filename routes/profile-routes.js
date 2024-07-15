import { Router } from "express"
import { addProfile, getUserProfile, updateUserProfile } from "../controller/profile_controller.js"
import { checkUserSession } from "../middlewares/auth.js";

//defining router
export const profileRouter = Router();

profileRouter.post('/users/profile', checkUserSession, addProfile)
profileRouter.get('/users/profile', getUserProfile)
profileRouter.patch('/users/profile/:id', updateUserProfile)



