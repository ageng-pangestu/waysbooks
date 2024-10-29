import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required") // Email is required
    .email("Invalid email format"), // Must be a valid email format
  password: z
    .string()
    .min(6, "Password must be at least 6 characters") // Password must be at least 6 characters long
    .max(20, "Password must be at most 20 characters") // Max length of 20 characters
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
    .regex(/[0-9]/, "Password must contain at least one number") // At least one number
    .regex(/[\W_]/, "Password must contain at least one special character"), // At least one special character
  fullName: z
    .string()
    .min(1, "Full Name is required") // Full name is required
    .max(50, "Full Name must be at most 50 characters"), // Max length for the full name
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
