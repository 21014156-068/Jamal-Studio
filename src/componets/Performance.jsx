import React from "react";
import { motion } from "framer-motion";
import { Gauge, Cpu, Globe2, Zap, LayoutPanelLeft, Layers } from "lucide-react";

const STACK = [
  { name: "Mern Stack", type: "Front&Backends", power: 98 },
  { name: "Shopify Liquid", type: "E-commerce", power: 95 },
  { name: "Wordpress", type: "CMS", power: 99 },
  { name: "Woocommerce", type: "E-commerce", power: 99 },
];

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `${6 * intensity}px ${6 * intensity}px ${12 * intensity}px rgba(5, 5, 7, 0.9), -${4 * intensity}px -${4 * intensity}px ${8 * intensity}px rgba(35, 35, 45, 0.2)`,
    inset: `inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 3px rgba(255,255,255,0.05)`,
  };
  return {
    background: "linear-gradient(145deg, #0c0e12, #10131a)",
    boxShadow: shadows[type],
    border: "1px solid rgba(255,255,255,0.03)",
  };
};

const PerformanceLab = () => {
  return (
    <section className="relative py-24 bg-[#000000] text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Performance Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[40px] space-y-10"
            style={nStyle("outset", 1.2)}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl shadow-inner bg-emerald-500/10 text-emerald-500">
                <Gauge size={24} />
              </div>
              <h3 className="text-2xl font-bold">Performance Comparison</h3>
            </div>

            <div className="space-y-8">
              {[
                { label: "Standard Agency Site", val: 45, color: "bg-red-500" },
                {
                  label: "Jamal Studio Engine",
                  val: 99,
                  color: "bg-emerald-500",
                },
              ].map((bar, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>{bar.label}</span>
                    <span>{bar.val}/100</span>
                  </div>
                  <div
                    className="h-4 w-full rounded-full p-1"
                    style={nStyle("inset")}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.val}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${bar.color} shadow-[0_0_15px_rgba(16,185,129,0.3)]`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-6 rounded-2xl text-center"
                style={nStyle("inset")}
              >
                <Cpu size={20} className="mx-auto mb-2 text-blue-400" />
                <div className="text-xl font-black">0.8s</div>
                <div className="text-[10px] text-gray-500 uppercase">
                  Load Time
                </div>
              </div>
              <div
                className="p-6 rounded-2xl text-center"
                style={nStyle("inset")}
              >
                <Zap size={20} className="mx-auto mb-2 text-amber-400" />
                <div className="text-xl font-black">98%</div>
                <div className="text-[10px] text-gray-500 uppercase">
                  SEO Score
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Tech Stack */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <Layers size={14} className="text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                The Tech Stack
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Built with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700">
                Modern Tools.
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STACK.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl flex items-center gap-4 transition-all"
                  style={nStyle("outset")}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-gray-500"
                    style={nStyle("inset")}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-200">{item.name}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black">
                      {item.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceLab;
