import { FC } from "react";
import { ButtonProps } from "@/modules/core/components/button/button.types";
import { cn } from "@/modules/core/lib/cn";

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded bg-black px-4 py-2 text-sm text-white transition-all hover:bg-gray-800 active:bg-gray-700",
        props?.className,
      )}
    >
      {children}
    </button>
  );
};
