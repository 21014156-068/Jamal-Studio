import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Users,
  Trophy,
  Rocket,
  Handshake,
  Timer,
} from "lucide-react";

// Counter Component for Engagement
const Counter = ({ value, suffix = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

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

const TrustSection = () => {
  const trustValues = [
    {
      icon: <Heart size={24} className="text-rose-500" />,
      title: "Client-First Obsession",
      desc: "We don't just build for you; we build with you. Your business growth is the only metric we use to define our success.",
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-500" />,
      title: "Built to Last",
      desc: "Using modern stacks like Next.js and Shopify, we ensure your site remains secure, scalable, and fast for years to come.",
    },
    {
      icon: <Handshake size={24} className="text-emerald-500" />,
      title: "Strategic Partnership",
      desc: "Consider us your in-house digital department. We provide the technical expertise so you can focus on leading your brand.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#000000] text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP EMOTIONAL HOOK */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={nStyle("inset")}
          >
            <Rocket size={16} className="text-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              The Jamal Studio Promise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            More than just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              pixels and code.
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We understand the late nights and the passion behind your business.
            That’s why we build digital engines that respect your vision and
            drive real results.
          </p>
        </div>

        {/* ENGAGEMENT: IMPACT COUNTERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              label: "Projects Delivered",
              value: 150,
              suffix: "+",
              icon: <Trophy className="text-gray-600" />,
            },
            {
              label: "Uptime Guaranteed",
              value: 99,
              suffix: ".9%",
              icon: <Timer className="text-gray-600" />,
            },
            {
              label: "Client Retention",
              value: 95,
              suffix: "%",
              icon: <Users className="text-gray-600" />,
            },
            {
              label: "ROI Generated",
              value: 10,
              suffix: "M+",
              icon: <Rocket className="text-gray-600" />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[30px] text-center flex flex-col items-center"
              style={nStyle("outset")}
            >
              <div className="mb-4 opacity-30">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST CARDS: EMOTIONAL CONNECTORS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trustValues.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] relative group overflow-hidden"
              style={nStyle("outset", 1.2)}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>

              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8"
                style={nStyle("inset")}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-100 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FINAL TRUST BAR: SECURITY & RELIABILITY */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 py-8 px-10 rounded-full flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
          style={nStyle("inset")}
        >
          <span className="text-sm font-bold flex items-center gap-2 underline decoration-emerald-500/50">
            SSL ENCRYPTED
          </span>
          <span className="text-sm font-bold flex items-center gap-2 underline decoration-blue-500/50">
            24/7 MONITORING
          </span>
          <span className="text-sm font-bold flex items-center gap-2 underline decoration-purple-500/50">
            WEEKLY BACKUPS
          </span>
          <span className="text-sm font-bold flex items-center gap-2 underline decoration-amber-500/50">
            SEO OPTIMIZED
          </span>
        </motion.div>
      </div>

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default TrustSection;
