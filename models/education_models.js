import { model, Schema, Types } from "mongoose";

const educationSchema = new Schema({
  schoolName: { type: String },
  program: { type: String },
  qualification: { type: String },
  grade: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
})

export const EducationModel = model('Education', educationSchema);