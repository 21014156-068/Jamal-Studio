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
    color: "#00f2ff",
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
    color: "#a855f7",
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
    color: "#10b981",
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
    color: "#fbbf24",
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
    color: "#f43f5e",
    stats: [
      { l: "Uptime", v: "99.9%" },
      { l: "Status", v: "Live" },
    ],
    terminal: "> Propagating CDN...\n> Mission: LIVE.",
  },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `${5 * intensity}px ${5 * intensity}px ${10 * intensity}px rgba(5, 5, 7, 0.9), -${3 * intensity}px -${3 * intensity}px ${6 * intensity}px rgba(35, 35, 45, 0.2)`,
    inset: `inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 3px rgba(255,255,255,0.05)`,
  };
  return {
    background: "linear-gradient(145deg, #0c0e12, #10131a)",
    boxShadow: shadows[type],
    border: "1px solid rgba(255,255,255,0.03)",
  };
};

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 md:py-28 bg-[#000000] text-gray-100 overflow-hidden font-sans">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-[8px] flex flex-wrap gap-2 p-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>JAMAL_STUDIO_PROTOCOL_{i}</div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 lg:mb-20 gap-6 text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 shadow-inner"
              style={nStyle("inset")}
            >
              <Activity size={10} className="text-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">
                Pipeline V2.0
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
                Accelerator.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs md:text-sm max-w-xs italic opacity-80">
            Systematic transformation from data to dominance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* NAVIGATION (Order 1 on all) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {MODULES.map((mod, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:flex-1 p-4 md:p-6 rounded-[20px] md:rounded-[24px] flex flex-row lg:flex-col items-center lg:items-start gap-3 transition-all duration-300 min-w-[120px] lg:min-w-0`}
                style={active === i ? nStyle("inset") : nStyle("outset")}
              >
                <span
                  className={`text-[10px] font-black ${active === i ? "text-white" : "text-gray-800"}`}
                >
                  {mod.id}
                </span>
                <mod.icon
                  size={16}
                  style={{ color: active === i ? mod.color : "#333" }}
                />
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider ${active === i ? "text-white" : "text-gray-600"}`}
                >
                  {mod.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* CENTRAL MODULE (Order 2 on all) */}
          <div className="lg:col-span-6 order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="h-full w-full rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col justify-between min-h-[350px] lg:min-h-0"
                style={nStyle("outset", 1.3)}
              >
                <div>
                  <div className="flex justify-between items-center mb-6 md:mb-10">
                    <div
                      className="px-3 py-1 rounded-md text-[8px] md:text-[10px] font-black tracking-[0.2em] shadow-inner"
                      style={{
                        ...nStyle("inset"),
                        color: MODULES[active].color,
                      }}
                    >
                      {MODULES[active].label}
                    </div>
                    <Gauge size={18} className="text-gray-800" />
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-white">
                    {MODULES[active].title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {MODULES[active].desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] font-bold uppercase text-gray-500">
                      Live Active
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"
                  >
                    Init <ArrowRight size={12} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DATA SIDEBAR (Order 3 on all) */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-4 order-3">
            <div
              className="flex-1 rounded-[25px] md:rounded-[30px] p-6 flex flex-col justify-between min-h-[180px]"
              style={nStyle("inset")}
            >
              <h4 className="text-[9px] font-black uppercase text-gray-700 tracking-widest mb-4 flex items-center gap-2">
                <Layers size={10} /> Tech_Specs
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                {MODULES[active].stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-[8px] font-bold text-gray-800 uppercase mb-1">
                      {s.l}
                    </div>
                    <div className="text-xs font-black text-gray-300">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-32 lg:h-40 rounded-[25px] md:rounded-[30px] p-5 bg-black/40 font-mono text-[8px] text-emerald-500/60 overflow-hidden border border-white/5">
              <div className="mb-1 text-gray-700">/* OUTPUT */</div>
              <pre className="whitespace-pre-wrap leading-tight">
                {MODULES[active].terminal}
              </pre>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity }}
                className="w-1 h-2 bg-emerald-500/40 inline-block"
              />
            </div>
          </div>
        </div>

        {/* COMPACT CTA */}
        <motion.div
          className="mt-10 p-6 md:p-8 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6"
          style={nStyle("outset")}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div
              className="p-3 rounded-xl hidden sm:block"
              style={nStyle("inset")}
            >
              <ShieldAlert size={16} className="text-gray-600" />
            </div>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
              Ready to initialize your{" "}
              <span className="text-white">Technical Audit?</span>
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="w-full md:w-auto px-8 py-4 rounded-xl font-black text-[10px] tracking-widest text-white shadow-lg bg-gradient-to-r from-[#1a1d24] to-[#000000]"
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
