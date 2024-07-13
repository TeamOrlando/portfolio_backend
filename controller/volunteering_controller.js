import { VolunteeringModel } from "../models/volunteering_models.js";
import { VolunteeringSchema } from "../schema/volunteering_schema.js";


// GET ALL VOLUNTEERING ROLES
export const getVolunteeringRoles = async (req, res, next) => {
    try {
        const allVolunteeringRoles = await VolunteeringModel.find()
        res.status(200).json(allVolunteeringRoles)
    } catch (error) {
        next(error)
    }
};

// GET ONE VOLUNTEERING ROLE
export const getVolunteeringRole = async (req, res, next) => {
    try {
        const oneVolunteringRole = await VolunteeringModel.findById(req.params.id)
        res.status(200).json(oneVolunteringRole)
    } catch (error) {
        next(error)
    }
};

//POST VOLUNTEERING ROLES
export const postVolunteeringRole = async (req, res, next) => {
    try {
        const volunteeringRole = await VolunteeringModel.create(req.body)
        res.status(201).json(volunteeringRole)
    } catch (error) {
        next(error)
    }
};
//UPDATE A VOLUNTEERING ROLE
export const updateVolunteeringRole = async (req, res, next) => {
    try {
        const volunteeringId = req.params.id;
        const updatedVolunteeringRole = await VolunteeringModel.findByIdAndUpdate(
            { _id: eventId },
            req.body,
            { new: true })

        res.status(200).json(updatedVolunteeringRole)
    } catch (error) {
        next(error)
    }
};

//DELETE VOLUNTEERING ROLE
export const deletedvolunteeringRole = async (req, res, next) => {
    try {
        // Delete Skill by id
        const deletedVolunteeringRole = await VolunteeringModel.findByIdAndDelete(req.params.id);
        // Return response
        res.status(200).json(VolunteeringRoleDeleted);

    } catch (error) {
        next(error);
    }
}