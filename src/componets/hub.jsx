import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Zap,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  MousePointer2,
} from "lucide-react";

const GOALS = [
  { id: "speed", label: "Optimize Speed", icon: Zap, color: "text-amber-400" },
  {
    id: "sales",
    label: "Increase Sales",
    icon: ShoppingCart,
    color: "text-emerald-400",
  },
  {
    id: "scale",
    label: "Scale Operations",
    icon: TrendingUp,
    color: "text-blue-400",
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

const FooterHub = () => {
  const [selectedGoal, setSelectedGoal] = useState("sales");

  return (
    <section className="relative py-32 bg-[#0c0e12] text-gray-100 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className="p-10 md:p-20 rounded-[50px] text-center flex flex-col items-center"
          style={nStyle("outset", 1.5)}
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10"
            style={nStyle("inset")}
          >
            <Rocket size={40} className="text-gray-400" />
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700 italic">
              Ignite
            </span>{" "}
            Your Growth?
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
            Select your primary objective below and let’s architect a digital
            solution that delivers measurable business value.
          </p>

          {/* Goal Selector Terminal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-16">
            {GOALS.map((goal) => (
              <motion.button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 ${selectedGoal === goal.id ? "text-white" : "text-gray-500"}`}
                style={
                  selectedGoal === goal.id ? nStyle("inset") : nStyle("outset")
                }
              >
                <goal.icon
                  size={24}
                  className={
                    selectedGoal === goal.id ? goal.color : "text-gray-700"
                  }
                />
                <span className="text-xs font-black uppercase tracking-widest">
                  {goal.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Final Action Button */}
          <div className="relative group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  `https://wa.me/923331482815?text=Hi%20Jamal%20Studio,%20I%20want%20to%20discuss%20how%20to%20${selectedGoal}%20my%20project.`,
                  "_blank",
                )
              }
              className="px-12 py-6 rounded-2xl font-black text-lg tracking-[0.2em] uppercase flex items-center gap-4 transition-all"
              style={{
                background: "linear-gradient(145deg, #1a1d24, #000000)",
                ...nStyle("outset", 2),
              }}
            >
              <MessageCircle size={24} />
              Launch Strategy Call
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </motion.button>

            {/* Decorative Cursor */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-12 -bottom-8 hidden lg:block opacity-50"
            >
              <MousePointer2 size={32} className="text-blue-500" />
              <div className="bg-blue-500 text-[10px] font-black px-2 py-1 rounded text-white mt-1">
                CLIENT_READY
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center gap-4 opacity-30">
            <div className="h-[1px] w-12 bg-gray-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
              End of Transmission
            </span>
            <div className="h-[1px] w-12 bg-gray-500" />
          </div>
        </div>
      </div>

      {/* Side Decorative Numbers */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 vertical-text hidden xl:block">
        <span className="text-[100px] font-black text-white/[0.02] tracking-tighter">
          EST 2024
        </span>
      </div>
    </section>
  );
};

export default FooterHub;
