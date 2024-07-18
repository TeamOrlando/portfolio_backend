import { createVolunteering, deleteVolunteering, getAllVolunteering, updateVolunteering } from "../controller/volunteering_controller.js";
import { checkUserAuth } from "../middlewares/auth.js";

import { Router } from "express";


export const volunteeringRouter = Router()

volunteeringRouter.post('/users/volunteering', checkUserAuth, createVolunteering)

volunteeringRouter.get('/users/volunteering', checkUserAuth, getAllVolunteering)

volunteeringRouter.patch('/users/volunteering/:id', checkUserAuth, updateVolunteering)

volunteeringRouter.delete('/users/volunteering/:id', checkUserAuth, deleteVolunteering)