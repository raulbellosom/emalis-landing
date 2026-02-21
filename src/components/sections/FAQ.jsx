import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "../../utils/cn";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          headline="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Encuentra respuestas rápidas a las consultas más comunes de nuestros pacientes."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {siteContent.faq.map((item, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                activeIndex === index
                  ? "border-[#8d6e63] shadow-md bg-[#faf8f7]"
                  : "border-gray-200 hover:border-[#8d6e63]/50 bg-white",
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-gray-900 pr-8">{item.q}</span>
                <FaChevronDown
                  className={cn(
                    "text-[#8d6e63] flex-shrink-0 transition-transform duration-300",
                    activeIndex === index ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
