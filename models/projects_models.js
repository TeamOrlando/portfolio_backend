import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
const projectSchema = new Schema({
  projectName: { type: String },
  description: { type: String },
  contributors: { type: String },
  skills: { type: String },
  link: { type: String },
  image: { type: String },
  nameOfInstitution: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  user: { type: Types.ObjectId, ref: 'User' }

})

projectSchema.plugin(toJSON)
export const ProjectModel = model('Projects', projectSchema);