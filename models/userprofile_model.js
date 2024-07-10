import { model, Schema, Types } from "mongoose";

const userProfileSchema = new Schema({
userProfile: {
    profilePicture: { type: String },
    location: { type: String },
    about: { type: String },
    contact: { type: String },
    languages: [{ type: String }],
    resume: { type: String },
    githublink: { type: String },
    linkedinlink: { type: String },
    user: {type:Types.ObjectId, ref:'User'},
  },

})

export const userProfileModel = model('userProfile', userProfileSchema);