import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  Code2,
  Activity,
  Rocket,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Technical Audit",
    desc: "We deep-dive into your current data, identifying performance bottlenecks and SEO gaps that are costing you revenue.",
    icon: Search,
    color: "group-hover:text-blue-400",
  },
  {
    id: "02",
    title: "Strategic Architecture",
    desc: "Engineering a blueprint focused on user flow and conversion psychology. We plan for speed before we write a single line of code.",
    icon: Cpu,
    color: "group-hover:text-purple-400",
  },
  {
    id: "03",
    title: "High-Performance Dev",
    desc: "Building your digital engine using clean code and modern stacks like Next.js or Shopify Liquid for unmatched reliability.",
    icon: Code2,
    color: "group-hover:text-emerald-400",
  },
  {
    id: "04",
    title: "Conversion Tuning",
    desc: "Aggressive A/B testing and speed optimization to ensure your site isn't just fast, but a high-converting sales machine.",
    icon: Activity,
    color: "group-hover:text-amber-400",
  },
  {
    id: "05",
    title: "Scale & Launch",
    desc: "Deploying your site with a total-care maintenance plan. We stay on board to monitor growth and ensure long-term value.",
    icon: Rocket,
    color: "group-hover:text-rose-400",
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

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 bg-[#0c0e12] text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <Activity size={14} className="text-emerald-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                The Blueprint
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              The Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-gray-800">
                of Performance.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg md:max-w-sm mb-2">
            We follow a rigorous technical process to transform your digital
            presence into a scalable growth engine.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="grid grid-cols-1 gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-[30px] transition-all duration-500 ${activeStep === i ? "scale-[1.02]" : "scale-100"}`}
                style={
                  activeStep === i ? nStyle("inset", 1.2) : nStyle("outset")
                }
              >
                {/* Step ID */}
                <div className="text-3xl font-black text-gray-800 group-hover:text-white/10 transition-colors">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                  style={
                    activeStep === i ? nStyle("outset", 0.5) : nStyle("inset")
                  }
                >
                  <step.icon
                    size={28}
                    className={`text-gray-500 transition-colors duration-500 ${step.color}`}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow md:max-w-md">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-500 ${activeStep === i ? "text-white" : "text-gray-400"}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 ${activeStep === i ? "text-gray-300 opacity-100" : "text-gray-600 opacity-0 md:opacity-100"}`}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Action Arrow (Visible on Mobile or Active) */}
                <div
                  className={`ml-auto transition-all duration-500 ${activeStep === i ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                  <ArrowRight className={`text-gray-400 ${step.color}`} />
                </div>
              </div>

              {/* Connecting Line (Desktop) */}
              {i !== STEPS.length - 1 && (
                <div className="hidden md:flex justify-center py-2">
                  <ChevronDown size={20} className="text-gray-800" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Strategy Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 rounded-[40px] text-center relative overflow-hidden group"
          style={nStyle("outset")}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code2 size={120} />
          </div>

          <h3 className="text-3xl font-bold mb-4">Start your engine today.</h3>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Stop settling for websites that just look good. Get a digital asset
            that works as hard as you do.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/923331482815", "_blank")}
            className="px-12 py-5 rounded-2xl font-black tracking-widest text-white shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #1a1d24, #000000)",
              ...nStyle("outset"),
            }}
          >
            BOOK YOUR TECHNICAL AUDIT
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[5%] w-72 h-72 bg-emerald-900/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default ProcessSection;
