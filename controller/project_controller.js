import { ProjectModel } from "../models/projects_models.js";
import {userSchema} from "../schema/projects_schema.js";

// User validation
export const project = (req, res) => {
    const {error, value} = userSchema.valideate(req.body);
if(error){
    return res.status(400).send(error.details[0].message);
}

} 
// defining EndPoints

// get one Project
export const getProject = async (req, res, next) => {
    try {
        const getOneProject = await ProjectModel.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
      next(error)  
    }
}

// get all Projects
export const getProjects = async (req, res, next) => {
    try {
        // Get querry params
        const {limit, skip, search } = req.query;
        // get all Projects from database
        const allProjects = await ProjectModel.find()
    
        // Return all Projects
        res.status(200).json(allProjects);
    } catch (error) {
      next (error);  
    }
};

// post a Project
export const postProject = async (req, res, next) => {
    try {
      // Add a Project to the database
      const newProject = await ProjectModel.create( req.body );
      // Return response
      res.status(200).json(ProjectCreated); 
    } catch (error) {
     next(error);
    }
 }

// delete Project
export const deleteProject = async (req, res, next) => {
    try {
        // Delete Project by id
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
        // Return response
        res.status(200).json(ProjectDeleted);

    } catch (error) {
        next(error);
    }
}

export const patchProject = async (req, res, next) => {
   try {
    // update Project by id
    const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    // Return response
    res.status(200).json(ProjectUpdated);
   } catch (error) {
    next(error)
   } 
}