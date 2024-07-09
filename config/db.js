import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URL


export const dbConnection = async () => {

  try {
    await mongoose.connect(mongo_uri)
    console.log('Database connected successfully')

  } catch (error) {
    console.log(error)
  }
}