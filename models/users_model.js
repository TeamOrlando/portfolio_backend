import { required } from "joi";
import { model, Schema } from "mongoose";


const userSchema = new Schema({
  user: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    userName: { type: String, unique: true },
    termsAndConditions: { type: Boolean },
  },

  userProfile: {
    profilePicture: { type: String },
    location: { type: String },
    about: { type: String },
    contact: { type: String },
    languages: [{ type: String }],
    resume: { type: String },
    githublink: { type: String },
    linkedinlink: { type: String }
  },


  skills: [
    {
      name: { type: String },
      levelOfProficiency: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] }

    }
  ],
  experience: [
    {
      company: { type: String, required: true },
      location: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      role: { type: String },
      responsibility: { type: String },
    },
  ],
  education: [
    {
      schoolName: { type: String },
      program: { type: String },
      qualification: { type: String },
      grade: { type: String },
      startDate: { type: String },
      endDate: { type: String },
    },
  ],
  achievements: [
    {
      award: { type: String },
      description: { type: String },
      image: { type: String },
      date: { type: String },
      nameOfInstitution: { type: String },
    },
  ],
  projects: [
    {
      projectName: { type: String },
      description: { type: String },
      contributors: { type: String },
      link: { type: String },
      nameOfInstitution: { type: String },
    },
  ],
  volunteering: [
    {
      organization: { type: String },
      description: { type: String },
      role: { type: String },
      responsibility: { type: String },
    },
  ],



})




export const UserModel = model('User', userSchema);