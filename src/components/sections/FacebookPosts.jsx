import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "../../data/siteContent";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { FaFacebook } from "react-icons/fa";

export const FacebookPosts = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          headline="Nuestra Comunidad"
          title="Síguenos en Facebook"
          subtitle="Mantente al día con nuestros consejos de salud bucal, testimonios y promociones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
          {/* Post 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="w-full h-[564px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex justify-center items-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0 text-gray-300">
              <FaFacebook className="text-6xl animate-pulse" />
            </div>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0LszoRgmTUZsfoQR9LJrU8aoCKgn2ACkwPjgerjoo8KYtuKwUZMSwh95o7kBtE5pxl%26id%3D61585665306519&show_text=true&width=auto"
              width="100%"
              height="564"
              style={{ border: "none", overflow: "hidden", maxWidth: "500px" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="relative z-10 w-full bg-white"
            ></iframe>
          </motion.div>

          {/* Post 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full h-[558px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex justify-center items-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0 text-gray-300">
              <FaFacebook className="text-6xl animate-pulse" />
            </div>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid032nNpMQDC3zxytnyzk4E4fh6YbKB6oYEkwH2trA7m93cV7NJnLWtjnjnFv5v45jSql%26id%3D61585665306519&show_text=true&width=auto"
              width="100%"
              height="558"
              style={{ border: "none", overflow: "hidden", maxWidth: "500px" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="relative z-10 w-full bg-white"
            ></iframe>
          </motion.div>

          {/* Post 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[481px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex justify-center items-center relative lg:col-span-1 md:col-span-2 mx-auto lg:mx-0 w-full max-w-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0 text-gray-300">
              <FaFacebook className="text-6xl animate-pulse" />
            </div>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02AssYVtiUYQSDskbzRAcNJwsx5TVzTb3AkUcugnF1RCKdr1M57A6CN2rWvLB6Hc9vl%26id%3D61585665306519&show_text=true&width=auto"
              width="100%"
              height="481"
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
                maxWidth: "500px",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="relative z-10 w-full bg-white block"
            ></iframe>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a
            href={siteContent.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#8d6e63] font-bold text-lg hover:text-[#7a5e54] transition-colors group"
          >
            <FaFacebook className="text-2xl" /> Visita nuestra página en
            Facebook
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};
