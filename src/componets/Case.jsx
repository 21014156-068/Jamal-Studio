import { motion } from "framer-motion";
import { TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "./data";

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `
      ${6 * intensity}px ${6 * intensity}px ${12 * intensity}px rgba(5, 5, 7, 0.8),
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

const CaseStudyCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full rounded-[35px] overflow-hidden p-6"
      style={nStyle("outset")}
    >
      {/* Project Image Container */}
      <div
        className="relative h-64 w-full rounded-[25px] overflow-hidden mb-6"
        style={nStyle("inset")}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white border border-white/10">
          {project.category}
        </div>
      </div>

      {/* /* Content Area */}
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-100 tracking-tight">
            {project.title}
          </h3>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: 45 }}
            className="p-2 rounded-xl cursor-pointer"
            style={nStyle("inset")}
          >
            <ArrowUpRight size={20} className="text-gray-400" />
          </motion.a>
        </div>

        {/* Impact Metric - Key for Jamal Studio */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl mb-6 shadow-inner"
          style={nStyle("inset")}
        >
          <TrendingUp size={16} className="text-emerald-500" />
          <span className="text-sm font-bold text-emerald-400">
            {project.metrics}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      {/* Bottom Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold text-gray-500 uppercase"
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
    <section className="relative py-24 bg-[#0c0e12] text-gray-100 overflow-hidden">
      {/* Decorative background numbers */}
      <div className="absolute top-20 right-10 text-[5rem] font-black text-white/[0.02] select-none pointer-events-none">
        Jamal
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <BarChart3 size={14} className="text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                Success Stories
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                Results.
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              We focus on the numbers that matter—speed, traffic, and revenue.
              Explore how Jamal Studio scales digital brands.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl font-bold text-sm text-gray-300 transition-all"
            style={nStyle("outset")}
          >
            Explore Portfolio
          </motion.button>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <CaseStudyCard key={i} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          style={nStyle("outset", 1.5)}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Ready to be our next success story?
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Let's build a digital engine that drives your business forward.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="px-6 md:px-10 py-3 md:py-5 rounded-[20px] font-black text-white text-sm md:text-base shadow-2xl transition-all"
            style={{
              background: "linear-gradient(145deg, #1a1d24, #000000)",
              ...nStyle("outset"),
            }}
          >
            BOOK A CALL
          </motion.button>
        </motion.div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-900/5 blur-[150px] -z-10" />
    </section>
  );
};

export default CaseStudySection;
