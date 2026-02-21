import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import {
  FaUserNurse,
  FaRegThumbsUp,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const icons = [
  <FaUserNurse />,
  <FaRegThumbsUp />,
  <FaMapMarkerAlt />,
  <FaClipboardCheck />,
  <FaShieldAlt />,
  <FaMobileAlt />,
];

export const Differentiators = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          headline="Excelencia Dental"
          title="¿Por qué elegir EMALIS Dental?"
          subtitle="Nos destacamos por brindarte una experiencia dental diferente, basada en el cuidado genuino y resultados duraderos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-5 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#fce4ec] text-[#8d6e63] flex items-center justify-center text-2xl shadow-sm">
                {icons[index % icons.length]}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
