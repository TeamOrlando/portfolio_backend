import { ExperienceModel } from "../models/experience_model.js";
import { ExperienceSchema } from "../schema/experience_schema.js";

export const addExperience = async (req, res) => {

  try {
    const { error, value } = ExperienceSchema.validate(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    //create education with the value
    const experience = await ExperienceModel.create(value)

    //after, find the user with the id that you passed when creating the experience 
    const user = await ExperienceModel.findById(value.user);
    if (!user) {
      return res.status(404).send('User not found');
    }

    //if you find the user, push the experience id you just created inside
    user.experience.push(experience._id);

    //and save the user now with the experienceId
    await user.save();

    //return the experience
    res.status(201).json({ experience })

  } catch (error) {
    return res.status(500).send(error)
  }
}
//get all experience
export const getAllUserExperience = async (req, res, next) => {

  try {
    //we are fetching experience that belongs to a particular user
    const userId = req.params.id
    const allExperience = await ExperienceModel.find({ user: userId })
    if (allExperience.length == 0) {
      return res.status(404).send('No experience added')
    }
    res.status(200).json({ experience: allExperience })
  } catch (error) {
    next(error)
  }

}

export const getOneExperience = async (req, res) => {
  const experience = await ExperienceModel.findById(req.params.id)
  res.status(200).json(experience)

}