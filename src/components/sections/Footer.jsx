import React from "react";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import {
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t-4 border-[#8d6e63]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="EMALIS"
                className="w-12 h-12 rounded-full border-2 border-[#fce4ec]"
              />
              <span className="text-2xl font-bold tracking-wide text-white">
                EMALIS Dental
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sonrisas saludables, atención cálida y profesional. Tu bienestar
              es nuestra prioridad.
            </p>
            <div className="flex gap-4">
              <a
                href={siteContent.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                "Inicio",
                "Servicios",
                "Inauguración",
                "Doctora",
                "Testimonios",
                "Ubicación",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("ó", "o")}`}
                    className="text-gray-400 hover:text-[#fce4ec] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8d6e63]" />{" "}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">
              Información de Contacto
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#8d6e63] mt-1 flex-shrink-0 text-xl" />
                <p className="text-gray-400 text-sm">{siteContent.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#8d6e63] mt-1 flex-shrink-0 text-xl" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteContent.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {siteContent.phone}
                  </a>
                  <span className="text-gray-500 text-xs mt-1">
                    {siteContent.schedule}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} EMALIS Dental. Todos los derechos
            reservados.
          </p>
          <p>Diseñado con dedicación para sonrisas saludables.</p>
        </div>
      </Container>
    </footer>
  );
};
