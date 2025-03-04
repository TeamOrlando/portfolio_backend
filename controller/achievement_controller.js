import { AchievementSchema } from "../schema/achievements_schema.js";
import { UserModel } from "../models/users_model.js";

import { AchievementsModel } from "../models/achievement_models.js";

export const createUserAchievement = async (req, res) => {
  try {
    const { error, value } = AchievementSchema.validate({
      ...req.body,
      award: req.files.award[0].filename,
      image: req.files.image[0].filename,
    });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;

    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const achievement = await AchievementsModel.create({ ...value, user: userSessionId });

    user.achievements.push(achievement._id)

    await user.save();

    res.status(201).json({ message: "Achievement Added Successfully", achievement });
  } catch (error) {
    console.log(error);
  }
};



export const getAllUserAchievements = async (req, res) => {
  try {
    //we are fetching Achievement that belongs to a particular user
    const userSessionId = req.session.user.id
    const allAchievement = await AchievementsModel.find({ user: userSessionId });
    if (allAchievement.length == 0) {
      return res.status(404).send("No Achievement added");
    }
    res.status(200).json({ Achievements: allAchievement });
  } catch (error) {
    return res.status(500).json({ error })
  }
};



export const updateUserAchievement = async (req, res) => {
  try {
    const { error, value } = AchievementSchema.validate({
      ...req.body,
      award: req.files.award[0].filename,
      image: req.files.image[0].filename,
    });


    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const achievement = await AchievementsModel.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!achievement) {
      return res.status(404).send("Achievement not found");
    }

    res.status(200).json({ achievement });
  } catch (error) {
    return res.status(500).json({ error })
  }
};


export const deleteUserAchievement = async (req, res) => {
  try {
    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const achievement = await AchievementsModel.findByIdAndDelete(req.params.id);
    if (!achievement) {
      return res.status(404).send("Achievement not found");
    }

    user.achievements.pull(req.params.id);
    await user.save();

    res.status(200).json("Achievement deleted");
  } catch (error) {
    return res.status(500).json({ error })
  }
};
