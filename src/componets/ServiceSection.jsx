import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  ShoppingBag,
  Zap,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const SNAPSHOT_SERVICES = [
  {
    title: "Website Development",
    description:
      "Custom business websites engineered for peak performance, modern user experiences, and consistent lead generation.",
    icon: MonitorSmartphone,
    color: "text-blue-400",
  },
  {
    title: "E-commerce Development",
    description:
      "Specialized Shopify and WooCommerce solutions built to maximize online sales and streamline the customer journey.",
    icon: ShoppingBag,
    color: "text-emerald-400",
  },
  {
    title: "Website Optimization",
    description:
      "Technical tuning of speed, SEO structure, and Core Web Vitals to improve your rankings and conversion rates.",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing outdated sites into responsive, high-converting platforms that reflect your brand’s current authority.",
    icon: RefreshCw,
    color: "text-purple-400",
  },
  {
    title: "Maintenance & Support",
    description:
      "Proactive security monitoring and performance management to ensure your digital asset remains stable 24/7.",
    icon: ShieldCheck,
    color: "text-rose-400",
  },
];

// Consistent Neumorphic Utility
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

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-[#000000] text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full mb-4 text-xs font-bold tracking-widest uppercase text-gray-500"
              style={nStyle("inset")}
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Digital Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                Built for Growth.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Jamal Studio provides high-performance digital engines focused on
              performance, conversions, and long-term scalability for modern
              businesses.
            </motion.p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-gray-300"
            style={nStyle("outset")}
          >
            Explore All Services <ChevronRight size={18} />
          </motion.button>
        </div>

        {/* SERVICES SNAPSHOT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SNAPSHOT_SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] group"
              style={nStyle("outset")}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl mb-8 transition-all duration-500 group-hover:rotate-[360deg]"
                style={nStyle("inset")}
              >
                <service.icon size={28} className={service.color} />
              </div>

              <h3 className="text-xl font-bold text-gray-100 mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                Learn More{" "}
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-2 transition-transform"
                />
              </div>
            </motion.div>
          ))}

          {/* FINAL CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-[32px] flex flex-col justify-center items-center text-center border border-dashed border-gray-800 bg-transparent"
          >
            <h3 className="text-xl font-bold text-gray-300 mb-4">
              Have a custom <br /> requirement?
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              We build specialized solutions tailored to your unique business
              goals.
            </p>
            <motion.button
              whileHover={{ y: -3 }}
              onClick={() =>
                window.open("https://wa.me/923331482815", "_blank")
              }
              className="px-8 py-4 rounded-2xl font-bold text-white shadow-xl"
              style={{
                background: "linear-gradient(145deg, #1a1d24, #10131a)",
                ...nStyle("outset"),
              }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/5 blur-[120px] pointer-events-none rounded-full" />
    </section>
  );
};

export default ServicesSection;
