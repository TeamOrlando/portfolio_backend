import { model, Schema, Types} from "mongoose";

const projectSchema = new Schema({
    projects: [
        {
          projectName: { type: String },
          description: { type: String },
          contributors: { type: String },
          link: { type: String },
          nameOfInstitution: { type: String },
          user: {type:Types.ObjectId, ref:'User'},
        },
      ],
})

export const ProjectModel = model('Projects', projectSchema);