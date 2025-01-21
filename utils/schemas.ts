import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchemas = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string().min(2, {
    message: "first name at least must be 2 char",
  }),
  lastName: z.string().min(2, {
    message: "last name at least must be 2 char",
  }),
  userName: z.string().min(2, {
    message: "user name at least must be 2 char",
  }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = result.error.errors.map((error) => error.message);
    throw new Error(error.join(","));
  }

  return result.data;
}
