import { model, Schema, Types } from "mongoose";

const VolunteeringSchema = new Schema({
  volunteering: [
    {
      organization: { type: String },
      description: { type: String },
      role: { type: String },
      responsibility: { type: String },
      user: { type: Types.ObjectId, ref: 'User' },
    },
  ],

})

export const VolunteeringModel = model('volunteering', VolunteeringSchema);