import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { createUserProject, deleteUserProject, getAllUserProjects, updateUserProject } from "../controller/project_controller.js";


export const projectRouter = Router()

projectRouter.post('/users/projects', remoteUpload.single('image'), checkUserSession, createUserProject)

projectRouter.get('/users/projects', checkUserSession, getAllUserProjects)

projectRouter.patch('/users/projects/:id', remoteUpload.single('image'), checkUserSession, updateUserProject)

projectRouter.delete('/users/projects/:id', checkUserSession, deleteUserProject)
