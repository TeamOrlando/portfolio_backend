import { Router } from "express"
import { addProfile, getAllUserProfile, getOneProfile, } from "../controller/profile_controller.js"

//defining router
export const profileRouter = Router();

profileRouter.post('/users/profile', addProfile)
profileRouter.get('/users/profile/:id', getOneProfile)
profileRouter.get('/users/profile', getAllUserProfile)

