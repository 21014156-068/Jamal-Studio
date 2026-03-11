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

const TrustSection = () => {
  const trustValues = [
    {
      icon: <Heart size={24} className="text-rose-500" />,
      title: "Client-First Obsession",
      desc: "We don't just build for you; we build with you. Your business growth is the only metric we use to define our success.",
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-600" />,
      title: "Built to Last",
      desc: "Using modern stacks like Next.js and Shopify, we ensure your site remains secure, scalable, and fast for years to come.",
    },
    {
      icon: <Handshake size={24} className="text-emerald-600" />,
      title: "Strategic Partnership",
      desc: "Consider us your in-house digital department. We provide the technical expertise so you can focus on leading your brand.",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP EMOTIONAL HOOK */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl mb-6 shadow-inner"
            style={nStyle("inset")}
          >
            <Rocket size={16} className="text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
              The Jamal Studio Promise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            More than just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500">
              pixels and code.
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We understand the late nights and the passion behind your business.
            That’s why we build digital engines that respect your vision and
            drive real results.
          </p>
        </div>

        {/* ENGAGEMENT: IMPACT COUNTERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              label: "Projects in Progress",
              value: 5,
              suffix: "+",
              icon: <Trophy className="text-slate-300" />,
            },
            {
              label: "Uptime Guaranteed",
              value: 99,
              suffix: ".9%",
              icon: <Timer className="text-slate-300" />,
            },
            {
              label: "Quality Focus",
              value: 100,
              suffix: "%",
              icon: <Users className="text-slate-300" />,
            },
            {
              label: "Years Experience",
              value: 5,
              suffix: "+",
              icon: <Rocket className="text-slate-300" />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[40px] text-center flex flex-col items-center"
              style={nStyle("outset")}
            >
              <div className="mb-4 opacity-50">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
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
              whileHover={{ y: -12 }}
              className="p-10 rounded-[45px] relative group overflow-hidden"
              style={nStyle("outset", 1.1)}
            >
              {/* Background watermark icon */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {item.icon}
              </div>

              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8 mx-auto"
                style={nStyle("inset")}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FINAL TRUST BAR: SECURITY & RELIABILITY */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 py-8 px-10 rounded-full flex flex-wrap justify-center items-center gap-10 opacity-60"
          style={nStyle("inset")}
        >
          {[
            { label: "SSL ENCRYPTED", color: "text-emerald-600" },
            { label: "24/7 MONITORING", color: "text-blue-600" },
            { label: "WEEKLY BACKUPS", color: "text-purple-600" },
            { label: "SEO OPTIMIZED", color: "text-cyan-600" },
          ].map((badge, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-black flex items-center gap-2 tracking-widest ${badge.color}`}
            >
              <div className="w-1 h-1 rounded-full bg-current" />
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Subtle Background Adaptive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default TrustSection;
