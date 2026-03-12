import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Link as LinkIcon,
  CheckCircle2,
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Michael Klein",
    role: "Lead Engineer at Vercel",
    text: "The performance optimization from Jamal Studio is a game changer. We can scale our digital operations with zero anxiety.",
    rating: 5,
    tag: "TOP PERFORMANCE",
    img: "MK",
  },
  {
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    text: "Jamal Studio transformed our visibility. The technical SEO and speed scores are unmatched in the current market.",
    rating: 5,
    tag: "FEATURED",
    img: "SJ",
  },
  {
    name: "Alex Liu",
    role: "Product at Stripe",
    text: "Working with them helped us identify bottlenecks we didn't even know existed. Pure technical expertise.",
    rating: 5,
    tag: "STRATEGIC",
    img: "AL",
  },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `
      ${6 * intensity}px ${6 * intensity}px ${12 * intensity}px rgba(5, 5, 7, 0.9),
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

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive screen detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Enhanced logic for responsive 3D tucking
  const getCardStyle = (i) => {
    const isCenter = i === index;
    const isLeft =
      i === (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    const isRight = i === (index + 1) % TESTIMONIALS.length;

    if (isCenter) return { z: 10, x: 0, scale: 1, opacity: 1, rotateY: 0 };

    // Mobile-specific offsets for "Tucked behind" look
    const mobileX = 90;
    const desktopX = 280;
    const xOffset = isMobile ? mobileX : desktopX;
    const sideScale = isMobile ? 0.75 : 0.85;

    if (isLeft)
      return { z: 5, x: -xOffset, scale: sideScale, opacity: 0.4, rotateY: 30 };
    if (isRight)
      return { z: 5, x: xOffset, scale: sideScale, opacity: 0.4, rotateY: -30 };

    return { z: 0, x: 0, scale: 0.5, opacity: 0, rotateY: 0 };
  };

  return (
    <section className="relative py-28 bg-[#000000] text-gray-100 overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="text-center mt-[-60px] mb-[20px] md:mb-[-10px] px-6">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Trusted by <span className="text-gray-500">Industry Leaders</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-lg max-w-lg mx-auto">
          We don't just build websites; we build trust through measurable
          results.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-5xl h-[400px] md:h-[450px] flex items-center justify-center perspective-[1000px]">
        {TESTIMONIALS.map((t, i) => {
          const style = getCardStyle(i);
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: style.x,
                scale: style.scale,
                zIndex: style.z,
                opacity: style.opacity,
                rotateY: style.rotateY,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute w-[300px] md:w-[450px] rounded-[30px] md:rounded-[40px] p-6 md:p-10 cursor-pointer select-none"
              style={nStyle("outset", style.z === 10 ? 1.5 : 0.8)}
              onClick={() => {
                if (style.x < 0) prev();
                if (style.x > 0) next();
              }}
            >
              {/* Star Rating & Tag */}
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={isMobile ? 12 : 16}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                {style.z === 10 && (
                  <div
                    className="px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-black tracking-widest text-blue-400"
                    style={nStyle("inset")}
                  >
                    {t.tag}
                  </div>
                )}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-xl text-gray-200 font-medium leading-relaxed mb-8 md:mb-10 h-28 md:h-24 overflow-hidden">
                "{t.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 md:pt-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-gray-400 relative"
                    style={nStyle("inset")}
                  >
                    <span className="text-xs md:text-base">{t.img}</span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full border-2 border-[#0c0e12]" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-lg font-bold text-gray-100 flex items-center gap-2">
                      {t.name.split(" ")[0]}{" "}
                      <CheckCircle2
                        size={isMobile ? 12 : 14}
                        className="text-blue-500"
                      />
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-500 tracking-tighter uppercase whitespace-nowrap">
                      {isMobile ? "Lead Engineer" : t.role}
                    </p>
                  </div>
                </div>
                <LinkIcon
                  size={isMobile ? 16 : 20}
                  className="text-gray-700 hover:text-gray-400 transition-colors"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-8 md:gap-6 mt-4 md:mt-[-5px] mb-[-20px] md:mb-[-50px] relative z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="p-4 md:p-4 rounded-full"
          style={nStyle("outset")}
        >
          <ChevronLeft size={isMobile ? 20 : 24} className="text-gray-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="p-4 md:p-4 rounded-full"
          style={nStyle("outset")}
        >
          <ChevronRight size={isMobile ? 20 : 24} className="text-blue-500" />
        </motion.button>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-900/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;
