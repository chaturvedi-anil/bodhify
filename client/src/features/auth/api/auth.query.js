import { useMutation } from "@tanstack/react-query";
import { registerApi, loginApi, logoutApi } from "./auth.api";
import { QUERY_KEYS } from "@/lib/query-keys";

export const useRegister = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.REGISTER,
    mutationFn: registerApi,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.LOGIN,
    mutationFn: loginApi,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.LOGOUT,
    mutationFn: logoutApi,
    onSuccess: () => {
      localStorage.removeItem("token");
    },
  });
};
