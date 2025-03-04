import { volunteeringModel } from "../models/volunteering_models.js";
import { VolunteeringSchema } from "../schema/volunteering_schema.js";
import { UserModel } from "../models/users_model.js";




//create volunteering
export const createVolunteering = async (req, res, next) => {
  try {
    const { error, value } = VolunteeringSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;

    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const volunteering = await volunteeringModel.create({
      ...value,
      user: userSessionId,
    });

    user.volunteering.push(volunteering._id);

    await user.save();

    res.status(201).json({ message: "Volunteering Added Successfully", volunteering });
  } catch (error) {
    console.log(error);
    next(error)
  }
};


//get all user volunteering
export const getAllVolunteering = async (req, res) => {
  try {
    //we are fetching Volunteering that belongs to a particular user
    const userSessionId = req.session.user.id;
    const allVolunteering = await volunteeringModel.find({ user: userSessionId });
    // if (allVolunteering.length == 0) {
    //   return res.status(404).send("No Volunteering added");
    // }
    res.status(200).json({ Volunteering: allVolunteering });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


//updating user volunteering
export const updateVolunteering = async (req, res) => {
  try {
    const { error, value } = VolunteeringSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const volunteering = await volunteeringModel.findByIdAndUpdate(
      req.params.id,
      value,
      { new: true }
    );
    if (!volunteering) {
      return res.status(404).send("Volunteering not found");
    }

    res.status(200).json({ Volunteering });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


//delete user volunteering
export const deleteVolunteering = async (req, res) => {
  try {
    const userSessionId = req.session.user.id;
    const user = await UserModel.findById(userSessionId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const volunteering = await volunteeringModel.findByIdAndDelete(req.params.id);
    if (!volunteering) {
      return res.status(404).send("Volunteering not found");
    }

    user.volunteering.pull(req.params.id);
    await user.save();

    res.status(200).json("Volunteering deleted");
  } catch (error) {
    return res.status(500).json({ error });
  }
};