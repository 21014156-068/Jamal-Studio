import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Star,
  Zap,
  TrendingUp,
  Globe,
  ShieldCheck,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const DEMO_TESTIMONIALS = [
  {
    name: "Tanseer Hamza",
    role: "CEO, TechFlow",
    text: "Jamal Studio didn't just build a site; they built a conversion engine. Our load speeds dropped by 60% and leads doubled.",
    img: "/t.jpg",
    rating: 5,
  },
  {
    name: "Talha Ameen",
    role: "Founder, E-com Hub",
    text: "The Shopify customization is flawless. The neumorphic UI they implemented gives us a premium edge over competitors.",
    img: "/u.jpg",
    rating: 5,
  },
  {
    name: "M. Abubakar",
    role: "Marketing Director",
    text: "Professional, fast, and strategic. They understand that performance is the foundation of digital growth.",
    img: "/m.jpg",
    rating: 5,
  },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `
      ${6 * intensity}px ${6 * intensity}px ${12 * intensity}px rgba(5, 5, 7, 0.8),
      -${4 * intensity}px -${4 * intensity}px ${8 * intensity}px rgba(35, 35, 45, 0.2)
    `,
    inset: `
      inset 2px 2px 5px rgba(0,0,0,0.7), 
      inset -1px -1px 3px rgba(255,255,255,0.05)
    `,
  };
  return {
    background: "linear-gradient(145deg, #0c0e12, #10131a)",
    boxShadow: shadows[type],
    border: "1px solid rgba(255,255,255,0.03)",
  };
};

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState("");
  const fullHeadline = "We build digital engines that scale.";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(fullHeadline.substring(0, i));
      i++;
      if (i > fullHeadline.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Testimonial Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % DEMO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#18181a] text-gray-100 overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #444 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div style={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl mt-5 mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                Jamal Studio — Performance First
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 min-h-[100px] md:min-h-[140px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                {typingText}
              </span>
              <span className="inline-block w-1 h-10 md:h-12 bg-gray-500 ml-2 animate-pulse align-middle" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed"
            >
              High-performance development and strategic e-commerce solutions
              crafted to convert visitors into loyal customers.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                {
                  icon: <Zap size={18} className="text-amber-400" />,
                  label: "99+ Performance",
                },
                {
                  icon: <ShieldCheck size={18} className="text-blue-400" />,
                  label: "Secure & Managed",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={nStyle("outset")}
                >
                  {item.icon}
                  <span className="text-sm font-semibold text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://wa.me/923331482815", "_blank")
                }
                className="px-8 py-4 rounded-2xl font-bold flex items-center gap-3 text-white transition-all shadow-lg"
                style={{
                  background: "linear-gradient(145deg, #1a1d24, #10131a)",
                  ...nStyle("outset"),
                }}
              >
                <MessageCircle size={20} />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:text-white transition-colors"
                style={nStyle("outset")}
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: UPDATED TESTIMONIAL DESIGN */}
          <motion.div
            className="relative"
            style={{
              x: mousePos.x,
              y: mousePos.y,
              rotateX: mousePos.y * -0.1,
              rotateY: mousePos.x * 0.1,
            }}
          >
            <motion.div
              className="relative z-20 p-8 md:p-10 rounded-[32px]"
              style={nStyle("outset", 1.2)}
            >
              {/* Badge Overlay */}
              <div
                className="absolute -top-3 left-6 px-3 py-1 rounded-xl text-sm font-medium"
                style={{
                  background: "linear-gradient(145deg, #0c0e12, #10131a)",
                  boxShadow:
                    "5px 5px 10px rgba(5, 5, 7, 0.8), -3px -3px 8px rgba(35, 35, 45, 0.2), inset 1px 1px 2px rgba(35, 35, 45, 0.3), inset -1px -1px 2px rgba(5, 5, 7, 0.5)",
                  color: "#e1e1e1",
                }}
              >
                Client Feedback
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="pt-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl overflow-hidden"
                      style={{
                        boxShadow:
                          "5px 5px 10px rgba(5, 5, 7, 0.8), -3px -3px 8px rgba(35, 35, 45, 0.2)",
                      }}
                      whileHover={{ rotate: 5 }}
                    >
                      <img
                        src={DEMO_TESTIMONIALS[currentTestimonial].img}
                        alt={DEMO_TESTIMONIALS[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <div className="font-bold text-gray-100">
                        {DEMO_TESTIMONIALS[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-400">
                        Verified Client
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < DEMO_TESTIMONIALS[currentTestimonial].rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-0 italic leading-relaxed">
                    "{DEMO_TESTIMONIALS[currentTestimonial].text}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Dots Pagination */}
              <div className="flex justify-center mt-8 gap-2">
                {DEMO_TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? "bg-gray-400 w-4" : "bg-gray-700"}`}
                    onClick={() => setCurrentTestimonial(i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Score Badges (Kept for advanced feel) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-30 p-4 rounded-2xl hidden md:block"
              style={nStyle("outset")}
            >
              <div className="text-[10px] font-bold text-gray-500 uppercase">
                Speed Score
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-black text-emerald-500">99</span>
                <span className="text-xs font-bold text-gray-600">/100</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CENTERED SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center gap-6 mt-16"
        >
          {SOCIAL_LINKS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl transition-all"
              style={nStyle("outset")}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon
                size={22}
                className="text-gray-400 hover:text-white transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
