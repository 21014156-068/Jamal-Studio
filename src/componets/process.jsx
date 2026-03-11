import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Fingerprint,
  Boxes,
  Binary,
  Zap,
  Rocket,
  ArrowRight,
  Layers,
  Gauge,
  ShieldAlert,
} from "lucide-react";

const MODULES = [
  {
    id: "01",
    name: "Audit",
    label: "SYSTEM_SCAN",
    title: "Technical Discovery",
    desc: "We perform a forensic analysis of your current stack, identifying 'toxic code' and performance bottlenecks.",
    icon: Fingerprint,
    color: "#2563eb", // Blue-600
    stats: [
      { l: "Errors", v: "14" },
      { l: "Speed", v: "41/100" },
    ],
    terminal: "> Init Scan...\n> Latency Detected.",
  },
  {
    id: "02",
    name: "Logic",
    label: "ARCH_BLUEPRINT",
    title: "Performance UX",
    desc: "Architecting a user flow that prioritizes speed-to-action. We map out the UI logic for instant responsiveness.",
    icon: Boxes,
    color: "#7c3aed", // Violet-600
    stats: [
      { l: "Nodes", v: "32" },
      { l: "Logic", v: "Type-Safe" },
    ],
    terminal: "> Mapping Nodes...\n> Structure Ready.",
  },
  {
    id: "03",
    name: "Build",
    label: "CORE_ENGINE",
    title: "Technical Assembly",
    desc: "Engineering the site using Next.js or Shopify. We build for high-concurrency with modular code.",
    icon: Binary,
    color: "#059669", // Emerald-600
    stats: [
      { l: "Stack", v: "NextJS" },
      { l: "Vitals", v: "Optimized" },
    ],
    terminal: "> Compiling JS...\n> Build: SUCCESS.",
  },
  {
    id: "04",
    name: "Tuning",
    label: "TURBO_INJECT",
    title: "Speed Calibration",
    desc: "Fine-tuning Core Web Vitals. We optimize asset delivery until your site feels instantaneous.",
    icon: Zap,
    color: "#d97706", // Amber-600
    stats: [
      { l: "LCP", v: "0.4s" },
      { l: "Score", v: "100/100" },
    ],
    terminal: "> Minifying Assets...\n> 100% Performance.",
  },
  {
    id: "05",
    name: "Launch",
    label: "GLOBAL_DEPLOY",
    title: "Scaling & Support",
    desc: "Deployment on global Edge Networks with 24/7 monitoring to ensure long-term growth.",
    icon: Rocket,
    color: "#db2777", // Pink-600
    stats: [
      { l: "Uptime", v: "99.9%" },
      { l: "Status", v: "Live" },
    ],
    terminal: "> Propagating CDN...\n> Mission: LIVE.",
  },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    // Finalized Jamal Studio HD Neumorphism
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

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 md:py-28 bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none font-mono text-[8px] flex flex-wrap gap-2 p-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="text-slate-400 uppercase tracking-widest">
            JAMAL_STUDIO_PROTOCOL_STREAMS_ACTIVE_{i}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 lg:mb-20 gap-6 text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <Activity size={14} className="text-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Technical Workflow V2.4
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
                Accelerator.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-xs font-medium leading-relaxed italic border-l-2 border-slate-200 pl-4">
            Systematic transformation from raw data to global market dominance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* NAVIGATION (Step Selectors) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {MODULES.map((mod, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: active === i ? 1 : 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`flex-shrink-0 lg:flex-1 p-5 md:p-6 rounded-[28px] flex flex-row lg:flex-col items-center lg:items-start gap-4 transition-all duration-500 min-w-[140px] lg:min-w-0`}
                style={active === i ? nStyle("inset") : nStyle("outset")}
              >
                <span
                  className={`text-xs font-black ${active === i ? "text-blue-600" : "text-slate-300"}`}
                >
                  {mod.id}
                </span>
                <mod.icon
                  size={20}
                  style={{ color: active === i ? mod.color : "#94a3b8" }}
                />
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${active === i ? "text-slate-900" : "text-slate-400"}`}
                >
                  {mod.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* CENTRAL MODULE (Details Display) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full w-full rounded-[45px] p-8 md:p-12 flex flex-col justify-between min-h-[400px]"
                style={nStyle("outset", 1.2)}
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div
                      className="px-4 py-1.5 rounded-lg text-[10px] font-black tracking-[0.2em] shadow-inner"
                      style={{
                        ...nStyle("inset"),
                        color: MODULES[active].color,
                      }}
                    >
                      {MODULES[active].label}
                    </div>
                    <Gauge size={24} className="text-slate-200" />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
                    {MODULES[active].title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                    {MODULES[active].desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Live Architecture Active
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600"
                  >
                    Details <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DATA SIDEBAR (Stats & Code) */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6">
            <div
              className="flex-1 rounded-[35px] p-8 flex flex-col justify-between min-h-[220px]"
              style={nStyle("inset")}
            >
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6 flex items-center gap-2">
                <Layers size={14} className="text-blue-500" /> Technical_Specs
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {MODULES[active].stats.map((s, i) => (
                  <div key={i} className="group">
                    <div className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-tighter group-hover:text-blue-600 transition-colors">
                      {s.l}
                    </div>
                    <div className="text-sm font-black text-slate-800">
                      {s.v}
                    </div>
                    <div className="w-full h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="h-full bg-slate-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Terminal (Kept for Technical Contrast) */}
            <div className="h-40 rounded-[35px] p-6 bg-slate-900 font-mono text-[9px] text-emerald-400/80 overflow-hidden border-4 border-white shadow-2xl">
              <div className="mb-2 text-slate-500 opacity-50">
                /* SYSTEM_OUTPUT */
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
                {MODULES[active].terminal}
              </pre>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity }}
                className="w-1.5 h-3 bg-emerald-400/60 inline-block mt-2"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8"
          style={nStyle("outset")}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div
              className="p-4 rounded-2xl hidden sm:block shadow-inner"
              style={nStyle("inset")}
            >
              <ShieldAlert size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 uppercase tracking-tight">
                Ready to initialize your Technical Audit?
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Our engineers are standing by.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="w-full md:w-auto px-10 py-5 rounded-2xl font-black text-xs tracking-[0.2em] text-white shadow-2xl bg-gradient-to-r from-slate-900 to-slate-800"
          >
            START_NOW
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
