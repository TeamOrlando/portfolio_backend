import express from 'express'
import MongoStore from 'connect-mongo';
import { dbConnection } from './config/db.js';
import { userRouter } from './routes/user_router.js';
import { profileRouter } from './routes/profile-routes.js';
import { experienceRouter } from './routes/experience_routes.js';
import { achievementRouter } from './routes/achievement_routes.js';
import {volunteeringRouter} from './routes/volunteering_routes.js';
import { projectRouter } from './routes/project_routes.js';
import { skillRouter } from './routes/skills_routes.js';
import session from 'express-session';



const portfolioApp = express();
const PORT = process.env.PORT || 8990
portfolioApp.use(express.json())

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
dbConnection()

//help to solve conflicts with api-links
portfolioApp.use('/api/v1', userRouter);
portfolioApp.use('/api/v1', profileRouter);
portfolioApp.use('/api/v1', experienceRouter);
portfolioApp.use('/api/v1', achievementRouter);
portfolioApp.use('/api/v1', volunteeringRouter);
portfolioApp.use('/api/v1', skillRouter);
portfolioApp.use('/api/v1', projectRouter);

//listening to server
portfolioApp.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})