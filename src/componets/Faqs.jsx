import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  Zap,
  Clock,
  ShieldCheck,
  BarChart,
} from "lucide-react";

const FAQ_DATA = [
  {
    question: "What makes Jamal Studio different from other agencies?",
    answer:
      "Most agencies focus solely on 'pretty' design. We focus on 'Performance Engines.' We combine high-end aesthetics with technical optimization (Next.js, Shopify Liquid tuning) to ensure your site isn't just a business card, but a conversion tool that loads in under 2 seconds.",
    icon: <Zap size={18} className="text-amber-600" />,
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer:
      "A standard high-performance business site typically takes 3-4 weeks. For custom E-commerce solutions, timelines range from 5-8 weeks depending on integration complexity. We follow a strict sprint-based workflow to ensure you hit your launch deadlines.",
    icon: <Clock size={18} className="text-blue-600" />,
  },
  {
    question: "Do you provide ongoing maintenance after the site is launched?",
    answer:
      "Yes. We offer 'Strategic Partnership' plans that include 24/7 security monitoring, weekly performance audits, and cloud backups. We don't just hand over a site and disappear; we stay to ensure your digital asset continues to scale.",
    icon: <ShieldCheck size={18} className="text-emerald-600" />,
  },
  {
    question: "Can you optimize my existing website for better speed and SEO?",
    answer:
      "Absolutely. We perform deep-dive technical audits to identify bottlenecks in your current code. We optimize Core Web Vitals, compress script execution, and refine SEO architecture to improve both user experience and Google rankings.",
    icon: <BarChart size={18} className="text-purple-600" />,
  },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    // Finalized HD Neumorphic Logic
    outset: `${14 * intensity}px ${14 * intensity}px ${30 * intensity}px rgba(51, 65, 85, 0.15), -${12 * intensity}px -${12 * intensity}px ${28 * intensity}px rgba(255, 255, 255, 0.8)`,
    inset:
      "inset 6px 6px 14px rgba(51, 65, 85, 0.1), inset -6px -6px 14px rgba(255, 255, 255, 0.5)",
  };

  return {
    backgroundColor: "#FFFFFF",
    boxShadow: shadows[type],
    border: "1.5px solid #E2E8F0",
  };
};

const FAQItem = ({ item, index, isOpen, toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 overflow-hidden rounded-[30px] transition-all duration-500"
      style={nStyle(isOpen ? "inset" : "outset")}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
      >
        <div className="flex items-center gap-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={nStyle(isOpen ? "outset" : "inset", 0.6)}
          >
            {item.icon}
          </div>
          <span
            className={`text-base md:text-lg font-bold transition-colors duration-300 ${
              isOpen
                ? "text-slate-900"
                : "text-slate-700 group-hover:text-blue-600"
            }`}
          >
            {item.question}
          </span>
        </div>
        <div
          className="ml-4 p-2 rounded-full transition-all"
          style={nStyle(isOpen ? "inset" : "outset", 0.4)}
        >
          {isOpen ? (
            <Minus size={18} className="text-blue-600" />
          ) : (
            <Plus size={18} className="text-slate-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 md:px-24 pb-8">
              <div className="pt-6 border-t border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed font-medium italic">
                {item.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
            style={nStyle("inset")}
          >
            <HelpCircle size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Technical Clarity
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            Everything you {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500">
              need to know.
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="relative">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8"
          style={nStyle("outset", 1.2)}
        >
          <div className="flex items-center gap-5">
            <div
              className="p-4 rounded-2xl shadow-inner"
              style={nStyle("inset")}
            >
              <MessageSquare size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-slate-900 font-bold">
                Still have technical questions?
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black">
                Our strategists are ready.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="px-10 py-5 rounded-[20px] font-black text-xs tracking-[0.3em] text-white shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #1a1d24, #000000)",
            }}
          >
            ASK US ANYTHING
          </motion.button>
        </motion.div>
      </div>

      {/* Atmospheric Soft Light Decor */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyan-400/5 blur-[120px] rounded-full" />
    </section>
  );
};

export default FAQSection;
