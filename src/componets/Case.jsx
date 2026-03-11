import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "./data";

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

const CaseStudyCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full rounded-[45px] overflow-hidden p-6"
      style={nStyle("outset")}
    >
      {/* Project Image Container */}
      <div
        className="relative h-64 w-full rounded-[30px] overflow-hidden mb-6"
        style={nStyle("inset")}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        {/* Subtle light overlay on hover instead of dark */}
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
          {project.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-slate-900 tracking-tighter">
            {project.title}
          </h3>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: 45, scale: 1.1 }}
            className="p-2 rounded-xl cursor-pointer"
            style={nStyle("inset")}
          >
            <ArrowUpRight size={20} className="text-blue-600" />
          </motion.a>
        </div>

        {/* Impact Metric - Vital for Jamal Studio's mission */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl mb-6 shadow-inner"
          style={nStyle("inset")}
        >
          <TrendingUp size={16} className="text-emerald-500" />
          <span className="text-sm font-black text-emerald-600">
            {project.metrics}
          </span>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
          {project.description}
        </p>
      </div>

      {/* Bottom Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-black text-slate-400 uppercase tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const CaseStudySection = () => {
  return (
    <section className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden">
      {/* Subtle brand background decor */}
      <div className="absolute top-20 right-10 text-[5rem] font-black text-slate-200/40 select-none pointer-events-none italic opacity-30">
        JAMAL
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <BarChart3 size={14} className="text-blue-600" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
                Success Stories
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500">
                Results.
              </span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              We focus on the numbers that matter—speed, traffic, and revenue.
              Explore how Jamal Studio scales digital brands.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl font-black text-xs tracking-widest text-slate-600 hover:text-slate-900 transition-all"
            style={nStyle("outset")}
          >
            EXPLORE PORTFOLIO
          </motion.button>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <CaseStudyCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          style={nStyle("outset", 1.2)}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-2 text-slate-900 tracking-tighter uppercase">
              Ready to be our next success story?
            </h3>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Let's build a digital engine that drives your business forward.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="px-10 py-5 rounded-[24px] font-black text-white text-xs tracking-[0.3em] shadow-2xl transition-all"
            style={{
              background: "linear-gradient(145deg, #1a1d24, #000000)",
              ...nStyle("outset"),
            }}
          >
            BOOK A CALL
          </motion.button>
        </motion.div>
      </div>

      {/* Soft light glows for atmosphere */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 blur-[150px] -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-400/5 blur-[150px] -z-10" />
    </section>
  );
};

export default CaseStudySection;
