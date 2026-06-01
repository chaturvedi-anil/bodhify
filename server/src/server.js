import { connectDb } from "./config/db.js";
import { logger } from "./utils/logger.js";
import { env } from "./config/env.js";
import app from "./app.js";

const startServer = () => {
  try {
    connectDb();
    app.listen(env.PORT, () => {
      logger.info(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error(`Error in starting the server`);
  }
};

startServer();
