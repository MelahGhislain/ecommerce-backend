import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import logger from '../logger';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const options: ConnectOptions = {};

const connect = async () => {
  try {
    const result = await mongoose.connect(MONGO_URI ?? '', options);
    logger.info('Mongodb connected successfully!')
    if (result) return result;
  } catch (error) {
    throw new Error(`connection error: ${error}`);
  }
};

export default connect;
