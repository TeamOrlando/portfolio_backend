import { model, Schema } from "mongoose";


const userSchema = new Schema({
  user: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    userName: { type: String, unique: true },
    termsAndConditions: { type: Boolean },
    user: {type:Types.ObjectId, ref:'User'},
  },

})

export const UserModel = model('User', userSchema);