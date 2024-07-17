
import { ProjectSchema } from "../schema/projects_schema.js";
import { UserModel } from "../models/users_model.js";

import { ProjectModel } from "../models/projects_models.js";

export const createUserProject = async (req, res) => {
  try {
    const { error, value } = ProjectSchema.validate({ ...req.body, image: req.file.filename });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;

    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const project = await ProjectModel.create({ ...value, user: userSessionId });

    user.projects.push(project._id)

    await user.save();

    res.status(201).json({ project });
  } catch (error) {
    console.log(error);
  }
};



export const getAllUserProjects = async (req, res) => {
  try {
    //we are fetching Project that belongs to a particular user
    const userSessionId = req.session.user.id
    const allProject = await ProjectModel.find({ user: userSessionId });
    if (allProject.length == 0) {
      return res.status(404).send("No Project added");
    }
    res.status(200).json({ Projects: allProject });
  } catch (error) {
    return res.status(500).json({ error })
  }
};



export const updateUserProject = async (req, res) => {
  try {
    const { error, value } = ProjectSchema.validate({ ...req.body, image: req.file.filename });


    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const project = await ProjectModel.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!project) {
      return res.status(404).send("Project not found");
    }

    res.status(200).json({ project });
  } catch (error) {
    return res.status(500).json({ error })
  }
};


export const deleteUserProject = async (req, res) => {
  try {


    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const project = await ProjectModel.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).send("Project not found");
    }

    user.projects.pull(req.params.id);
    await user.save();
    res.status(200).json("Project deleted");
  } catch (error) {
    return res.status(500).json({ error })
  }
};
