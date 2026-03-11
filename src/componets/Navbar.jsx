import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

// Unified Navigation Links
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

// Animation variants
const navFadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const listStagger = {
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const linkAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Handle scroll and active path detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);

      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    // If you are using a framework like Next.js or React Router,
    // replace window.location.href with the router's push method.
    if (href.startsWith("#")) {
      window.location.hash = href;
    } else {
      window.location.href = href;
    }
  };

  // Neumorphic style object for cleaner code
  const neumorphicStyle = (isActive = false) => ({
    background: "linear-gradient(145deg, #0c0e12, #10131a)",
    boxShadow: isActive
      ? "inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 3px rgba(255,255,255,0.05)"
      : "5px 5px 10px rgba(5, 5, 7, 0.8), -3px -3px 8px rgba(35, 35, 45, 0.2)",
    border: "1px solid rgba(255,255,255,0.03)",
  });

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navFadeIn}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#000000]/95 backdrop-blur-xl"
          : "py-5 bg-[#000000]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Brand Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleNavClick("/")}
        >
          <div
            className="px-4 py-2 rounded-xl flex items-center"
            style={neumorphicStyle()}
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Jamal
            </span>
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-md text-gray-400 bg-[#0D0F13] shadow-inner font-mono">
              STUDIO
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex gap-2 items-center"
          variants={listStagger}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <motion.li key={link.label} variants={linkAnim}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 group"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-xl"
                      style={neumorphicStyle(true)}
                    />
                  )}
                  {/* Hover Background */}
                  {!isActive && (
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={neumorphicStyle()}
                    />
                  )}
                </button>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-3 rounded-xl text-gray-300"
          style={neumorphicStyle()}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>
      {/* Mobile Menu Close Button */}
      <AnimatePresence>
        {open && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 md:hidden p-3 rounded-xl text-gray-300 z-50"
            style={neumorphicStyle()}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#000000] z-40 flex flex-col pt-28 px-8 md:hidden"
          >
            <motion.ul
              className="flex flex-col gap-4"
              variants={listStagger}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.label} variants={linkAnim}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left p-4 rounded-2xl text-lg font-semibold text-gray-300 flex justify-between items-center"
                    style={
                      activePath === link.href ? neumorphicStyle(true) : {}
                    }
                  >
                    {link.label}
                    <ExternalLink size={16} className="opacity-30" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="mt-auto mb-12" variants={linkAnim}>
              <button
                onClick={() => setOpen(false)}
                className="w-full p-4 rounded-2xl text-gray-400 text-center border border-white/5"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
