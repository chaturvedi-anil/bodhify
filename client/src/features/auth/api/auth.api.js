import axiosInstance from "@/lib/axios";

export const registerApi = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);

  return response.data.data;
};
export const loginApi = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);

  return response.data;
};

export const logoutApi = async () => {
  const response = await axiosInstance.post("/auth/logout");

  return response.data.data;
};
