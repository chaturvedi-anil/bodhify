import { Router } from "express";
import { login, me, register } from "../contollers/auth.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";

const authRouter = Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);

authRouter.get("/me", isAuthenticated, me);
export default authRouter;
