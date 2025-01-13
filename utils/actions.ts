"use server";

import { profileSchemas } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    console.log(formData);
    const rawData = Object.fromEntries(formData);
    const profileSchema = profileSchemas.parse(rawData);
    console.log("data sukse", profileSchema);
    return { message: "profile created!" };
  } catch (error) {
    console.log(error);
    return { message: "there was an error" };
  }
};
