import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const EducationSchema = new Schema({
  schoolName: { type: String },
  location: { type: String },
  program: { type: String },
  qualification: { type: String },
  grade: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  user: { type: Types.ObjectId, ref: 'User', select: false }
}, {
  timestamps: true
});

EducationSchema.plugin(toJSON);
export const Education = model("Education", EducationSchema);