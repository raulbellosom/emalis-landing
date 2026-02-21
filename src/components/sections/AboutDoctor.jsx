import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

export const AboutDoctor = () => {
  return (
    <section id="doctora" className="py-24 bg-gray-50 relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center items-center py-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
              {/* Top Left Image */}
              <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-0 transform -rotate-6">
                <img
                  src="/src/assets/recepcion.jpeg"
                  className="w-full h-full object-cover"
                  alt="Recepción"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-0 w-40 h-28 md:w-56 md:h-40 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-20 transform rotate-3">
                <img
                  src="/src/assets/sala_espera.jpeg"
                  className="w-full h-full object-cover"
                  alt="Sala de espera"
                />
              </div>

              {/* Main Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-64 md:h-80 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10">
                <img
                  src="/src/assets/consultorio_2.jpeg"
                  className="w-full h-full object-cover"
                  alt="Consultorio"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <p className="font-bold text-sm md:text-lg leading-tight">
                    {siteContent.doctorName}
                  </p>
                </div>
              </div>

              {/* Decor Badge */}
              <motion.div
                className="absolute -right-2 top-1/4 bg-white p-3 rounded-xl shadow-xl flex items-center justify-center border border-gray-100 z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <img
                  src="/src/assets/logo.jpeg"
                  alt="EMALIS"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionTitle
              headline="Tu sonrisa en buenas manos"
              title={siteContent.about.title}
              centered={false}
              className="mb-8"
            />

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteContent.about.description}
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 w-full">
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#fce4ec] text-[#8d6e63] flex items-center justify-center text-lg">
                  ✦
                </span>
                Nuestros Valores
              </h4>
              <ul className="space-y-4">
                {siteContent.about.values.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#8d6e63] mt-1 flex-shrink-0 text-xl" />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
