import { Router } from "express";
import { checkUserAuth } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { createUserProject, deleteUserProject, getAllUserProjects, updateUserProject } from "../controller/project_controller.js";


export const projectRouter = Router()

projectRouter.post('/users/projects', remoteUpload.single('image'), checkUserAuth, createUserProject)

projectRouter.get('/users/projects', checkUserAuth, getAllUserProjects)

projectRouter.patch('/users/projects/:id', remoteUpload.single('image'), checkUserAuth, updateUserProject)

projectRouter.delete('/users/projects/:id', checkUserAuth, deleteUserProject)
