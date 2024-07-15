import { Router } from "express";

import { checkUserSession } from "../middlewares/auth.js";

import { VolunteeringModel } from "../models/volunteering_models.js";
import { createVolunteeringRoles, deleteUserVolunteeringRoles, getAllVolunteeringRoles, updateUserVolunteeringRoles } from "../controller/volunteering_controller.js";




export const volunteeringRouter = express.Router();

volunteeringRouter.post('/users/volunteering', checkUserSession, createVolunteeringRoles)

volunteeringRouter.get('/users/volunteering', checkUserSession, getAllVolunteeringRoles)

volunteeringRouter.patch('/users/volunteering/:id', checkUserSession, updateUserVolunteeringRoles)

volunteeringRouter.delete('/users/volunteering/:id', checkUserSession, deleteUserVolunteeringRoles)
