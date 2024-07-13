import { SkillsModel } from "../models/skills_model.js"
import { SkillsSchema } from "../schema/skills_schema.js";
import { UserModel } from "../models/users_model.js";



// Get All Skills
export const getSkills = async (req, res, next) => {
    try {
        const Allskills = await SkillsModel.find()
        res.status(200).json(skills)
    } catch (error) {
        next(error)
    }
};

// Get one Skills
export const getSkill = async (req, res, next) => {
    try {
        const Oneskill = await SkillsModel.findById(req.params.id)
        res.status(200).json(skills)
    } catch (error) {
        next(error)
    }
}



//Create skills
export const postSkills = async (req, res, next) => {
    try {
        const postedSkills = await SkillsModel.create(req.body)
        res.status(201).json(Skills)
    } catch (error) {
        next(error)
    }
};
//Update A Skill
export const updateSkill = async (req, res, next) => {
    try {
        const SkillId = req.params.id;
        const updatedSkills = await SkillsModel.findByIdAndUpdate(
            { _id: eventId },
            req.body,
            { new: true })

        res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
};
//delete Project
export const deletedskill = async (req, res, next) => {
    try {
        // Delete Skill by id
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
        // Return response
        res.status(200).json(SkillDeleted);

    } catch (error) {
        next(error);
    }
}