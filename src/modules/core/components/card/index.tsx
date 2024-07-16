import { FC, PropsWithChildren } from "react";
import { cn } from "@/modules/core/lib/cn";

export const Card: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col rounded p-4 shadow-md", className)}>
      {children}
    </div>
  );
};
