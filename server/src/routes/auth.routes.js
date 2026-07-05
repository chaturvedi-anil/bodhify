import { Router } from "express";
import {
  login,
  getMe,
  register,
  getAllUsers,
} from "../contollers/auth.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";

const authRouter = Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);

authRouter.get("/me", isAuthenticated, getMe);
authRouter.get("/users", isAuthenticated, authorize("admin"), getAllUsers);
export default authRouter;
