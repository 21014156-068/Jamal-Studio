import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Zap,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Settings,
  CheckCircle2,
} from "lucide-react";
import ProjectCTA from "../componets/ProjectCTA";

const SERVICE_INFRASTRUCTURE = [
  {
    category: "Website Development",
    icon: Monitor,
    color: "#3b82f6",
    tag: "SYS_ARCH",
    nodes: [
      {
        id: "WD-01",
        title: "Custom Business Development",
        desc: "Engineering high-end, scalable digital engines tailored for corporate growth and market authority.",
      },
      {
        id: "WD-02",
        title: "Corporate Website Development",
        desc: "Enterprise-grade architecture designed for large-scale operations and professional brand positioning.",
      },
      {
        id: "WD-03",
        title: "Landing Page Development",
        desc: "High-velocity sales funnels optimized for maximum conversion rates and instant user engagement.",
      },
      {
        id: "WD-04",
        title: "Portfolio Website Development",
        desc: "Bespoke creative showcases using advanced UI/UX to highlight your professional achievements.",
      },
      {
        id: "WD-05",
        title: "Startup Website Development",
        desc: "Lean, fast, and highly scalable MVP infrastructure built to evolve with your growing venture.",
      },
    ],
  },
  {
    category: "E-commerce Development",
    icon: ShoppingBag,
    color: "#10b981",
    tag: "REV_ENG",
    nodes: [
      {
        id: "EC-01",
        title: "Shopify Store Development",
        desc: "Building industry-leading Shopify ecosystems with custom logic and high-converting storefronts.",
      },
      {
        id: "EC-02",
        title: "Shopify Customization",
        desc: "Deep-layer Liquid coding and custom app integration to push Shopify beyond its standard limits.",
      },
      {
        id: "EC-03",
        title: "WooCommerce Development",
        desc: "Scalable WordPress-based commerce solutions with custom plugin architecture and secure checkout.",
      },
      {
        id: "EC-04",
        title: "E-com Performance",
        desc: "Aggressive speed tuning specifically for checkout flows and product catalogs to boost ROI.",
      },
      {
        id: "EC-05",
        title: "Full E-com Architecture",
        desc: "End-to-end custom shopping platforms designed for high-concurrency and seamless inventory sync.",
      },
    ],
  },
  {
    category: "Website Optimization",
    icon: Zap,
    color: "#f59e0b",
    tag: "PERF_TUNING",
    nodes: [
      {
        id: "OP-01",
        title: "Speed Optimization",
        desc: "Reaching the green zone with 99+ PageSpeed scores and sub-second Largest Contentful Paint.",
      },
      {
        id: "OP-02",
        title: "Technical SEO Optimization",
        desc: "Fine-tuning crawling efficiency and schema markup to ensure search engine dominance.",
      },
      {
        id: "OP-03",
        title: "Conversion Rate (CRO)",
        desc: "Analyzing user behavior to eliminate friction points and turn more visitors into loyal customers.",
      },
      {
        id: "OP-04",
        title: "Mobile Performance",
        desc: "Optimizing the mobile critical path for a flawless, native-app feel on every handheld device.",
      },
    ],
  },
  {
    category: "Website Redesign",
    icon: RefreshCw,
    color: "#a855f7",
    tag: "UI_REGEN",
    nodes: [
      {
        id: "RD-01",
        title: "Business Website Redesign",
        desc: "Modernizing outdated corporate assets with contemporary design systems and updated tech stacks.",
      },
      {
        id: "RD-02",
        title: "E-com Website Redesign",
        desc: "Re-platforming and re-designing stores to enhance user journey and match modern brand aesthetics.",
      },
      {
        id: "RD-03",
        title: "UX/UI Improvement",
        desc: "Scientifically-backed user experience overhauls focused on usability and brand emotional resonance.",
      },
      {
        id: "RD-04",
        title: "Website Modernization",
        desc: "Migrating legacy systems to modern, type-safe environments like Next.js and React.",
      },
    ],
  },
  {
    category: "Maintenance & Support",
    icon: ShieldCheck,
    color: "#f43f5e",
    tag: "SEC_PROTO",
    nodes: [
      {
        id: "MS-01",
        title: "Maintenance Services",
        desc: "Proactive health checks, dependency updates, and continuous performance monitoring for stability.",
      },
      {
        id: "MS-02",
        title: "Security Monitoring",
        desc: "24/7 vulnerability scanning and advanced firewall management to protect your digital assets.",
      },
      {
        id: "MS-03",
        title: "Bug Fixing & Support",
        desc: "On-demand technical assistance and rapid response troubleshooting to minimize downtime.",
      },
      {
        id: "MS-04",
        title: "Backup Management",
        desc: "Automated daily cloud backups and fail-safe disaster recovery protocols for total peace of mind.",
      },
    ],
  },
];

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
                  Service Infrastructure V2.4
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 uppercase text-gray-900">
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

      {/* 2. THE CAPABILITY MATRIX */}
      <section className="max-w-7xl mx-auto px-6 space-y-40">
        {SERVICE_INFRASTRUCTURE.map((sector, sIdx) => (
          <div key={sIdx} className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex items-center gap-6">
                <div
                  className="w-20 h-20 rounded-[30px] flex items-center justify-center"
                  style={nStyle("outset", 1.4)}
                >
                  <sector.icon size={32} style={{ color: sector.color }} />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">
                    {sector.tag}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 uppercase">
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
              <div className="p-8 rounded-[40px] flex flex-col justify-center items-center text-center border border-dashed border-gray-300 opacity-60 hover:opacity-100 transition-all cursor-pointer">
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
