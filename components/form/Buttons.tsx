"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: buttonSize;
};

type buttonSize = "default" | "lg" | "sm";

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size={size} className={`capitalize ${className}`}>
      {pending ? (
        <>
          <ReloadIcon /> Please wait....
        </>
      ) : (
        text
      )}
    </Button>
  );
}
