import express from 'express'
import MongoStore from 'connect-mongo';
import { dbConnection } from './config/db.js';
import { userRouter } from './routes/user_router.js';
import { profileRouter } from './routes/profile-routes.js';
import { experienceRouter } from './routes/experience_routes.js';
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
portfolioApp.use('/api/v1', experienceRouter)

//listening to server
portfolioApp.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})