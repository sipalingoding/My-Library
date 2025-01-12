"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function SignOutLink() {
  const { toast } = useToast();

  return (
    <SignOutButton redirectUrl="/">
      <button
        className="text-left w-full"
        onClick={() => {
          toast({ description: "Your account has been logout" });
        }}
      >
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
