import React from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Inauguration } from "./components/sections/Inauguration";
import { AboutDoctor } from "./components/sections/AboutDoctor";
import { Differentiators } from "./components/sections/Differentiators";
import { Testimonials } from "./components/sections/Testimonials";
import { LocationMap } from "./components/sections/LocationMap";
import { Contact } from "./components/sections/Contact";
import { FacebookPosts } from "./components/sections/FacebookPosts";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col selection:bg-[#fce4ec] selection:text-[#8d6e63] overflow-x-hidden w-full relative">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Inauguration />
        <AboutDoctor />
        <Differentiators />
        {/* <Testimonials /> */}
        <LocationMap />
        <Contact />
        <FacebookPosts />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
