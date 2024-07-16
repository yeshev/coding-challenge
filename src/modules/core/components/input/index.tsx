import { FC } from "react";
import { InputProps } from "./input.types";
import { cn } from "@/modules/core/lib/cn";

export const Input: FC<InputProps> = ({ type = "text", ...props }) => {
  return (
    <input
      type={type}
      {...props}
      className={cn(
        "w-full rounded-lg border border-gray-400 px-4 py-2 outline-offset-4 outline-black transition-all focus:outline-2",
        props.className,
      )}
    />
  );
};
