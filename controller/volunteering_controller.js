import { VolunteeringModel } from "../models/volunteering_models.js";

import { VolunteeringSchema } from "../schema/volunteering_schema.js";

import { ProjectModel } from "../models/projects_models.js";

import { userProfileModel } from "../models/userprofile_model.js";

import { UserModel } from "../models/users_model.js";

import { ProjectSchema } from "../schema/projects_schema.js";

//POST VOLUNTEERING ROLES

export const createVolunteeringRoles = async (req, res, next) => {
    try {
        const { error, value } = VolunteeringSchema.validate(req.body);

        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const userSessionId = req.session.user.id;
    
        const user = await UserModel.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const volunteering = await VolunteeringModel.create({
          ...value,
          user: userSessionId,
        });
    
        user.volunteering.push(volunteering._id);
    
        await user.save();
    
        res.status(201).json({ volunteering });
      } catch (error) {
        console.log(error);
      }
    };

    // GET ALL VOLUNTEERING ROLES

    export const getAllVolunteeringRoles = async (req, res) => {
      try {
        //fetch a Volunteering role for a particular user
        const userSessionId = req.session.user.id;
        const allVolunteering = await VolunteeringModel.find({ user: userSessionId });
        if (allVolunteering.length == 0) {
          return res.status(404).send("No Volunteering added");
        }
        res.status(200).json({ Volunteerings: allVolunteering });
      } catch (error) {
        return res.status(500).json({ error });
      }
    };
    
    //UPDATE A VOLUNTEERING ROLE
    export const updateUserVolunteeringRoles = async (req, res) => {
      try {
        const { error, value } = VolunteeringSchema.validate(req.body);
    
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const userSessionId = req.session.user.id;
        const user = await UserModel.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const volunteering = await VolunteeringModel.findByIdAndUpdate(
          req.params.id,
          value,
          { new: true }
        );
        if (!volunteering) {
          return res.status(404).send("VolunteeringRole not found");
        }
    
        res.status(200).json({ Volunteering });
      } catch (error) {
        return res.status(500).json({ error });
      }
    };

    //DELETE VOLUNTEERING ROLE
    
    export const deleteUserVolunteeringRoles = async (req, res) => {
      try {
        const userSessionId = req.session.user.id;
        const user = await UserModel.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const volunteering = await VolunteeringModel.findByIdAndDelete(req.params.id);
        if (!volunteering) {
          return res.status(404).send("Volunteering not found");
        }
    
        user.volunteering.pull(req.params.id);
        await user.save();
    
        res.status(200).json("Volunteering deleted");
      } catch (error) {
        return res.status(500).json({ error });
      }
    };