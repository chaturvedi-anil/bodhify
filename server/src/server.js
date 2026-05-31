import dotenv from "dotenv";
dotenv.config();
import { logger } from "./utils/logger.js";
import app from "./app.js";

const PORT = process.env.PORT || "5000";
const startServer = () => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error(`Error in starting the server`);
  }
};

startServer();
