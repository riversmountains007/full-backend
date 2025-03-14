import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config'



const connectDB = async()=>{
    try {
  const connectionRes = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)

  //console log mongoose host from connectionRes  

  console.log('host : ',connectionRes.connection.host)
        
    } catch (error) {
        console.error("db connction err",error)
        process.exit(1)
    }
}

export  default connectDB;