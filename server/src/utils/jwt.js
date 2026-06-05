import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { logger } from "./logger.js";
import { ApiError } from "./ApiError.js";

export const generateToken = (userId, role) => {
  try {
    if (!env.JWT_SECRET) {
      throw new ApiError(500, "JWT_SECRET is not configured");
    }

    return jwt.sign({ userId, role }, env.JWT_SECRET, {
      expiresIn: "1d",
    });
  } catch (error) {
    logger.error(`Error generating JWT token: ${error.message}`);
    throw new ApiError(500, "Something went wrong");
  }
};

export const verifyToken = (token) => {
  try {
    if (!env.JWT_SECRET) {
      throw new ApiError(500, "JWT_SECRET is not configured");
    }

    return jwt.verify(token, env.JWT_SECRET);
  } catch (error) {
    logger.error(`Error verifying JWT token: ${error.message}`);
    throw new ApiError(401, "Invalid or expired token");
  }
};
