import * as z from "zod";

export const profileSchemas = z.object({
  fistName: z.string().min(2),
  lastName: z.string().min(2),
  userName: z.string().min(2),
});
