import { model, Schema, Types } from "mongoose";

const experienceSchema = new Schema({
  company: { type: String },
  location: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  role: { type: String },
  responsibility: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
})

export const ExperienceModel = model('Experience', experienceSchema);

