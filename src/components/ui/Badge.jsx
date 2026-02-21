import React from "react";
import { cn } from "../../utils/cn";

export const Badge = ({ children, className, variant = "primary" }) => {
  const variants = {
    primary: "bg-[#fce4ec] text-[#8d6e63]",
    light: "bg-white/80 backdrop-blur-sm text-gray-800",
    dark: "bg-gray-800 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
