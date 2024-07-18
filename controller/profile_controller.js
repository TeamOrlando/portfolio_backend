import { UserProfile } from '../models/userprofile_model.js'
import { UserModel } from "../models/users_model.js";
import { userProfileSchema } from "../schema/user_profile_schema.js";



export const addProfile = async (req, res, next) => {
  try {
    const { error, value } = userProfileSchema.validate({
      ...req.body,
      profilePicture: req.files.profilePicture[0].filename,
      resume: req.files.resume[0].filename,
    });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;


    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const profile = await UserProfile.create({ ...value, user: userSessionId });

    user.userProfile = profile._id;

    await user.save();

    res.status(201).json({ message: "Profile Added Successfully", profile });
  } catch (error) {
    console.log(error);
    next(error);
  }
};



export const updateUserProfile = async (req, res) => {
  try {
    const { error, value } = userProfileSchema.validate({
      ...req.body,
      profilePicture: req.files.profilePicture[0].filename,
      resume: req.files.resume[0].filename,
    });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const profile = await UserProfile.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!profile) {
      return res.status(404).send("Profile not found");
    }

    res.status(201).json({ profile });
  } catch (error) {
    console.log(error);
  }
};




export const getUserProfile = async (req, res) => {
  try {

    const userSessionId = req.session.user.id
    const profile = await UserProfile.find({ user: userSessionId });
    if (!profile) {
      return res.status(404).send("No profile added");
    }
    res.status(200).json({ profile });
  } catch (error) {
    return res.status(500).json({ error })
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const userSessionId = req.session.user.id;
    const user = await UserProfile.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const profile = await UserProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send("Profile not found");
    }

    user.profile.pull(req.params.id);
    await user.save();

    res.status(200).json("Profile deleted");
  } catch (error) {
    return res.status(500).json({ error })
  }
};
