import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Dra. Emma, soy ${formData.name}. ${formData.message}. (Tel: ${formData.phone})`;
    const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const whatsappUrlBase = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}`;
  const phoneUrl = `tel:${siteContent.phone.replace(/[^0-9+]/g, "")}`;

  const contactCards = [
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "WhatsApp",
      link: whatsappUrlBase,
      text: siteContent.phoneFormatted,
      bg: "bg-green-50 text-green-600",
    },
    {
      icon: <FaPhoneAlt className="text-3xl" />,
      title: "Llamada",
      link: phoneUrl,
      text: siteContent.phoneFormatted,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      icon: <FaFacebook className="text-3xl" />,
      title: "Facebook",
      link: siteContent.facebookUrl,
      text: "@emalisdental",
      bg: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Ubicación",
      link: siteContent.googleMapsUrl,
      text: "San Vicente",
      bg: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fce4ec] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bae6fd] rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          headline="Contáctanos"
          title="Agenda tu cita hoy"
          subtitle="Estamos aquí para responder a tus preguntas y ayudarte a programar tu visita."
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Details Column */}
          <motion.div
            className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col items-center text-center group"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${card.bg} group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h4 className="font-bold text-gray-900">{card.title}</h4>
                <p className="text-gray-600 mt-1">{card.text}</p>
              </a>
            ))}
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envíanos un mensaje
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#8d6e63] focus:border-transparent transition-all outline-none"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#8d6e63] focus:border-transparent transition-all outline-none"
                      placeholder="322 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#8d6e63] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Me gustaría agendar una cita para..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 text-lg py-4 group"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                  Enviar solicitud por WhatsApp
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  *Serás redirigido a WhatsApp para enviar el mensaje
                  directamente.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
