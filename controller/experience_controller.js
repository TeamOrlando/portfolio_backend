
import { userSchema } from "../schema/user_schema.js";
import { ExperienceModel } from "../models/experience_model.js";
import { ExperienceSchema } from "../schema/experience_schema.js";
import { UserModel } from "../models/users_model.js";


export const createUserExperience = async (req, res, next) => {
  try {
    const { error, value } = ExperienceSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;


    const user = await User.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const experience = await ExperienceModel.create({ ...value, user: userSessionId });

    user.experiences.push(experience._id)

    await user.save();

    res.status(201).json({ message: "Experience Added Successfully", experience });
  } catch (error) {
    console.log(error);
    next(error)
  }
};



export const getAllUserExperience = async (req, res) => {
  try {
    //we are fetching Experience that belongs to a particular user
    const userSessionId = req.session.user.id
    const allExperience = await ExperienceModel.find({ user: userSessionId });
    // if (allExperience.length == 0) {
    //   return res.status(404).send("No Experience added");
    // }
    res.status(200).json({ Experience: allExperience });
  } catch (error) {
    return res.status(500).json({ error })
  }
};



export const updateUserExperience = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;
    const user = await User.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const experience = await ExperienceModel.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!experience) {
      return res.status(404).send("experience not found");
    }

    res.status(200).json({ experience });
  } catch (error) {
    return res.status(500).json({ error })
  }
};


export const deleteUserExperience = async (req, res) => {
  try {


    const userSessionId = req.session.user.id;
    const user = await User.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const experience = await ExperienceModel.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).send("experience not found");
    }

    user.experiences.pull(req.params.id);
    await user.save();
    res.status(200).json("Experience deleted");
  } catch (error) {
    return res.status(500).json({ error })
  }
};
