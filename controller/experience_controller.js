import { ExperienceModel } from '../models/experience_model.js';
import { UserModel } from '../models/users_model.js';
import { ExperienceSchema } from '../schema/experience_schema.js';

export const addExperience = async (req, res) => {
  try {
    const { error, value } = ExperienceSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    //after, find the user with the id that you passed when creating the experience
    console.log('userId', req.session.user.id);
    const userSessionId = req.session.user.id;
    const user = await ExperienceModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    //create experience with the value
    const experience = await ExperienceModel.create({
      ...value,
      user: userSessionId,
    });
    //if you find the user, push the experience id you just created inside
    user.experience.push(experience._id);

    //and save the user now with the experienceId
    await user.save();

    //return the experience
    res.status(201).json({ experience });
  } catch (error) {
    return res.status(500).send(error);
  }
};
//get all experience
export const getAllUserExperience = async (req, res, next) => {
  try {
    //we are fetching experience that belongs to a particular user
    const userSessionId = req.session.user.id;
    const allExperience = await ExperienceModel.find({ user: userSessionId });
    if (allExperience.length == 0) {
      return res.status(404).send('No experience added');
    }
    res.status(200).json({ experience: allExperience });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//update experience byId
export const updateExperience = async (req, res) => {
  try {
    const { error, value } = userProfileSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const experience = await ExperienceModel.findByIdAndUpdate(
      req.params.id,
      value,
      { new: true }
    );
    if (!experience) {
      return res.status(404).send('experience not found');
    }
    res.status(200).json({ experience });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//delete experience by Id
export const deleteExperience = async (req, res) => {
  try {
    const userSessionId = req.session.user.id;
    const user = await ExperienceModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const experience = await ExperienceModel.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).send('experience not found');
    }
    user.experiences.pull(req.params.id);
    await user.save();
    res.status(200).json('Experience deleted successfully');
  } catch (error) {
    return res.status(500).json({ error });
  }
};
