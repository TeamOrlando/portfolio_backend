import { model, Schema, Types } from 'mongoose';

const skillsSchema = new Schema({
  name: { type: String },
  levelOfProficiency: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced', 'expert'],
  },
  user: { type: Types.ObjectId, ref: 'User' },
});

export const SkillsModel = model('Skill', skillsSchema);
