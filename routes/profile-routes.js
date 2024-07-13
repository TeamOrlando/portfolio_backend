import { Router } from "express"
import { userProfile } from "../controller/profile_controller.js"

//defining router
export const profileRouter = Router();

profileRouter.post('/users/profile', userProfile)


