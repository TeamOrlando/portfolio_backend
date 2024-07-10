import express from 'express'
import { dbConnection } from './config/db.js';
const portfolioApp = express();
import { userRouter } from './routes/user_router.js';
import { profileRouter } from './routes/profile-routes.js';




const PORT = process.env.PORT || 8990
portfolioApp.use(express.json())

dbConnection()

//help to solve conflicts with api-links
portfolioApp.use('/api/v1', userRouter);
portfolioApp.use('/api/v1', profileRouter);

portfolioApp.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})