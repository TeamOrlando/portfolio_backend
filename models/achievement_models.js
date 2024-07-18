import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const achievementsSchema = new Schema({
  award: { type: String },
  description: { type: String },
  image: { type: String },
  date: { type: String },
  nameOfInstitution: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
})
achievementsSchema.plugin(toJSON);
export const AchievementsModel = model('Achievement', achievementsSchema);