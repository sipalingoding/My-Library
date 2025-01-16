import React from "react";
import { LuUser } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

async function UserIcon() {
  const iconProfile = await fetchProfileImage();
  if (iconProfile)
    return (
      <img src={iconProfile} className="w-6 h-6 object-cover rounded-full" />
    );

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
