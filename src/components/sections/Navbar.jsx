import React, { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { siteContent } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Inauguración", href: "#inauguracion" },
    { name: "Doctora", href: "#doctora" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  const whatsappUrl = `https://wa.me/${siteContent.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <img
              src="/src/assets/logo.jpeg"
              alt={siteContent.clinicName}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-all",
                isScrolled && "shadow-sm",
              )}
            />
            <div className="flex flex-col justify-center text-left">
              <span className="font-extrabold text-[#fce4ec] text-lg md:text-xl tracking-widest leading-none drop-shadow-sm [&:not(:hover)]:text-[#e91e63] transition-colors">
                EMALIS
              </span>
              <span className="font-normal text-gray-500 text-xs md:text-sm tracking-wide leading-none mt-1">
                Dental
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <ul className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#8d6e63] font-medium text-sm xl:text-base transition-colors py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              href={whatsappUrl}
              target="_blank"
              variant="whatsapp"
              size="sm"
              className="shadow-md whitespace-nowrap flex items-center gap-2 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" /> Agendar por WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#8d6e63] focus:outline-none p-2"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 overflow-hidden text-center",
          isMobileMenuOpen
            ? "max-h-screen py-4 border-t opacity-100"
            : "max-h-0 py-0 border-transparent opacity-0",
        )}
      >
        <ul className="px-4 py-2 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#8d6e63] hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 w-full flex justify-center">
            <Button
              asChild
              href={whatsappUrl}
              target="_blank"
              variant="whatsapp"
              className="w-4/5 whitespace-nowrap flex items-center justify-center gap-2 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" /> Agendar por WhatsApp
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
