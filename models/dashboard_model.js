import { model, Schema } from "mongoose";


const userDashboardSchema = new Schema({
  userName: { type: String },
  profile_image: { type: String, required: true },
  bio: { type: String, required: true },
  experience: { type: String, required: true },
  achievements: { type: String, require: true },
  skills: { type: String, required: true },
  projects: [
    {
      projectName: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      link: { type: String }
    }
  ]

})
export const userDashboardModel = model('Dashboard', userDashboardSchema)