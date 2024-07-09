import express from 'express'
import { dbConnection } from './config/db.js';
const portfolioApp = express();


const PORT = process.env.PORT || 8999



dbConnection()
portfolioApp.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})