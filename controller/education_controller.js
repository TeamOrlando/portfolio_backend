import { Education } from "../models/education_models.js";
import { UserModel } from "../models/users_model.js";
import { EducationSchema } from "../schema/education_schema.js";


//create user education
export const addEducation = async (req, res, next) => {
  try {
    const { error, value } = EducationSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    //after, find the user with the id that you passed when creating the education
    console.log('userId', req.session.user.id)
    const userId = req.session?.user?.id || req?.user.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    //create education with the value
    const education = await Education.create({ ...value, user: user });
    //if you find the user, push the education id you just created inside
    user.education.push(education._id);

    //and save the user now with the educationId
    await user.save();

    //return the education
    res.status(201).json({ message: "Education Added Successfully", education });
  } catch (error) {
    return res.status(500).send(error);
    next(error)
  }
};


//get all user education
export const getAllUserEducation = async (req, res, next) => {
  try {
    //we are fetching education that belongs to a particular user
    const userId = req.session?.user?.id || req?.user.id;
    const alleducation = await Education.find({ user: userId });
    // if (alleducation.length == 0) {
    //   return res.status(404).send("No education added");
    // }
    res.status(200).json({ education: alleducation });
  } catch (error) {
    next(error)
  }
};



//update user education
export const updateUserEducation = async (req, res) => {
  try {
    const { error, value } = EducationSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userId = req.session?.user?.id || req?.user.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const Education = await Education.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!Education) {
      return res.status(404).send("Education not found");
    }

    res.status(201).json({ Education });
  } catch (error) {
    return res.status(500).json({ error })
  }
};

//delete user education
export const deleteUserEducation = async (req, res) => {
  try {
    const userId = req.session?.user?.id || req?.user.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).send("Education not found");
    }

    user.education.pull(req.params.id);
    await user.save();
    res.status(200).json("Education deleted");
  } catch (error) {
    return res.status(500).json({ error })
  }
};
