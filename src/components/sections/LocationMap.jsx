import React from "react";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const LocationMap = () => {
  return (
    <section id="ubicacion" className="py-24 bg-white">
      <Container>
        <SectionTitle
          headline="Encuéntranos"
          title="Nuestra Ubicación"
          subtitle={siteContent.address}
        />

        <motion.div
          className="w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-lg border border-gray-200 relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* We use an iframe to embed the Google Map based on coordinates or query */}
          <iframe
            title="Ubicación EMALIS Dental"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.809315357805!2d-105.241513!3d20.811568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145b0a3ca7409%3A0x6bba46200259dc23!2s16%20de%20Octubre%20%235B%2C%20San%20Vicente%2C%20Nayarit!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          ></iframe>

          <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 sm:w-auto text-center pointer-events-auto">
            <Button
              asChild
              href={siteContent.googleMapsUrl}
              target="_blank"
              variant="primary"
              className="shadow-2xl flex items-center gap-2 mx-auto justify-center bg-white text-[#8d6e63] hover:bg-gray-100 hover:text-[#7a5e54]"
            >
              <FaMapMarkedAlt /> Abrir en Google Maps
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
