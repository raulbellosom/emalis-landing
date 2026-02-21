import React from "react";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { cn } from "../../utils/cn";
import { Card } from "../ui/Card";
import {
  FaTooth,
  FaMagic,
  FaSyringe,
  FaRegLightbulb,
  FaHeartbeat,
  FaTools,
  FaPlusSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconMap = {
  limpieza: <FaMagic className="text-3xl" />,
  resinas: <FaTooth className="text-3xl" />,
  extracciones: <FaSyringe className="text-3xl" />,
  blanqueamiento: <FaRegLightbulb className="text-3xl" />,
  endodoncia: <FaHeartbeat className="text-3xl" />,
  protesis: <FaTools className="text-3xl" />,
  urgencias: <FaPlusSquare className="text-3xl" />,
};

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          headline="Nuestros Servicios"
          title="Tratamientos Especializados"
          subtitle="Ofrecemos soluciones dentales completas utilizando tecnología de vanguardia y técnicas modernas para cuidar de tu sonrisa."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {siteContent.services.map((service, index) => (
            <Card
              key={service.id}
              delay={index * 0.1}
              className="group flex flex-col items-center text-center p-8"
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500",
                  service.id === "urgencias"
                    ? "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                    : "bg-[#fce4ec] text-[#8d6e63] group-hover:bg-[#bae6fd] group-hover:text-[#0284c7]",
                )}
              >
                {iconMap[service.id]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
