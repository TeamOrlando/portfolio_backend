import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



const experienceSchema = new Schema({
  company: { type: String },
  location: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  role: { type: String },
  responsibility: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
})

experienceSchema.plugin(toJSON)
export const ExperienceModel = model('Experiences', experienceSchema);

