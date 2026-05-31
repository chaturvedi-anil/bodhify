// ============================================================
//  ApiError.js
//  A custom Error class for all API errors in your app.
//
//  WHY do we need this?
//  ---------------------
//  JavaScript's built-in Error only has a "message".
//  In an API, we also need:
//    - statusCode  → what HTTP status to send (404, 400, 500 …)
//    - errors      → a list of detailed validation errors
//    - success     → always false, so the client knows it failed
//
//  By extending the built-in Error class we get all its power
//  (stack trace, instanceof checks) PLUS our own custom fields.
// ============================================================

class ApiError extends Error {
  /**
   * @param {number}   statusCode  - HTTP status code  e.g. 404, 400, 500
   * @param {string}   message     - Human-readable error description
   * @param {Array}    errors      - (optional) array of detailed error objects
   *                                 useful for validation errors from Joi / Zod
   * @param {string}   stack       - (optional) custom stack trace string
   */
  constructor(
    statusCode,
    message = "Something went wrong", // default message if none is provided
    errors = [], // default to empty array
    stack = "", // default to empty string
  ) {
    // ---------------------------------------------------------
    // super(message) calls the parent Error constructor.
    // This sets this.message and creates the stack trace.
    // ---------------------------------------------------------
    super(message);

    // Attach our custom fields to this error object
    this.statusCode = statusCode;
    this.message = message;
    this.success = false; // API errors are never "successful"
    this.errors = errors; // extra detail, e.g. ["email is required"]

    // ---------------------------------------------------------
    // Stack trace handling:
    //
    // If a custom stack string is provided, use it directly.
    // Otherwise ask Node.js to generate a clean stack trace
    // starting from THIS call (not from deep inside Error internals).
    // ---------------------------------------------------------
    if (stack) {
      this.stack = stack;
    } else {
      // captureStackTrace is a V8 (Node.js) specific method.
      // It removes ApiError itself from the trace so the trace
      // points to the place in YOUR code that threw the error.
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// ============================================================
//  USAGE EXAMPLES  (how you throw these in route handlers)
// ============================================================

/*

  // 1. Resource not found
  throw new ApiError(404, "User not found");

  // 2. Bad request (e.g. missing field)
  throw new ApiError(400, "Validation failed", ["email is required", "password too short"]);

  // 3. Unauthorized
  throw new ApiError(401, "You must be logged in");

  // 4. Forbidden
  throw new ApiError(403, "You don't have permission to do this");

  // 5. Internal server error
  throw new ApiError(500, "Database connection failed");

*/
