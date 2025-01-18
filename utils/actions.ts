"use server";

import { profileSchemas } from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();

    if (!user) throw new Error("please login with user");

    const rawData = Object.fromEntries(formData);
    const profileSchema = profileSchemas.parse(rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user?.imageUrl ?? "",
        ...profileSchema,
      },
    });

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "there will be error",
    };
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
  if (user.privateMetadata.hasProfile) {
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
  return { message: "update profile action" };
};
