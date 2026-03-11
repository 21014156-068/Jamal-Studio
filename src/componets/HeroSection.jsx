import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, Zap, ShieldCheck, Cpu } from "lucide-react";
import { DEMO_TESTIMONIALS, SOCIAL_LINKS } from "./data";

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `${9 * intensity}px ${9 * intensity}px ${16 * intensity}px #babecc, -${9 * intensity}px -${9 * intensity}px ${16 * intensity}px #ffffff`,
    inset: `inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff`,
  };
  return {
    backgroundColor: "#e0e5ec",
    boxShadow: shadows[type],
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };
};

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState("");
  const fullHeadline = "We build digital engines that scale.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(fullHeadline.substring(0, i));
      i++;
      if (i > fullHeadline.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % DEMO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      {/* ADAPTIVE GLOW BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-purple-400/20 blur-[150px] pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mt-20 mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div style={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mt-5 mb-6"
              style={nStyle("inset")}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Jamal Studio — Performance First
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600">
                {typingText}
              </span>
              {typingText.length < fullHeadline.length && (
                <span className="inline-block w-1 h-10 md:h-12 bg-blue-600 ml-2 animate-pulse align-middle" />
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-medium"
            >
              High-performance development and strategic e-commerce solutions
              crafted to convert visitors into loyal customers.
            </motion.p>

            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("https://wa.me/923331482815", "_blank")
                }
                className="flex-1 whitespace-nowrap px-8 py-4 rounded-2xl font-black text-xs tracking-widest text-white transition-all"
                style={{
                  background: "linear-gradient(145deg, #1a1d24, #000000)",
                  ...nStyle("outset"),
                }}
              >
                <MessageCircle size={16} className="mr-2 inline" />
                Contact Us
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex-1 whitespace-nowrap px-8 py-4 rounded-2xl font-black text-xs tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
                style={nStyle("outset")}
              >
                View our Work
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: TESTIMONIAL CARD */}
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
              className="relative z-20 p-8 md:p-10 rounded-[45px] overflow-hidden"
              style={nStyle("outset", 1.2)}
            >
              <div
                className="absolute -top-0 left-6 px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase z-30"
                style={{
                  ...nStyle("inset"),
                  color: "#334155",
                }}
              >
                Client Feedback
              </div>

              <div className="h-[280px] md:h-[260px] flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="pt-6 flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 border-2 border-slate-100">
                        <img
                          src={DEMO_TESTIMONIALS[currentTestimonial].img}
                          alt={DEMO_TESTIMONIALS[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">
                          {DEMO_TESTIMONIALS[currentTestimonial].name}
                        </div>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 italic leading-relaxed text-sm md:text-base mb-8 line-clamp-3 flex-grow font-medium">
                      "{DEMO_TESTIMONIALS[currentTestimonial].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-2 mt-auto flex-shrink-0">
                  {[
                    {
                      icon: <Zap size={14} />,
                      label: "99+ Perf",
                      color: "text-emerald-500",
                    },
                    {
                      icon: <ShieldCheck size={14} />,
                      label: "Secure",
                      color: "text-blue-500",
                    },
                    {
                      icon: <Cpu size={14} />,
                      label: "Managed",
                      color: "text-purple-500",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center py-3 px-1 rounded-2xl gap-1"
                      style={nStyle("inset")}
                    >
                      <span className={stat.color}>{stat.icon}</span>
                      <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Pagination */}
              <div className="flex justify-center mt-8 gap-2">
                {DEMO_TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-blue-600 w-6" : "bg-slate-200"}`}
                    onClick={() => setCurrentTestimonial(i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Speed Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-30 p-4 rounded-2xl hidden md:block"
              style={nStyle("outset")}
            >
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Speed Score
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-black text-emerald-500">99</span>
                <span className="text-xs font-bold text-slate-400">/100</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SOCIAL LINKS */}
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
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon
                size={22}
                className="text-slate-400 hover:text-blue-600 transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
