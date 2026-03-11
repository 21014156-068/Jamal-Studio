import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { SOCIAL } from "./data";
import { CONTACT_INFO } from "./data";

// Unified Quick Links for the complete site
const QUICK_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};
const neumorphicStyle = (isActive = false) => ({
  background: "linear-gradient(145deg, #0c0e12, #10131a)",
  boxShadow: isActive
    ? "inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 3px rgba(255,255,255,0.05)"
    : "5px 5px 10px rgba(5, 5, 7, 0.8), -3px -3px 8px rgba(35, 35, 45, 0.2)",
  border: "1px solid rgba(255,255,255,0.03)",
});
// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  const footerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax mouse effect logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        setMousePosition({ x, y });
      }
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (footer) footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-10 px-4 z-30 overflow-hidden"
      style={{
        background: "#0c0e12",
      }}
    >
      {/* Animated floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gray-500 pointer-events-none"
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        style={{
          transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
        }}
      >
        {/* Brand section */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <motion.div
            className="px-6 py-3 rounded-xl mb-6 inline-block w-fit"
            style={neumorphicStyle()}
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Jamal
            </span>
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-md text-gray-400 bg-[#0D0F13] shadow-inner font-mono">
              STUDIO
            </span>
          </motion.div>

          <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
            Premium web solutions with fast delivery. We create stunning
            websites that convert visitors into customers.
          </p>

          <div className="flex gap-3 mb-6">
            {SOCIAL.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl"
                style={neumorphicStyle()}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon size={20} className="text-gray-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick links - UPDATED SECTION */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <motion.div
            className="px-6 py-3 rounded-xl mb-6 w-fit"
            style={neumorphicStyle()}
          >
            <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
          </motion.div>

          <ul className="space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <motion.a
                  href={l.href}
                  className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <span
                    className="w-2 h-2 rounded-full mr-3"
                    style={neumorphicStyle()}
                  ></span>
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact info */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <motion.div
            className="px-6 py-3 rounded-xl mb-6 w-fit"
            style={neumorphicStyle()}
          >
            <h3 className="text-lg font-semibold text-gray-200">
              Contact Info
            </h3>
          </motion.div>

          <div className="space-y-4">
            {CONTACT_INFO.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="flex items-start gap-3 text-gray-400 hover:text-gray-200 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg mt-1" style={neumorphicStyle()}>
                  <info.icon size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">{info.value}</p>
                  <p className="text-xs text-gray-500">{info.label}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <motion.div
            className="px-6 py-3 rounded-xl mb-6 w-fit"
            style={neumorphicStyle()}
          >
            <h3 className="text-lg font-semibold text-gray-200 ">
              Get Started
            </h3>
          </motion.div>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Ready to transform your online presence? Let's discuss your project.
          </p>

          <motion.a
            href="https://wa.me/923331482815"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-5 py-3.5 rounded-xl font-medium text-gray-100 flex items-center justify-center gap-2"
            style={neumorphicStyle()}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={18} />
            Start a Project
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom section */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white text-sm text-center md:text-left mb-4 md:mb-0">
          © 2025 Jamal Studio. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4">
            <a
              href="/privacy"
              className="text-white hover:text-gray-300 text-xs transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-white hover:text-gray-300 text-xs transition-colors"
            >
              Terms
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl"
            style={neumorphicStyle()}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} className="text-gray-300" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
