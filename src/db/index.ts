import mongoose, { ConnectOptions } from "mongoose"
import dotenv from 'dotenv';
dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const options: ConnectOptions = {
    
}

const connect = async () =>{
    try {
        const result = await mongoose.connect(MONGO_URI?? "", options )
        if (result) return result
    } catch (error) {
        throw new Error(`connection error: ${error}`) 
    }
}

export default connect
