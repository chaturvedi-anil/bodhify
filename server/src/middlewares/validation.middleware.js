import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError.js";

const validate = (schema) => {
  return (req, res, next) => {
    try {
      // Validate and sanitize request body
      req.body = schema.parse(req.body);

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => issue.message);

        return next(new ApiError(400, "Validation failed", errors));
      }

      next(error);
    }
  };
};

export default validate;
