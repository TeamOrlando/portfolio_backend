import { EducationModel } from "../models/education_models.js";
import { UserModel } from "../models/users_model.js";
import 

export const addEducation = async(req, res, next) => {
    try {
        const { error, value } = educationSchema.validate(req.body)
        if(error){
            return res.status(400).send(error.details[0].message)
        }
        console.log('value', value)
        const education =await EducationModel.create(value)
        res.status(201).json(education)
    } catch (error) {
        
    }
}

export const getAllEducation = async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
}