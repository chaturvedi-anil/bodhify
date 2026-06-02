import { asyncHandler } from "../utils/asyncHandler.js";
import { getMe, loginUser, registerUser } from "../services/auth.service.js";

export const register = asyncHandler(async (req, res, next) => {
  const user = await registerUser(req.body);

  return res.status(201).json({
    success: true,
    message: "Registered successfully",
    data: user,
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const token = await loginUser(req.body);

  return res
    .status(200)
    .json({ success: true, message: "LoggedIn successfully", token });
});

export const me = asyncHandler(async (req, res, next) => {
  const user = await getMe(req.user.userId);

  return res.status(200).json({ success: true, data: user });
});
