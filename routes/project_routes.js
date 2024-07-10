import { Router } from "express";
import { getProject, postProject } from "../controller/project_controller.js";

// create Router
const ProjectRouter = Router();

ProjectRouter.get('/projects', getProject)

ProjectRouter.post('/Project', postProject)