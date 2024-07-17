import express from 'express'
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import { dbConnection } from './config/db.js';
import { userRouter } from './routes/user_router.js';
import { profileRouter } from './routes/profile-routes.js';
import { experienceRouter } from './routes/experience_routes.js';
import { achievementRouter } from './routes/achievement_routes.js';
import { volunteeringRouter } from './routes/volunteering_routes.js';
import { projectRouter } from './routes/project_routes.js';
import { skillRouter } from './routes/skills_routes.js';
// import { restartServer } from "./restart_server.js";
import cors from "cors"
import expressOasGenerator from '@mickeymond/express-oas-generator'
import session from 'express-session';
import { educationRouter } from './routes/education_routes.js';



const portfolioApp = express();
const PORT = process.env.PORT || 8990
portfolioApp.use(express.json())

expressOasGenerator.handleResponses(portfolioApp, {
  alwaysServeDocs: true,
  tags: ['auth', 'userProfile', 'skills', 'projects', 'volunteering', 'experiences', 'education', 'achievements'],
  mongooseModels: mongoose.modelNames(),
})

portfolioApp.use(cors({ credentials: true, origin: '*' }));

//session storage
portfolioApp.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  // Store session
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL
  })
}));


//help to solve conflicts with api-links
portfolioApp.use('/api/v1', userRouter);
portfolioApp.use('/api/v1', profileRouter);
portfolioApp.use('/api/v1', experienceRouter);
portfolioApp.use('/api/v1', achievementRouter);
portfolioApp.use('/api/v1', volunteeringRouter);
portfolioApp.use('/api/v1', skillRouter);
portfolioApp.use('/api/v1', projectRouter);
portfolioApp.use('/api/v1', educationRouter)


expressOasGenerator.handleRequests();
portfolioApp.use((req, res) => res.redirect('/api-docs/'));

//listening to server

dbConnection()
  .then(() => {
    portfolioApp.listen(PORT, () => {
      console.log(`Server Restarted`);
      console.log(`Server is connected to Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });