import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const DBconnection = async() =>{
    const MONODB_URL = process.env.MONGO_DB_URL;
    try {
      await mongoose.connect(MONODB_URL,{useNewUrlParser:true });
        console.log('database connected successfully');
        
    } catch (error) {
        console.error('error while connecting with the database ', error.message);
    }
}

export default DBconnection;
