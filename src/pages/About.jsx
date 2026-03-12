import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import {
  Zap,
  Linkedin,
  Github,
  Twitter,
  TrendingUp,
  Code2,
  Heart,
  Globe,
  ShieldAlert,
  Microscope,
  MousePointer2,
} from "lucide-react";
import { SKILL_BADGES } from "../componets/data";

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

const PROGRESS_SKILLS = [
  { name: "React.js", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "MongoDB", percent: 80 },
  { name: "Express.js", percent: 80 },
  { name: "TailwindCSS", percent: 85 },
  { name: "Shopify", percent: 75 },
  { name: "WordPress", percent: 70 },
];

const AboutPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32 overflow-hidden selection:bg-blue-100 selection:text-blue-600">
      {/* 1. HERO: TACTICAL ARCHITECTURE */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            >
              <div
                className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl mb-8"
                style={nStyle("inset")}
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                  Jamal_Studio_Manifesto
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] mb-12 ">
                Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 italic">
                  Engineering.
                </span>
              </h1>
              <p className="text-slate-500 text-lg md:text-2xl max-w-xl leading-relaxed font-medium">
                We replace generic design with{" "}
                <span className="text-slate-900 underline decoration-blue-500 decoration-4">
                  technical superiority
                </span>
                . Jamal Studio is where business logic meets architectural
                precision.
              </p>
            </motion.div>

            {/* Diagnostic Asset */}
            <motion.div
              className="hidden lg:flex justify-center"
              style={{
                x: mousePos.x,
                y: mousePos.y,
                rotateX: mousePos.y * -0.1,
                rotateY: mousePos.x * 0.1,
              }}
            >
              <div
                className="w-[450px] h-[450px] rounded-[60px] p-12 relative overflow-hidden"
                style={nStyle("outset", 1.5)}
              >
                <div className="flex justify-between items-start mb-12">
                  <Microscope size={40} className="text-blue-600" />
                  <div className="text-right">
                    <div className="text-[10px] font-black text-slate-300 uppercase">
                      System_Active
                    </div>
                    <div className="text-xl font-black text-emerald-500">
                      OPTIMAL
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div
                    className="h-1.5 w-full rounded-full overflow-hidden"
                    style={nStyle("inset")}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                  <div
                    className="h-1.5 w-3/4 rounded-full overflow-hidden"
                    style={nStyle("inset")}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>
                <div
                  className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl"
                  style={nStyle("inset")}
                >
                  <pre className="font-mono text-[9px] text-slate-400 leading-tight">
                    {`> CORE: NEXT_JS_STATIC\n> LOAD_SPEED: 0.8s\n> SEO_SCORE: 100/100\n> STATUS: MISSION_READY`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* /* 2. STATS (Trust)  */}
      <section className="max-w-7xl mx-auto px-3 mb-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Performance",
              val: "A+",
              icon: <Zap />,
              color: "text-amber-500",
            },
            {
              label: "Revenue Delta",
              val: "+140%",
              icon: <TrendingUp />,
              color: "text-emerald-500",
            },
            {
              label: "Global Launch",
              val: "150+",
              icon: <Globe />,
              color: "text-blue-500",
            },
            {
              label: "Clean Code",
              val: "100%",
              icon: <Code2 />,
              color: "text-purple-500",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-5 rounded-[45px] text-center group"
              style={nStyle("outset")}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-inner`}
                style={nStyle("inset")}
              >
                <div className={`${stat.color}`}>{stat.icon}</div>
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">
                {stat.val}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. YOUR SKILLS SECTION (RE-THEMED TO HD LIGHT) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex px-6 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">
                Our <span className="text-blue-600">Technical</span> Stack
              </h2>
            </motion.div>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em]">
              The Infrastructure of Performance
            </p>
          </div>

          {/* Badges Grid (Provided by you, styled for HD Neumorphism) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-24">
            {SKILL_BADGES.map((badge, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.05 }}
                className="p-8 rounded-[40px] flex flex-col items-center justify-center group relative overflow-hidden"
                style={nStyle("outset", 0.9)}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${badge.color}`}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                  style={nStyle("inset")}
                >
                  <div style={{ color: badge.iconColor }}>{badge.icon}</div>
                </div>
                <span className="text-xs font-black text-slate-700 uppercase tracking-widest">
                  {badge.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Levels (Provided by you, styled for HD Neumorphism) */}
          <div className="max-w-4xl mx-auto space-y-8">
            {PROGRESS_SKILLS.map((skill, i) => (
              <div
                key={i}
                className="p-6 rounded-[30px]"
                style={nStyle("outset")}
              >
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-black text-slate-800 uppercase tracking-widest">
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold text-blue-600 font-mono">
                    {skill.percent}%
                  </span>
                </div>
                <div
                  className="h-3 w-full rounded-full p-1"
                  style={nStyle("inset")}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-white/20 skew-x-12"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRAND CORE: OBSESSION (Emotion) */}
      <section className="py-40 px-6 bg-white/40 border-y border-slate-200/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div style={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.9]">
                Driven by{" "}
                <span className="text-blue-600 italic">Obsession.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
                At Jamal Studio, we are haunted by inefficiency. We believe
                every millisecond matters and every pixel carries the weight of
                your brand's authority.
              </p>
              <div className="flex gap-4">
                <div
                  className="p-6 rounded-3xl flex-1 text-center"
                  style={nStyle("outset")}
                >
                  <Heart className="text-rose-500 mb-2 mx-auto" size={24} />
                  <div className="text-xs font-black uppercase text-slate-400 tracking-widest">
                    Client Focus
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    ABSOLUTE
                  </div>
                </div>
                <div
                  className="p-6 rounded-3xl flex-1 text-center"
                  style={nStyle("outset")}
                >
                  <ShieldAlert
                    className="text-amber-500 mb-2 mx-auto"
                    size={24}
                  />
                  <div className="text-xs font-black uppercase text-slate-400 tracking-widest">
                    Code Quality
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    VERIFIED
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-[60px]" style={nStyle("inset")}>
              <div
                className="p-12 rounded-[50px] space-y-10"
                style={nStyle("outset", 1.3)}
              >
                {[
                  {
                    id: "01",
                    t: "Radical Transparency",
                    d: "Real-time dev logs.",
                  },
                  { id: "02", t: "Scientific UX", d: "Data-backed flows." },
                  { id: "03", t: "Global Scale", i: "Edge propagation." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-xl">
                      {item.id}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm">
                        {item.t}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM ARCHITECTURE (Trust) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter  mb-4">
              Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-slate-400 font-bold tracking-[0.5em] uppercase text-xs">
              Innovation × Rigorous Logic
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                name: "Jamal Abdullah",
                role: "Technical Director",
                icon: "JA",
                bio: "Leading core engine logic and high-concurrency architecture.",
              },
              {
                name: "Talha Ameen",
                role: "Lead UI Architect",
                icon: "TA",
                bio: "Engineering fluid user interactions and atomic design systems.",
              },
              {
                name: "M. Abubakar",
                role: "Backend Systems",
                icon: "MA",
                bio: "Specializing in secure bridges and database optimization.",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20 }}
                className="p-12 rounded-[65px] relative group overflow-hidden"
                style={nStyle("outset")}
              >
                <div
                  className="w-full h-80 rounded-[50px] mb-10 overflow-hidden bg-slate-50 flex items-center justify-center relative shadow-inner"
                  style={nStyle("inset")}
                >
                  <span className="text-8xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                    {member.icon}
                  </span>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 uppercase mb-2 tracking-tighter">
                  {member.name}
                </h3>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-8">
                  {member.role}
                </div>
                <p className="text-sm text-slate-500 font-medium mb-12 leading-relaxed italic">
                  "{member.bio}"
                </p>
                <div className="flex gap-6 border-t border-slate-100 pt-10">
                  {[Linkedin, Github, Twitter].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="p-4 rounded-2xl hover:text-blue-600 transition-all text-slate-300"
                      style={nStyle("inset")}
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Fixed Element */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 left-10 hidden xl:block opacity-20 pointer-events-none"
      >
        <MousePointer2 size={60} className="text-blue-600" />
        <span className="bg-blue-600 text-[10px] font-black px-2 py-1 rounded text-white mt-2 block tracking-widest uppercase">
          System_Active
        </span>
      </motion.div>
    </div>
  );
};

export default AboutPage;
