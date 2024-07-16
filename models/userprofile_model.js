import { model, Schema, Types } from "mongoose";

const userProfileSchema = new Schema({

  profilePicture: { type: String },
  location: { type: String },
  sex: { type: String, enum: ["male", "female"] },
  bio: { type: String },
  about: { type: String },
  dateOfBirth: { type: Date },
  title: { type: String, enum: ["Mr", "Mrs", "Miss", "Dr", "Esq"] },
  contact: { type: String },
  resume: { type: String },
  languages: [{ type: String }],
  githubLink: { type: String },
  linkedinLink: { type: String },
  twitterLink: { type: String },
  user: { type: Types.ObjectId, ref: 'User' }

})

export const userProfileModel = model('UserProfile', userProfileSchema);