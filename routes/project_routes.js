import { Router } from "express";
import { deleteProject, getProject, getProjects, patchProject, postProject } from "../controller/project_controller.js";

// create Router
const ProjectRouter = Router();

ProjectRouter.get('/projects', getProject);

ProjectRouter.post('/Projects', postProject);

ProjectRouter.patch('/projects', patchProject);

ProjectRouter.delete('/projects', deleteProject);

ProjectRouter.get('/projects', getProjects)


export default ProjectRouter
