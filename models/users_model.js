import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  otherNames: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  userName: { type: String },
  termsAndConditions: { type: Boolean },
  education: [{ type: Types.ObjectId, ref: 'Education' }],
  skills: [{ type: Types.ObjectId, ref: 'Skill' }],
  achievements: [{ type: Types.ObjectId, ref: 'Achievement' }],
  projects: { type: Types.ObjectId, ref: 'Project' },
  userProfile: { type: Types.ObjectId, ref: 'UserProfile' },
  volunteering: [{ type: Types.ObjectId, ref: 'Volunteering' }],
  experiences: [{ type: Types.ObjectId, ref: 'Experiences' }],

})
userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema);