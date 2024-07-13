import { ExperienceSchema } from "../schema/experience_schema.js";


export const experience = (req, res) => {
  const { error, value } = ExperienceSchema.validate(req.body);
  if (error) {
    res.status(400).send(error);

  }

}