import * as z from "zod";
export const registerSchema = z
  .object({
    name: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.email("Enter a valid email"),
    // role: z.string().min(1, "Select a role"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password cannot be empty"),
    terms: z.boolean().refine((val) => val === true, {
      message: "Accept terms to continue",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(1, "Password can not be empty"),
});
