import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { generateToken } from "../utils/jwt.js";

export const registerService = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, `User with ${email} already exists`);
  }

  const createdUser = await User.create({
    name,
    email,
    password,
    role,
  });

  return createdUser;
};

export const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = generateToken(user._id, user.role);
  return token;
};

export const getMeService = async (userId) => {
  const user = await User.findById({ _id: userId });
  return user;
};

export const getAllUserService = async () => {
  const users = await User.find();
  return users;
};
