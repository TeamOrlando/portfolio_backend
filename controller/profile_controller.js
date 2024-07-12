
import { userProfileModel } from "../models/userprofile_model.js";
import { userProfileSchema } from "../schema/user_profile_schema.js";

export const addProfile = async (req, res) => {

  try {
    const { error, value } = userProfileSchema.validate(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    //create education with the value
    const profile = await userProfileModel.create(value)

    //after, find the user with the id that you passed when creating the profile 
    const user = await userProfileModel.findById(value.user);
    if (!user) {
      return res.status(404).send('User not found');
    }

    //if you find the user, push the profile id you just created inside
    user.profile.push(profile._id);

    //and save the user now with the profileId
    await user.save();

    //return the profile
    res.status(201).json({ profile })

  } catch (error) {
    return res.status(500).send(error)
  }
}
//get all profile
export const getAllUserProfile = async (req, res, next) => {

  try {
    //we are fetching experience that belongs to a particular user
    const userId = req.params.id
    const allProfile = await userProfileModel.find({ user: userId })
    if (allProfile.length == 0) {
      return res.status(404).send('No experience added')
    }
    res.status(200).json({ profile: allProfile })
  } catch (error) {
    next(error)
  }

}

export const getOneProfile = async (req, res) => {
  const profile = await userProfileModel.findById(req.params.id)
  res.status(200).json(profile)

}