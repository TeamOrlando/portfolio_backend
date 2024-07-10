import { model, Schema, Types } from "mongoose";

const volunteeringSchema = new Schema({
    volunteering: [
        {
          organization: { type: String },
          description: { type: String },
          role: { type: String },
          responsibility: { type: String },
          user: {type:Types.ObjectId, ref:'User'},
        },
      ],

})

export const volunteeringModel = model('volunteering', volunteeringSchema);