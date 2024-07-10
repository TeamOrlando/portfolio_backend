import { model, Schema, Types } from "mongoose";

const skillsSchema = new Schema({
    skills: [
        {
          name: { type: String },
          levelOfProficiency: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
          user: {type:Types.ObjectId, ref:'User'},
    
        }
      ],
})

export const SkillsModel = model('Skills', skillsSchema);