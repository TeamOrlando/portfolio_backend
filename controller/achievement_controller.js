import { AchievementSchema } from "../schema/achievements_schema.js";

export const achievements = (req, res) => {
  const { error, value } = AchievementSchema.validate(req.body)
  if (error) {
    res.status(400).send(error)
  }
}