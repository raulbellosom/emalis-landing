import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const Card = ({ children, className, hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden",
        "border border-gray-100/50 shadow-sm",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#bae6fd]",
        className,
      )}
    >
      {/* Decorative gradient blur */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#bae6fd]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
