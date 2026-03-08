import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShoppingCart,
  TrendingUp,
  MessageCircle,
  Calendar,
  Rocket,
  ShieldCheck,
  MousePointer2,
} from "lucide-react";

const OBJECTIVES = [
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

const ProjectCTA = () => {
  const [selected, setSelected] = useState("performance");

  const handleAction = (type) => {
    const text = `Hi Jamal Studio! I want to discuss a project focused on ${selected}.`;
    if (type === "wa")
      window.open(
        `https://wa.me/923331482815?text=${encodeURIComponent(text)}`,
        "_blank",
      );
  };

  return (
    <section className="relative py-12 bg-[#000000] text-gray-100 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 md:p-12 rounded-[40px] flex flex-col lg:flex-row items-center gap-10"
          style={nStyle("outset", 1.2)}
        >
          {/* LEFT: STRATEGY CONTENT (40% Width) */}
          <div className="lg:w-2/5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" style={nStyle("inset")}>
                <Rocket size={18} className="text-blue-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                Project Launch
              </span>
            </div>
            <h2 className="text-3xl md:text-3xl font-black tracking-tighter mb-4 leading-tight">
              Ready to {""}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Scale Up?
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-0">
              Select your primary objective and initialize your technical audit.
              We build digital engines that deliver.
            </p>
          </div>

          {/* RIGHT: COMMAND TERMINAL (60% Width) */}
          <div className="lg:w-3/5 w-full space-y-6">
            {/* Objective Configurator */}
            <div className="flex gap-3">
              {OBJECTIVES.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 py-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${selected === item.id ? "text-white" : "text-gray-600"}`}
                  style={
                    selected === item.id ? nStyle("inset") : nStyle("outset")
                  }
                >
                  <item.icon
                    size={20}
                    className={
                      selected === item.id ? item.color : "text-gray-800"
                    }
                  />
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Launch Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAction("wa")}
                className="flex-1 py-5 rounded-2xl font-black text-xs tracking-[0.2em] text-white flex items-center justify-center gap-3"
                style={{
                  background: "linear-gradient(145deg, #1a1d24, #000000)",
                  ...nStyle("outset"),
                }}
              >
                <MessageCircle size={18} className="text-emerald-500" />
                WHATSAPP CHAT
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-5 rounded-2xl font-black text-xs tracking-[0.2em] text-gray-400 flex items-center justify-center gap-3 transition-colors hover:text-white"
                style={nStyle("outset")}
              >
                <Calendar size={18} className="text-blue-500" />
                STRATEGY CALL
              </motion.button>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center justify-between px-2 pt-2">
              <div className="flex items-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-tighter">
                <ShieldCheck size={12} className="text-emerald-800" />
                <span>Systems Operational</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-tighter animate-pulse">
                <MousePointer2 size={12} className="text-blue-500" />
                <span>Consultant Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCTA;
