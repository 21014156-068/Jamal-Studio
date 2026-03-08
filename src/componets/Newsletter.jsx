import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Zap,
  ShoppingCart,
  TrendingUp,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const INTERESTS = [
  { id: "performance", label: "Speed", icon: Zap, color: "text-amber-400" },
  {
    id: "ecommerce",
    label: "E-com",
    icon: ShoppingCart,
    color: "text-emerald-400",
  },
  { id: "strategy", label: "Scale", icon: TrendingUp, color: "text-blue-400" },
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

const NewsletterSection = () => {
  const [selected, setSelected] = useState("performance");

  return (
    <section className="relative py-16 bg-[#000000] text-gray-100 overflow-hidden">
      {/* Subtle Side Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 md:p-12 rounded-[40px] flex flex-col lg:flex-row items-center gap-12"
          style={nStyle("outset", 1.2)}
        >
          {/* LEFT: CONTENT (35% Width) */}
          <div className="lg:w-1/3 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={nStyle("inset")}>
                <Mail size={18} className="text-emerald-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                The Brief
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-tight">
              Stay{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Optimized.
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Get high-performance growth tactics delivered directly to your
              inbox. No fluff, just results.
            </p>
          </div>

          {/* RIGHT: INTERACTIVE CONSOLE (65% Width) */}
          <div className="lg:w-2/3 w-full space-y-6">
            {/* Interest Pill Selectors */}
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${selected === item.id ? "text-white" : "text-gray-600"}`}
                  style={
                    selected === item.id ? nStyle("inset") : nStyle("outset")
                  }
                >
                  <item.icon
                    size={16}
                    className={
                      selected === item.id ? item.color : "text-gray-800"
                    }
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Input Terminal */}
            <div className="relative group">
              <div
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl"
                style={nStyle("inset")}
              >
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="flex-grow bg-transparent p-4 outline-none text-sm text-gray-200 placeholder:text-gray-700 font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-xl font-black text-[10px] tracking-[0.2em] text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a1d24] to-[#000000]"
                  style={nStyle("outset")}
                >
                  SUBSCRIBE <Send size={14} />
                </motion.button>
              </div>

              {/* Security Tag */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-tighter">
                  <ShieldCheck size={12} className="text-emerald-800" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-tighter">
                  <Sparkles size={12} />
                  <span>500+ Founders Joined</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
