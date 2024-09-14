import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Enter a valid Email"),
  password: z.string().trim().min(6, "Need at least 6 character for password"),
});

export default loginValidationSchema;
