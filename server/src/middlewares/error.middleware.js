import { ApiError } from "../utils/ApiError.js";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";
import { ZodError } from "zod";

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  // --- Mongoose: invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // --- Mongoose: duplicate key
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue).join(", ");
    message = `Duplicate value for field: ${field}`;
  }

  // --- Mongoose: validation errors
  if (err.name === "ValidationError") {
    statusCode = 422;
    message = "Validation failed";
    // Turn the errors object into a clean array of messages
    // e.g. ["Name is required", "Age must be at least 18"]
    errors = Object.values(err.errors).map((e) => e.message);
  }

  // --- JWT: token is invalid or tampered ---
  if (err.name === "JsonWebTokenError") {
    statusCode = 401; // 401 Unauthorized
    message = "Invalid token. Please log in again.";
  }

  // --- JWT: token has expired ---
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Your session has expired. Please log in again.";
  }

  logger.error(`${statusCode} — ${message}`);

  // In development, log the full stack trace for easier debugging.
  // In production, keep logs cleaner.
  if (env.NODE_ENV === "development") {
    logger.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errors: errors,

    // Only include the stack trace in development mode.
    // NEVER expose this in production.
    // ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export { errorHandler };
