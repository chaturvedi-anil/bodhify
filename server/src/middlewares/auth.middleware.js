import { ApiError } from "../utils/ApiError.js";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Access denied. No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    throw new ApiError(403, "Invalid or expired token.");
  }
};
