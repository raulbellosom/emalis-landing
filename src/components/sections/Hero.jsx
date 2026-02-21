import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import draEmma from "../../assets/Dra_Emma_Elizalde.png";
import logo from "../../assets/logo.jpeg";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-[#fce4ec] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-[#bae6fd] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Decorative dots / shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] left-[10%] opacity-20 hidden md:block select-none"
      >
        <svg
          w="60"
          h="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          <circle cx="5" cy="5" r="5" fill="#8d6e63" />
          <circle cx="25" cy="5" r="5" fill="#8d6e63" />
          <circle cx="45" cy="5" r="5" fill="#8d6e63" />
          <circle cx="5" cy="25" r="5" fill="#8d6e63" />
          <circle cx="25" cy="25" r="5" fill="#8d6e63" />
          <circle cx="45" cy="25" r="5" fill="#8d6e63" />
          <circle cx="5" cy="45" r="5" fill="#8d6e63" />
          <circle cx="25" cy="45" r="5" fill="#8d6e63" />
          <circle cx="45" cy="45" r="5" fill="#8d6e63" />
        </svg>
      </motion.div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2 w-full">
              {siteContent.hero.chips.map((chip, idx) => (
                <Badge key={idx} variant="light">
                  {chip}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {siteContent.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              {siteContent.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full">
              <Button
                asChild
                href={whatsappUrl}
                target="_blank"
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto whitespace-nowrap flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" /> Agendar por WhatsApp
              </Button>
              <Button
                asChild
                href={`tel:${siteContent.phone.replace(/[^0-9+]/g, "")}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-[#bae6fd] text-[#0284c7] hover:bg-[#bae6fd] hover:text-[#0c4a6e]"
              >
                <FaPhoneAlt className="mr-2" /> Llamar ahora
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: y1 }}
          >
            <div className="relative inline-block mt-8 lg:mt-0">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/60 to-transparent pointer-events-none z-20" />
                <img
                  src={draEmma}
                  alt={siteContent.doctorName}
                  className="relative z-10 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute z-20 bottom-10 -left-6 sm:bottom-16 sm:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#fce4ec] flex-shrink-0">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    Dra. Emma María
                  </p>
                  <p className="text-xs text-[#8d6e63] font-medium mt-0.5">
                    Atención especializada
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
