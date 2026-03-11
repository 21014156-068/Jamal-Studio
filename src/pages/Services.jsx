import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Settings, CheckCircle2 } from "lucide-react";
import ProjectCTA from "../componets/ProjectCTA";
import { SERVICE_INFRASTRUCTURE } from "../componets/data";

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

const ServiceModule = ({ node, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
    whileHover={{ y: -12, boxShadow: `0 20px 40px ${color}30` }}
    className="p-8 rounded-[40px] flex flex-col justify-between min-h-[300px] group transition-all duration-500 relative overflow-hidden"
    style={nStyle("outset", 1.2)}
  >
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-10"
      style={{ backgroundColor: color }}
      animate={{ opacity: [0, 0.1, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="space-y-1">
        <div className="text-[9px] font-black text-gray-500 tracking-[0.3em]">
          {node.id}
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">
            Active_Node
          </span>
        </div>
      </div>
      <div className="p-3 rounded-2xl" style={nStyle("inset")}>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <CheckCircle2 size={18} style={{ color }} />
        </motion.div>
      </div>
    </div>

    <div className="relative z-10">
      <h4 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 tracking-tight group-hover:drop-shadow-lg transition-all">
        {node.title}
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed font-medium">
        {node.desc}
      </p>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-300 flex items-center justify-between relative z-10">
      <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
        Spec_Verified
      </span>
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight
          size={16}
          className="text-gray-400 group-hover:text-slate-900 transition-all"
          style={{ color }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32">
      {/* 1. TECHNICAL HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                style={nStyle("inset")}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, linear: true }}
                >
                  <Cpu size={14} className="text-cyan-600" />
                </motion.div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Service Infrastructure
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900">
                Technical{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
                  animate={{ backgroundPosition: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Capabilities.
                </motion.span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                A comprehensive suite of performance-driven digital services
                engineered to scale your business operations and dominate the
                digital marketplace.
              </p>
            </div>

            {/* Real-time Status Console */}
            <motion.div
              className="hidden lg:block w-72 p-8 rounded-[40px]"
              style={nStyle("outset", 1.2)}
              animate={{
                boxShadow: [
                  "14px 14px 30px rgba(51, 65, 85, 0.15), -12px -12px 28px rgba(255, 255, 255, 0.8)",
                  "14px 14px 40px rgba(6, 182, 212, 0.2), -12px -12px 28px rgba(255, 255, 255, 0.8)",
                  "14px 14px 30px rgba(51, 65, 85, 0.15), -12px -12px 28px rgba(255, 255, 255, 0.8)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="space-y-4 font-mono text-[10px]">
                <motion.div
                  className="flex justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-slate-500">CPU_LOAD:</span>{" "}
                  <span className="text-cyan-600 font-bold">OPTIMAL</span>
                </motion.div>
                <motion.div
                  className="flex justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <span className="text-slate-500">SERVERS:</span>{" "}
                  <span className="text-blue-600 font-bold">99.9% UP</span>
                </motion.div>
                <motion.div
                  className="flex justify-between"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <span className="text-slate-500">DB_LATENCY:</span>{" "}
                  <span className="text-purple-600 font-bold">12ms</span>
                </motion.div>
                <motion.div
                  className="pt-2 border-t border-gray-300 text-slate-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  READY_FOR_IGNITION
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400 blur-[150px] pointer-events-none"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* 2. THE CAPABILITY MATRIX */}
      <section className="max-w-7xl mx-auto px-6 space-y-40">
        {SERVICE_INFRASTRUCTURE.map((sector, sIdx) => (
          <div key={sIdx} className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex items-center gap-6">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[30px] flex items-center justify-center"
                  style={nStyle("outset", 1.4)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: sIdx * 0.2,
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, linear: true }}
                  >
                    <sector.icon
                      className="w-6 h-6 md:w-8 md:h-8"
                      style={{ color: sector.color }}
                    />
                  </motion.div>
                </motion.div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {sector.tag}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900">
                    {sector.category}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase">
                <span>Capacity: Full</span>
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-blue-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
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
              <motion.div
                className="p-8 rounded-[40px] flex flex-col justify-center items-center text-center border-2 border-dashed border-cyan-400 opacity-70 hover:opacity-100 transition-all cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                animate={{
                  borderColor: ["#a78bfa", "#06b6d4", "#3b82f6", "#a78bfa"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, linear: true }}
                >
                  <Settings className="mb-4 text-cyan-500" size={32} />
                </motion.div>
                <h4 className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-widest text-xs">
                  Custom Requirement?
                </h4>
                <p className="text-[10px] mt-2 text-slate-500">
                  We build specialized technical frameworks for unique business
                  logic.
                </p>
              </motion.div>
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
