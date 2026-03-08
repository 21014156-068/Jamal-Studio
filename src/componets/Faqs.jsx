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
    icon: <Zap size={18} className="text-amber-400" />,
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer:
      "A standard high-performance business site typically takes 3-4 weeks. For custom E-commerce solutions, timelines range from 5-8 weeks depending on integration complexity. We follow a strict sprint-based workflow to ensure you hit your launch deadlines.",
    icon: <Clock size={18} className="text-blue-400" />,
  },
  {
    question: "Do you provide ongoing maintenance after the site is launched?",
    answer:
      "Yes. We offer 'Strategic Partnership' plans that include 24/7 security monitoring, weekly performance audits, and cloud backups. We don't just hand over a site and disappear; we stay to ensure your digital asset continues to scale.",
    icon: <ShieldCheck size={18} className="text-emerald-400" />,
  },
  {
    question: "Can you optimize my existing website for better speed and SEO?",
    answer:
      "Absolutely. We perform deep-dive technical audits to identify bottlenecks in your current code. We optimize Core Web Vitals, compress script execution, and refine SEO architecture to improve both user experience and Google rankings.",
    icon: <BarChart size={18} className="text-purple-400" />,
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

const FAQItem = ({ item, index, isOpen, toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 overflow-hidden rounded-[25px] transition-all duration-500"
      style={nStyle(isOpen ? "inset" : "outset")}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={nStyle(isOpen ? "outset" : "inset", 0.5)}
          >
            {item.icon}
          </div>
          <span
            className={`text-sm md:text-lg font-bold transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}
          >
            {item.question}
          </span>
        </div>
        <div className="ml-4">
          {isOpen ? (
            <Minus size={20} className="text-blue-500" />
          ) : (
            <Plus size={20} className="text-gray-600" />
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
            <div className="px-6 md:px-20 pb-8 text-gray-400 text-xs md:text-base leading-relaxed">
              <div className="pt-2 border-t border-white/5">{item.answer}</div>
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
    <section className="relative py-24 bg-[#000000] text-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
            style={nStyle("inset")}
          >
            <HelpCircle size={14} className="text-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              Common Queries
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Everything you {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
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
          className="mt-16 p-8 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6"
          style={nStyle("outset")}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
              <MessageSquare size={20} />
            </div>
            <p className="text-gray-300 font-medium">
              Still have questions about your project?
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white"
            style={{
              background: "linear-gradient(145deg, #1a1d24, #000000)",
              ...nStyle("outset"),
            }}
          >
            Ask Us Anything
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Side Decor */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-emerald-900/5 blur-[120px] rounded-full" />
    </section>
  );
};

export default FAQSection;
