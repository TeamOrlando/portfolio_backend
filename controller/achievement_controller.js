import { AchievementSchema } from "../schema/achievements_schema.js";
import { AchievementsModel } from "../models/achievement_models.js";

// VALIDATE
export const achievements = (req, res) => {
  const { error, value } = AchievementSchema.validate(req.body)
  if (error) {
    res.status(400).send(error.details[0].message)
  }
}

// POST ACHIEVEMENTS
export const postAchievement = async (req, res, next) => {
  try {
    // Add a Project to the database
    const newAchievement = await AchievementsModel.create( req.body );
    // Return response
    res.status(200).json(achievementsAdded); 
  } catch (error) {
   next(error);
  }
}

// GET ALL ACHIEVEMENTS

export const getAchievements = async (req, res, next) => {
  try {
    const allAchievement = await AchievementsModel.find();
    res.staus(200).json(achievements)
  } catch (error) {
    next(error)
  }
}

// GET ONE ACHIEVEMENT BY ID

export const getAchievement = async (req, res, next) => {
  try {
    const getAchievement = await AchievementsModel.findById(req.params.id);
    res.status(200).json(achievements);
  } catch (error) {
    next(error)
  }
}

// UPDATE AN ACHIEVEMENT

export const updateAchievement = async (req, res) => {
  try {
    const updatedAchievement = await AchievementsModel.findByIdAndUpdate(req.params.id);
    res.status(200).send(updatedAchievement);
  } catch (error) {
    console.log(error);
  }
};

// DELETE AN ACHIEVEMENT
export const deleteAchievement = async (req, res, next) => {
  try {
    const deletedAchievement = await AchievementsModel.findByIdAndDelete(req.params.id);
    // Return response
    res.status(200).send(`Achievement ${deletedAchievement} with id ${req.params.id} deleted`);

  } catch (error) {
    next(error);
  }
}
