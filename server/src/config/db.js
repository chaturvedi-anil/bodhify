import mongoose from "mongoose";
import { logger } from "../utils/logger.js";
import { env } from "./env.js";

const URI = env.MONGODB_URI;
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error("Database is not connecting : ", error);
    process.exit(1);
  }
};
