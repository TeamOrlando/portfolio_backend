import { model, Schema, Types } from "mongoose";

const achievementsSchema = new Schema({
  award: { type: String },
  description: { type: String },
  image: { type: String },
  date: { type: String },
  nameOfInstitution: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
})

export const AchievementsModel = model('Achievement', achievementsSchema);