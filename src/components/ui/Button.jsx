import React from "react";
import { cn } from "../../utils/cn";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  asChild,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

  const variants = {
    primary:
      "bg-[#8d6e63] text-white hover:bg-[#a68a7e] shadow-md hover:shadow-lg focus:ring-[#8d6e63]",
    secondary:
      "bg-[#bae6fd] text-[#0284c7] hover:bg-[#7dd3fc] shadow-sm focus:ring-[#bae6fd]",
    outline:
      "border-2 border-[#8d6e63] text-[#8d6e63] hover:bg-[#8d6e63] hover:text-white focus:ring-[#8d6e63]",
    ghost: "text-[#8d6e63] hover:bg-gray-100 focus:ring-gray-200",
    whatsapp:
      "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg focus:ring-green-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "p-3",
  };

  const Component = asChild ? "a" : "button";

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
