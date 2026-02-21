import React from "react";
import { siteContent } from "../../data/siteContent";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatingWhatsApp = () => {
  const message = encodeURIComponent(siteContent.whatsappMessage);
  const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 hidden md:block" />
      <FaWhatsapp className="text-white text-3xl z-10" />
    </motion.a>
  );
};
