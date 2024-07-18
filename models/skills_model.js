import { model, Schema, Types } from 'mongoose';
import { toJSON } from '@reis/mongoose-to-json';
const skillsSchema = new Schema({
  name: { type: String },
  levelOfProficiency: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced', 'expert'],
  },
  user: { type: Types.ObjectId, ref: 'User' },
});
skillsSchema.plugin(toJSON)
export const SkillsModel = model('Skill', skillsSchema);
