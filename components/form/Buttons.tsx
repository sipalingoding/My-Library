"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className={`capitalize ${className}`}>
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
