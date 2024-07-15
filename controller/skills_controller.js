import { SkillsModel } from "../models/skills_model.js"
import { SkillsSchema } from "../schema/skills_schema.js";
import { UserModel } from "../models/users_model.js";


export const createUserSkill = async (req, res) => {
    try {
      const { error, value } = SkillsSchema.validate(req.body);
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId = req.session.user.id;
     
      const user = await UserModel.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const skill = await SkillsModel.create({ ...value, user: userSessionId });
  
      user.skills.push(skill._id)
  
      await user.save();
  
      res.status(201).json({ skill });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  export const getAllUserSkills = async (req, res) => {
    try {
      //we are fetching Skill that belongs to a particular user
      const userSessionId = req.session.user.id
      const allSkill = await SkillsModel.find({ user: userSessionId });
      if (allSkill.length == 0) {
        return res.status(404).send("No Skill added");
      }
      res.status(200).json({ Skills: allSkill });
    } catch (error) {
      return res.status(500).json({error})
    }
  };
  
  
  
  export const updateUserSkill = async (req, res) => {
      try {
        const { error, value } = SkillsSchema.validate(req.body);
  
    
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        const userSessionId = req.session.user.id; 
        const user = await UserModel.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const skill = await SkillsModel.findByIdAndUpdate(req.params.id, value, { new: true });
          if (!skill) {
              return res.status(404).send("Skill not found");
          }
    
        res.status(200).json({ skill });
      } catch (error) {
        return res.status(500).json({error})
      }
    };
  
  
    export const deleteUserSkill = async (req, res) => {
      try {
       
    
        const userSessionId = req.session.user.id; 
        const user = await UserModel.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const skill = await SkillsModel.findByIdAndDelete(req.params.id);
          if (!skill) {
              return res.status(404).send("Skill not found");
          }
    
          user.skills.pull(req.params.id);
          await user.save();
        res.status(200).json("Skill deleted");
      } catch (error) {
        return res.status(500).json({error})
      }
    };
    