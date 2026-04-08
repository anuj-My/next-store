"use client";

import { ImSpinner } from "react-icons/im";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { SignInButton } from "@clerk/nextjs";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { LuTrash2, LuPenSquare } from "react-icons/lu";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "Submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <ImSpinner className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
