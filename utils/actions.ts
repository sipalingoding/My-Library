"use server";

import { profileSchemas, validateWithZodSchema } from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handlingError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "there will be error",
  };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();

    if (!user) throw new Error("please login with user");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZodSchema(profileSchemas, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user?.imageUrl ?? "",
        ...validateField,
      },
    });

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    handlingError(error);
  }

  redirect("/");
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profileImage = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profileImage?.profileImage;
};

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("you must be logged in");
  }
  if (!user.privateMetadata.hasProfile) {
    redirect("/profile/create");
  }

  return user;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) {
    redirect("/profile/create");
  }

  return profile;
};

export const updateProfileAction = async (
  prevData: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWithZodSchema(profileSchemas, rawData);
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validateFields,
    });
    revalidatePath("/profile");
    return { message: "update profile action" };
  } catch (error) {
    return handlingError(error);
  }
};
