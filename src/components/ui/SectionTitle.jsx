import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const SectionTitle = ({
  headline,
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {headline && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[#8d6e63] font-semibold tracking-wider uppercase text-sm mb-2 block"
        >
          {headline}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl text-lg sm:text-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
