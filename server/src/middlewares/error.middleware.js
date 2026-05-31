// ============================================================
//  errorHandler.js
//  A global Express error-handling middleware.
//
//  HOW Express error handling works:
//  -----------------------------------
//  Express has a special kind of middleware with FOUR parameters:
//       (err, req, res, next)
//  The first parameter "err" is what makes it an error handler.
//  Express will SKIP all normal middleware and jump straight here
//  whenever you call next(error) or throw inside asyncHandler.
//
//  Register this LAST in your app.js / server.js after all routes:
//       app.use(errorHandler);
// ============================================================

import { ApiError } from "./ApiError.js";

/**
 * Global error handler middleware.
 *
 * Express recognises this as an error handler because it has
 * exactly 4 arguments: (err, req, res, next)
 *
 * @param {Error}    err  - The error that was thrown / passed to next()
 * @param {object}   req  - Express request object
 * @param {object}   res  - Express response object
 * @param {function} next - Express next function (required by Express signature, rarely used here)
 */
const errorHandler = (err, req, res, next) => {
  // ----------------------------------------------------------
  // STEP 1 — Set default values
  //
  // Not every error will be an ApiError we threw ourselves.
  // Some errors come from third-party libraries or Node.js itself
  // and they won't have statusCode / errors fields.
  // We set sensible defaults so we always send a valid response.
  // ----------------------------------------------------------
  let statusCode = err.statusCode || 500; // default: Internal Server Error
  let message = err.message || "Internal Server Error";
  let errors = err.errors || []; // extra detail array (may be empty)

  // ----------------------------------------------------------
  // STEP 2 — Handle specific known error types
  //
  // Some libraries throw their own error objects with different
  // shapes. We normalise them here so our API always responds
  // in the same consistent format.
  // ----------------------------------------------------------

  // --- Mongoose: invalid ObjectId  e.g. /users/not-a-valid-id ---
  // Mongoose throws a CastError when you pass a badly-shaped ID.
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
    // e.g. "Invalid _id: abc123xyz"
  }

  // --- Mongoose: duplicate key  e.g. email already registered ---
  // MongoDB throws error code 11000 when a unique field is duplicated.
  if (err.code === 11000) {
    statusCode = 409; // 409 Conflict
    // Extract the field name from the error keyValue object
    // e.g. { email: "john@example.com" }  →  "email"
    const field = Object.keys(err.keyValue).join(", ");
    message = `Duplicate value for field: ${field}`;
  }

  // --- Mongoose: validation errors (required fields, min/max, etc.) ---
  // Mongoose collects ALL validation failures into err.errors object.
  if (err.name === "ValidationError") {
    statusCode = 422; // 422 Unprocessable Entity
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

  // ----------------------------------------------------------
  // STEP 3 — Log the error (server-side only)
  //
  // We log the FULL error (including stack trace) on the server
  // so developers can debug it, but we NEVER send the stack
  // trace to the client — it reveals internal code structure.
  // ----------------------------------------------------------
  console.error(`[ERROR] ${statusCode} — ${message}`);

  // In development, log the full stack trace for easier debugging.
  // In production, keep logs cleaner.
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  // ----------------------------------------------------------
  // STEP 4 — Send a consistent JSON response to the client
  //
  // No matter what went wrong, the client always gets the same
  // shape of response. This makes error handling easy on the
  // frontend — they always know where to look.
  //
  // Response shape:
  // {
  //   "success": false,
  //   "statusCode": 404,
  //   "message": "User not found",
  //   "errors": []
  // }
  // ----------------------------------------------------------
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
    errors: errors,

    // Only include the stack trace in development mode.
    // NEVER expose this in production.
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export { errorHandler };

// ============================================================
//  HOW TO WIRE IT ALL TOGETHER  (app.js / server.js)
// ============================================================

/*
  import express         from "express";
  import { errorHandler } from "./middlewares/errorHandler.js";
  import { asyncHandler } from "./utils/asyncHandler.js";
  import { ApiError }     from "./utils/ApiError.js";

  const app = express();
  app.use(express.json());

  // --- Your routes ---
  app.get("/users/:id", asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    // If no user found, throw an ApiError.
    // asyncHandler catches it and passes it to errorHandler.
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    res.json({ success: true, data: user });
  }));

  // --- 404 handler for unknown routes ---
  // Place this AFTER all your routes but BEFORE errorHandler
  app.use((req, res, next) => {
    next(new ApiError(404, `Route ${req.originalUrl} not found`));
  });

  // --- Global error handler ---
  // MUST be the very last middleware registered
  app.use(errorHandler);

  app.listen(3000);
*/
