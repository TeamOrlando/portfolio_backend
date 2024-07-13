import { Router } from "express";

import { VolunteeringModel } from "../models/volunteering_models.js";

import { deletedvolunteeringRole, getVolunteeringRole, getVolunteeringRoles, postVolunteeringRole, updateVolunteeringRole } from "../controller/volunteering_controller.js";


const volunteeringRouter = express.Router();

volunteeringRouter.get('/volunteering/:id', getVolunteeringRole);

volunteeringRouter.get('/volunteering', getVolunteeringRoles);

volunteeringRouter.post('/volunteering', postVolunteeringRole);

volunteeringRouter.patch('/volunteering', updateVolunteeringRole);

volunteeringRouter.delete('/volunteering', deletedvolunteeringRole);


export default volunteeringRouter;