import { z } from "zod";

export const userSchema = z.object({
  avatar: z.string().min(1, "Avatar is required"),
  userName: z.string().min(3, "Username must be at least 3 characters"),
});

export type RegisterUserFormInputs = z.infer<typeof userSchema>;
