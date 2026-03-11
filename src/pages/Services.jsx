import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Settings, CheckCircle2 } from "lucide-react";
import ProjectCTA from "../componets/ProjectCTA";
import { SERVICE_INFRASTRUCTURE } from "../componets/data";

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    // Stronger, clearer neumorphism contrast
    outset: `${14 * intensity}px ${14 * intensity}px ${30 * intensity}px rgba(100, 116, 139, 0.5), -${12 * intensity}px -${12 * intensity}px ${28 * intensity}px rgba(255, 255, 255, 1)`,
    inset:
      "inset 6px 6px 14px rgba(100, 116, 139, 0.4), inset -6px -6px 14px rgba(255, 255, 255, 1)",
  };

  return {
    backgroundColor: "#FFFFFF", // brighter card for stronger separation
    boxShadow: shadows[type],
    border: "1.5px solid rgba(100, 116, 139, 0.35)", // stronger edge definition
  };
};

const ServiceModule = ({ node, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -8 }}
    className="p-8 rounded-[40px] flex flex-col justify-between min-h-[300px] group transition-all duration-500"
    style={nStyle("outset", 1.2)}
  >
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-1">
        <div className="text-[9px] font-black text-gray-400 tracking-[0.3em]">
          {node.id}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
            Active_Node
          </span>
        </div>
      </div>
      <div className="p-3 rounded-2xl" style={nStyle("inset")}>
        <CheckCircle2 size={18} style={{ color }} />
      </div>
    </div>

    <div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
        {node.title}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">
        {node.desc}
      </p>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
        Spec_Verified
      </span>
      <ArrowRight
        size={16}
        className="text-gray-300 group-hover:text-gray-900 transition-all transform group-hover:translate-x-1"
      />
    </div>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen text-gray-900 font-sans pb-32">
      {/* 1. TECHNICAL HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                style={nStyle("inset")}
              >
                <Cpu size={14} className="text-emerald-600 animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                  Service Infrastructure
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-gray-900">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
                  Capabilities.
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                A comprehensive suite of performance-driven digital services
                engineered to scale your business operations and dominate the
                digital marketplace.
              </p>
            </div>

            {/* Real-time Status Console */}
            <div
              className="hidden lg:block w-72 p-8 rounded-[40px]"
              style={nStyle("outset", 1.2)}
            >
              <div className="space-y-4 font-mono text-[10px] text-gray-500">
                <div className="flex justify-between">
                  <span>CPU_LOAD:</span>{" "}
                  <span className="text-emerald-600 font-bold">OPTIMAL</span>
                </div>
                <div className="flex justify-between">
                  <span>SERVERS:</span>{" "}
                  <span className="text-emerald-600 font-bold">99.9% UP</span>
                </div>
                <div className="flex justify-between">
                  <span>DB_LATENCY:</span>{" "}
                  <span className="text-blue-600 font-bold">12ms</span>
                </div>
                <div className="pt-2 border-t border-gray-200 text-gray-400">
                  READY_FOR_IGNITION
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Adjusted Glow for Light Theme */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[150px] pointer-events-none opacity-50" />
      </section>
      {/* 
    /* 2. THE CAPABILITY MATRIX */}
      <section className="max-w-7xl mx-auto px-6 space-y-40">
        {SERVICE_INFRASTRUCTURE.map((sector, sIdx) => (
          <div key={sIdx} className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex items-center gap-6">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[30px] flex items-center justify-center"
                  style={nStyle("outset", 1.4)}
                >
                  <sector.icon
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: sector.color }}
                  />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">
                    {sector.tag}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-gray-900">
                    {sector.category}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase">
                <span>Capacity: Full</span>
                <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sector.nodes.map((node, nIdx) => (
                <ServiceModule
                  key={nIdx}
                  node={node}
                  color={sector.color}
                  delay={nIdx * 0.1}
                />
              ))}

              {/* Specialized Custom Node */}
              <div className="p-8 rounded-[40px] flex flex-col justify-center items-center text-center border border-dashed border-gray-300 opacity-70 hover:opacity-100 transition-all cursor-pointer">
                <Settings className="mb-4 text-gray-400" size={32} />
                <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs">
                  Custom Requirement?
                </h4>
                <p className="text-[10px] mt-2 text-gray-400">
                  We build specialized technical frameworks for unique business
                  logic.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. FINAL PROJECT TRIGGER */}
      <section className="mt-8">
        <ProjectCTA />
      </section>
    </div>
  );
};

export default ServicesPage;
