import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { SOCIAL, CONTACT_INFO } from "./data";

const QUICK_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

// Motion variants (slightly softer)
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// Better neumorphism: responsive + less muddy on mobile
const neumorphicStyle = ({
  variant = "card",
  isPressed = false,
  intensity = 1,
} = {}) => {
  // Core Jamal Studio Color Palette
  const bgMain = "#0D0F13"; // Background surface
  const bgLight = "#12151c"; // Light source surface (top-left)

  // Dynamic Shadow Calculations based on intensity
  const distance = 8 * intensity;
  const blur = 16 * intensity;

  // High-Definition Shadow Logic
  const shadows = {
    // Light coming from top-left (White highlight) + Dark shadow at bottom-right
    outset: `
      ${distance}px ${distance}px ${blur}px rgba(0, 0, 0, 0.8), 
      -${distance / 2}px -${distance / 2}px ${blur}px rgba(255, 255, 255, 0.03)
    `,
    // Inward shadows for a "pushed in" or active look
    inset: `
      inset ${distance / 2}px ${distance / 2}px ${blur / 2}px rgba(0, 0, 0, 0.9), 
      inset -${distance / 4}px -${distance / 4}px ${blur / 2}px rgba(255, 255, 255, 0.02)
    `,
  };

  const base = {
    // Neumorphic surfaces look best with a very subtle gradient matching the light source
    background: isPressed
      ? bgMain
      : `linear-gradient(145deg, ${bgLight}, ${bgMain})`,
    boxShadow: isPressed ? shadows.inset : shadows.outset,
    border: "1px solid rgba(255, 255, 255, 0.01)", // Micro-border for edge crispness
    borderRadius: "24px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const variants = {
    card: {
      ...base,
      borderRadius: "32px",
    },
    chip: {
      ...base,
      borderRadius: "100px",
      padding: "8px 16px",
    },
    icon: {
      ...base,
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cta: {
      ...base,
      borderRadius: "20px",
      // CTAs get a slightly more "glossy" top highlight
      background: isPressed
        ? bgMain
        : `linear-gradient(145deg, #1a1d26, #0D0F13)`,
      border: "1px solid rgba(255, 255, 255, 0.05)",
    },
    // Useful for form inputs
    input: {
      ...base,
      background: bgMain,
      boxShadow: shadows.inset, // Inputs are usually inset by default
      borderRadius: "12px",
    },
  };

  return variants[variant] || base;
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Footer = () => {
  const footerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Desktop detection (parallax only on desktop)
  useEffect(() => {
    const update = () =>
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Parallax mouse effect (desktop only + disabled if reduced motion)
  useEffect(() => {
    if (!isDesktop || reduceMotion) return;

    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      setMousePosition({ x, y });
    };

    const footer = footerRef.current;
    footer?.addEventListener("mousemove", handleMouseMove);
    return () => footer?.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, reduceMotion]);

  const parallaxTransform =
    isDesktop && !reduceMotion
      ? `translate3d(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px, 0)`
      : "none";

  return (
    <footer
      ref={footerRef}
      className="relative z-30 overflow-hidden px-4 pt-16 pb-10 sm:px-6"
      style={{ background: "#000" }}
    >
      {/* Background accents (cleaner + looks better on mobile) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%)",
          }}
        />
        <div
          className="absolute -bottom-32 right-[-80px] h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(120,120,255,0.10), rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Subtle floating dots (disabled on reduced motion) */}
      {!reduceMotion &&
        [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/40"
            style={{ left: `${12 + i * 18}%`, top: `${18 + i * 14}%` }}
            animate={{
              y: [0, -16, 0],
              opacity: [0, 0.35, 0],
              scale: [0, 1, 0],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        style={{ transform: parallaxTransform }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* MAIN GRID: mobile-first, cleaner spacing */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-6"
            style={neumorphicStyle("card")}
          >
            <div className="flex items-center gap-3">
              <div
                className="rounded-xl px-4 py-2"
                style={neumorphicStyle("chip")}
              >
                <span className="text-lg font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Jamal
                </span>
                <span className="ml-2 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/60">
                  STUDIO
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Premium web solutions with fast delivery. We create stunning
              websites that convert visitors into customers.
            </p>

            {/* Social: bigger tap targets for mobile */}
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-xl p-3"
                  style={neumorphicStyle("icon")}
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <s.icon size={20} className="text-white/80" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-6"
            style={neumorphicStyle("card")}
          >
            <h3 className="text-base font-semibold text-white/90">
              Quick Links
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <motion.a
                    href={l.href}
                    className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/70 outline-none transition"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    whileHover={reduceMotion ? undefined : { x: 2 }}
                  >
                    <span className="transition-colors group-hover:text-white">
                      {l.label}
                    </span>
                    <span className="text-white/30 group-hover:text-white/60">
                      →
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-6"
            style={neumorphicStyle("card")}
          >
            <h3 className="text-base font-semibold text-white/90">Contact</h3>

            <div className="mt-4 space-y-3">
              {CONTACT_INFO.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-3 rounded-xl px-3 py-3 text-white/70 outline-none transition"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                  whileHover={reduceMotion ? undefined : { x: 2 }}
                >
                  <div
                    className="mt-0.5 rounded-lg p-2"
                    style={neumorphicStyle("icon")}
                  >
                    <info.icon size={16} className="text-white/80" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white/85">
                      {info.value}
                    </p>
                    <p className="text-xs text-white/45">{info.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-6"
            style={neumorphicStyle("card")}
          >
            <h3 className="text-base font-semibold text-white/90">
              Get Started
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Ready to transform your online presence? Let’s discuss your
              project.
            </p>

            <motion.a
              href="https://wa.me/923331482815"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white outline-none"
              style={{
                ...neumorphicStyle("cta"),
              }}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} />
              Start a Project
            </motion.a>

            <p className="mt-3 text-xs text-white/45">
              Typically replies within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar (mobile-friendly) */}
        <div
          className="mt-10 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="text-center text-xs text-white/70 sm:text-left">
            © {new Date().getFullYear()} Jamal Studio. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <a
              href="/privacy"
              className="rounded-lg px-3 py-2 text-xs text-white/70 transition hover:text-white"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="rounded-lg px-3 py-2 text-xs text-white/70 transition hover:text-white"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              Terms
            </a>

            <motion.button
              onClick={scrollToTop}
              className="rounded-xl p-2.5"
              style={neumorphicStyle("icon")}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={18} className="text-white/80" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
