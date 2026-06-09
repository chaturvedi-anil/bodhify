import { asyncHandler } from "../utils/asyncHandler.js";
import {
  getMeService,
  getAllUserService,
  loginService,
  registerService,
} from "../services/auth.service.js";

export const register = asyncHandler(async (req, res, next) => {
  const user = await registerService(req.body);

  return res.status(201).json({
    success: true,
    message: "Registered successfully",
    data: user,
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const token = await loginService(req.body);

  return res
    .status(200)
    .json({ success: true, message: "LoggedIn successfully", token });
});

export const getMe = asyncHandler(async (req, res, next) => {
  const user = await getMeService(req.user.userId);

  return res.status(200).json({ success: true, data: user });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await getAllUserService();

  return res.status(200).json({
    success: true,
    data: users,
  });
});
