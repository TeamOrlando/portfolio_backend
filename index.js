import express from 'express'
import { dbConnection } from './config/db.js';
import { userRouter } from './routes/user_router.js';
import { profileRouter } from './routes/profile-routes.js';
import { experienceRouter } from './routes/experience_routes.js';
// import { achievementRouter } from './routes/achievement_routes.js';



const portfolioApp = express();
const PORT = process.env.PORT || 8990
portfolioApp.use(express.json())

dbConnection()

//help to solve conflicts with api-links
portfolioApp.use('/api/v1', userRouter);
portfolioApp.use('/api/v1', profileRouter);
portfolioApp.use('/api/v1', experienceRouter)
// portfolioApp.use('/api/v1', achievementRouter)

portfolioApp.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})