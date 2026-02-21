import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { FaCalendarAlt, FaGlassCheers } from "react-icons/fa";

export const Inauguration = () => {
  const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;

  return (
    <section
      id="inauguracion"
      className="py-24 relative overflow-hidden bg-[#8d6e63]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_transparent_100%)] block" />
      </div>

      {/* Confetti particles (Subtle CSS) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Inner border / Decor */}
            <div className="absolute inset-4 border border-[#fce4ec] rounded-2xl pointer-events-none" />

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <FaGlassCheers className="text-5xl text-[#8d6e63]" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4]">
              {siteContent.inauguration.title}
            </h2>

            <div className="inline-flex items-center gap-3 bg-[#fce4ec] text-[#8d6e63] px-6 py-3 rounded-full font-semibold text-lg md:text-xl mb-8 shadow-sm">
              <FaCalendarAlt />
              <span>{siteContent.inaugurationDate}</span>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              {siteContent.inauguration.text}
            </p>

            <Button
              asChild
              href={whatsappUrl}
              target="_blank"
              size="lg"
              className="px-10 py-5 text-lg shadow-xl shadow-[#8d6e63]/30"
            >
              {siteContent.inauguration.cta}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
