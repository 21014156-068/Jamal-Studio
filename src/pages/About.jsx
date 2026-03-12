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
  ChevronLeft,
  ChevronRight,
  Star,
  Monitor,
  Target,
  Award,
  ShieldCheck,
  TrendingUp,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// --------------------------------------------
// FINALIZED HD NEUMORPHIC STYLE
// --------------------------------------------
const themeColor = "#e0e5ec";

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `${9 * intensity}px ${9 * intensity}px ${16 * intensity}px #babecc, -${9 * intensity}px -${9 * intensity}px ${16 * intensity}px #ffffff`,
    inset: `inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff`,
  };
  return {
    backgroundColor: themeColor,
    boxShadow: shadows[type],
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };
};

// --------------------------------------------
// DATA
// --------------------------------------------
const SKILL_BADGES = [
  {
    name: "React.js",
    icon: <SiReact size={21} />,
    color: "from-blue-500/20 to-cyan-400/20",
    iconColor: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={21} />,
    color: "from-green-500/20 to-emerald-400/20",
    iconColor: "#339933",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={21} />,
    color: "from-gray-400/20 to-gray-300/20",
    iconColor: "#000000",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={21} />,
    color: "from-green-600/20 to-green-400/20",
    iconColor: "#47A248",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={21} />,
    color: "from-cyan-500/20 to-blue-400/20",
    iconColor: "#06B6D4",
  },
  {
    name: "Shopify",
    icon: <SiShopify size={21} />,
    color: "from-amber-600/20 to-amber-400/20",
    iconColor: "#96BF48",
  },
  {
    name: "WordPress",
    icon: <SiWordpress size={21} />,
    color: "from-blue-700/20 to-blue-500/20",
    iconColor: "#21759B",
  },
  {
    name: "Git & GitHub",
    icon: <SiGithub size={21} />,
    color: "from-gray-800/20 to-gray-600/20",
    iconColor: "#181717",
  },
  {
    name: "AI Tools",
    icon: (
      <div className="flex gap-1">
        <SiOpenai size={18} />
        <FaRobot size={16} />
      </div>
    ),
    color: "from-purple-500/20 to-pink-400/20",
    iconColor: "#412991",
  },
];

const PROGRESS_SKILLS = [
  { name: "React.js", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "MongoDB", percent: 80 },
  { name: "Express.js", percent: 80 },
  { name: "TailwindCSS", percent: 85 },
  { name: "Shopify", percent: 75 },
  { name: "WordPress", percent: 70 },
];

const teamMembers = [
  {
    id: "tm-001",
    name: "Ayesha Khan",
    role: "Founder & CEO",
    tagline: "Product vision, strategy, and execution.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "tm-002",
    name: "Daniel Carter",
    role: "CTO",
    tagline: "Architecture, scalability, and clean engineering.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-003",
    name: "Fatima Noor",
    role: "Product Designer",
    tagline: "Human-centered UI/UX with pixel-perfect visuals.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-004",
    name: "Muhammad Ali",
    role: "Frontend Engineer",
    tagline: "React, animations, and performance-focused UI.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-005",
    name: "Sophia Martinez",
    role: "Backend Engineer",
    tagline: "APIs, databases, auth, and system reliability.",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-006",
    name: "Omar Farooq",
    role: "DevOps Engineer",
    tagline: "CI/CD pipelines, cloud infra, and monitoring.",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-007",
    name: "Hira Sheikh",
    role: "QA Engineer",
    tagline: "Automation testing and quality assurance.",
    photo:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "tm-008",
    name: "James Wilson",
    role: "Marketing Lead",
    tagline: "Brand growth, storytelling, and go-to-market.",
    photo:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
];

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const circularMembers = teamMembers;

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % circularMembers.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + circularMembers.length) % circularMembers.length,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getCardPosition = (index) => {
    const totalCards = circularMembers.length;
    let relativePos = (index - currentIndex + totalCards) % totalCards;
    if (relativePos > totalCards / 2) relativePos -= totalCards;
    const angleStep = isMobile ? 40 : 30;
    const radius = isMobile ? 180 : 400;
    const angle = relativePos * angleStep;
    const xOffset = Math.sin(angle * (Math.PI / 180)) * radius;
    const distance = Math.abs(relativePos);
    const scale = isMobile
      ? relativePos === 0
        ? 1
        : 0.8
      : Math.max(0.7, 1 - distance * 0.15);
    const opacity = isMobile
      ? distance > 1
        ? 0
        : 1 - distance * 0.5
      : Math.max(0.4, 1 - distance * 0.2);
    return {
      x: xOffset,
      scale,
      opacity,
      zIndex: totalCards - distance,
      isCenter: relativePos === 0,
    };
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32 overflow-hidden">
      {/* 1. ENHANCED: DEVELOPING HIGH-IMPACT SOLUTIONS (ADVANCED LOOK) */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* soft background accents (doesn't affect other sections) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-2xl" />
          <div className="absolute -bottom-28 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-slate-900/5 to-blue-600/10 blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center lg:text-left relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
              {/* Left: headline */}
              <div className="w-full lg:max-w-3xl">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
                  style={nStyle("inset")}
                >
                  <Monitor size={14} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                    Jamal Studio Archive
                  </span>
                </div>

                <h1 className="text-2xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-8 uppercase ">
                  Developing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 italic">
                    High-Impact
                  </span>{" "}
                  <br /> Solutions.
                </h1>

                <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed font-medium mb-10">
                  We are a performance-driven digital agency focused on
                  developing high-quality websites and e-commerce platforms. We
                  help businesses grow their online presence, establish
                  technical credibility, and convert visitors into loyal
                  customers through architectural precision.
                </p>

                {/* Mini proof chips */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {[
                    { label: "Performance-First", icon: <Zap size={16} /> },
                    {
                      label: "Conversion-Led UX",
                      icon: <TrendingUp size={16} />,
                    },
                    { label: "Modern Stacks", icon: <Cpu size={16} /> },
                  ].map((chip, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-2xl flex items-center gap-2"
                      style={nStyle("outset", 0.85)}
                    >
                      <span className="text-blue-600">{chip.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-600">
                        {chip.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: advanced feature panel */}
              <motion.div
                whileHover={{ y: -8 }}
                className="w-full lg:max-w-md p-10 rounded-[50px] relative"
                style={nStyle("outset", 1.05)}
              >
                <div
                  className="absolute inset-0 rounded-[50px] opacity-60 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.18), transparent 55%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.14), transparent 55%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner"
                      style={nStyle("inset")}
                    >
                      <CheckCircle2 size={26} className="text-emerald-500" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                      DELIVERY SYSTEM
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                    Built for outcomes.
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8">
                    A clean, reliable process designed to ship fast without
                    sacrificing quality, scalability, or UI polish.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Architecture",
                        desc: "Scalable foundations + clean code conventions.",
                      },
                      {
                        title: "Performance",
                        desc: "Core Web Vitals, caching, and front-end optimization.",
                      },
                      {
                        title: "Conversion",
                        desc: "UX patterns engineered to increase revenue.",
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-[26px]"
                        style={nStyle("inset")}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-blue-600">
                            <CheckCircle2 size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-black text-slate-800 uppercase tracking-widest">
                              {row.title}
                            </div>
                            <div className="text-xs text-slate-500 font-bold leading-relaxed mt-1">
                              {row.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR ENGINEERS (MOVED UP, AND NO NAV ARROWS ON MOBILE) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 italic">
              Engineers.
            </span>
          </h1>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">
            Meet the people building high-impact digital experiences.
          </p>
        </header>

        <div className="max-w-7xl mx-auto relative px-6">
          {/* ✅ explicitly hidden on mobile */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all hidden lg:flex"
            style={nStyle("outset")}
          >
            <ChevronLeft size={30} className="text-slate-400" />
          </button>

          <div className="relative h-[550px] flex items-center justify-center perspective-[1200px]">
            {circularMembers.map((member, index) => {
              const pos = getCardPosition(index);
              return (
                <motion.div
                  key={member.id}
                  style={{
                    ...nStyle("outset", pos.isCenter ? 1.2 : 0.8),
                    position: "absolute",
                    width: isMobile ? "280px" : "360px",
                    height: isMobile ? "420px" : "500px",
                    zIndex: pos.zIndex,
                    opacity: pos.opacity,
                    cursor: "default",
                    padding: "15px",
                    borderRadius: "40px",
                  }}
                  animate={{ x: pos.x, scale: pos.scale }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  {member.isFeatured && (
                    <div
                      className="absolute top-8 left-8 z-20 px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-black text-white"
                      style={{
                        background: "linear-gradient(145deg, #2563eb, #06b6d4)",
                      }}
                    >
                      <Star size={12} fill="currentColor" /> FEATURED
                    </div>
                  )}
                  <div className="w-full h-full rounded-[30px] overflow-hidden relative group">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-white via-white/90 to-transparent">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                        {member.role}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1 uppercase">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                        {member.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ✅ explicitly hidden on mobile */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all hidden lg:flex"
            style={nStyle("outset")}
          >
            <ChevronRight size={30} className="text-blue-600" />
          </button>

          <div className="flex justify-center gap-3 mt-12">
            {circularMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DIFFERENCE (MOVED AFTER ENGINEERS) */}
      <section className="py-24 bg-white/30 backdrop-blur-sm border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              The <span className="text-blue-600">Difference.</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em] mt-2">
              Why global brands choose us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Performance First",
                desc: "We prioritize sub-second load times and technical efficiency.",
                icon: <Zap size={20} />,
              },
              {
                title: "Modern Stacks",
                desc: "Using Next.js and Shopify to ensure long-term scalability.",
                icon: <Cpu size={20} />,
              },
              {
                title: "Conversion Led",
                desc: "Design strategies built specifically to turn clicks into revenue.",
                icon: <TrendingUp size={20} />,
              },
              {
                title: "Reliable Support",
                desc: "Ongoing partnership focused on your long-term evolution.",
                icon: <ShieldCheck size={20} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[40px]"
                style={nStyle("inset")}
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h4 className="font-black text-slate-900 text-sm mb-2 uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TECHNICAL STACK (MOVED AFTER DIFFERENCE) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex px-6 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 uppercase">
                Our <span className="text-blue-600">Technical</span> Stack
              </h2>
            </motion.div>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em]">
              The Infrastructure of Performance
            </p>
          </div>

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
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ REMOVED: "Let's architect your Technical Future." section (as requested) */}
    </div>
  );
};

export default AboutPage;
