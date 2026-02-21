import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { FaStar, FaQuoteLeft, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/Button";

export const Testimonials = () => {
  const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;

  return (
    <section id="testimonios" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          headline="Lo que dicen de nosotros"
          title="Historias de Sonrisas"
          subtitle="Mejorar la calidad de vida de nuestros pacientes es nuestra mayor satisfacción."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteContent.testimonials.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
            >
              <FaQuoteLeft className="text-4xl text-[#fce4ec] absolute top-6 right-8 opacity-50" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed relative z-10">
                "{testimonio.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-[#8d6e63] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonio.name}</h4>
                  <p className="text-sm text-gray-500">Paciente Verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            href={whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="lg"
            className="flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <FaWhatsapp className="text-xl" /> Escríbenos y agenda tu cita
          </Button>
        </div>
      </Container>
    </section>
  );
};
