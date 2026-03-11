import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  MousePointer2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Share2,
  ExternalLink,
} from "lucide-react";

// Finalized HD Neumorphic Logic
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

const SOCIAL_NETWORKS = [
  {
    id: 1,
    name: "LinkedIn",
    handle: "jamalstudio-dev",
    icon: Linkedin,
    color: "#0077B5",
    desc: "Professional updates and B2B strategy.",
  },
  {
    id: 2,
    name: "Github",
    handle: "jamalstudio",
    icon: Github,
    color: "#181717",
    desc: "Open-source engines and technical logs.",
  },
  {
    id: 3,
    name: "Instagram",
    handle: "@jamalstudio.dev",
    icon: Instagram,
    color: "#E4405F",
    desc: "Visual showcases and UI/UX insights.",
  },
  {
    id: 4,
    name: "Twitter",
    handle: "jamal_dev",
    icon: Twitter,
    color: "#1DA1F2",
    desc: "Performance tips and industry news.",
  },
];

const ContactPage = () => {
  const [selectedService, setSelectedService] = useState("web-dev");
  const [formStatus, setFormStatus] = useState("idle");

  const SERVICES = [
    { id: "web-dev", label: "Web Dev", icon: Zap },
    { id: "e-com", label: "E-commerce", icon: MessageSquare },
    { id: "optimization", label: "Speed/SEO", icon: ShieldCheck },
  ];

  const handleInitialize = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32">
      {/* 1. HERO: INITIALIZATION HEADER */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Secure Communication Link
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
              Initialize {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 italic">
                Connection.
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Start your technical audit or discuss your project architecture
              with our engineering team. Average response latency:{" "}
              <span className="text-blue-600 font-bold">1.4 Hours.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONSOLE GRID */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        {/* LEFT: THE FORM (COMMAND INPUT) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 rounded-[50px]"
            style={nStyle("outset", 1.2)}
          >
            <form onSubmit={handleInitialize} className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Select Project Module
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`py-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-500 ${selectedService === s.id ? "text-blue-600" : "text-slate-400"}`}
                      style={
                        selectedService === s.id
                          ? nStyle("inset")
                          : nStyle("outset", 0.8)
                      }
                    >
                      <s.icon size={18} />
                      <span className="text-[9px] font-black uppercase tracking-tighter">
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Lead Name"
                    className="w-full p-5 rounded-2xl outline-none text-sm font-medium text-slate-700 focus:text-blue-600 transition-colors"
                    style={nStyle("inset")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                    Email_Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="lead@company.com"
                    className="w-full p-5 rounded-2xl outline-none text-sm font-medium text-slate-700 focus:text-blue-600 transition-colors"
                    style={nStyle("inset")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                  Project Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your technical requirements..."
                  className="w-full p-5 rounded-2xl outline-none text-sm font-medium text-slate-700 resize-none focus:text-blue-600 transition-colors"
                  style={nStyle("inset")}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === "sending"}
                className="w-full py-6 rounded-[25px] font-black text-xs tracking-[0.3em] text-white flex items-center justify-center gap-4 transition-all shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1a1d24, #000000)",
                }}
              >
                {formStatus === "success" ? (
                  <>
                    <CheckCircle2 size={20} className="text-emerald-400" />{" "}
                    MISSION_RECIEVED
                  </>
                ) : formStatus === "sending" ? (
                  "UPLOADING_DATA..."
                ) : (
                  <>
                    <Send size={20} /> INITIALIZE MISSION
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT: SYSTEM CONSOLE */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[45px]"
            style={nStyle("outset", 1.1)}
          >
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
              <Globe size={14} className="text-blue-600" /> Global_System_Status
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Clock size={16} />,
                  label: "Response Latency",
                  val: "< 2 Hours",
                },
                {
                  icon: <Zap size={16} />,
                  label: "Direct Support",
                  val: "Operational",
                },
                {
                  icon: <ShieldCheck size={16} />,
                  label: "Encryption",
                  val: "256-Bit Active",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={nStyle("inset")}
                >
                  <div className="flex items-center gap-3 text-slate-500">
                    {stat.icon}
                    <span className="text-[10px] font-bold uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-900">
                    {stat.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Connect: WhatsApp & Email */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 10 }}
              className="p-8 rounded-[35px] cursor-pointer group"
              style={nStyle("outset")}
              onClick={() =>
                window.open("https://wa.me/923331482815", "_blank")
              }
            >
              <div className="flex items-center gap-6">
                <div
                  className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner group-hover:scale-110 transition-all"
                  style={nStyle("inset")}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase">
                    WhatsApp Instant
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest">
                    +92 333 1482815
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="ml-auto text-slate-200 group-hover:text-emerald-500 group-hover:translate-x-2 transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="p-8 rounded-[35px] cursor-pointer group"
              style={nStyle("outset")}
            >
              <div className="flex items-center gap-6">
                <div
                  className="p-4 rounded-2xl bg-blue-50 text-blue-600 shadow-inner group-hover:scale-110 transition-all"
                  style={nStyle("inset")}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase">
                    Official Email
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest">
                    hello@jamalstudio.dev
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="ml-auto text-slate-200 group-hover:text-blue-500 group-hover:translate-x-2 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL FOOTPRINT: ADVANCED SOCIAL MEDIA HUB (NEW & PERFECT) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
              style={nStyle("inset")}
            >
              <Share2 size={14} className="text-purple-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Global Network
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter ">
              Our Digital{" "}
              <span className="text-blue-600 italic">Ecosystem.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SOCIAL_NETWORKS.map((social, i) => (
              <motion.a
                key={social.id}
                href="#"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-8 rounded-[45px] flex flex-col items-center text-center group relative overflow-hidden"
                style={nStyle("outset", 1.1)}
              >
                {/* Floating Glow Effect */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: social.color }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                  style={nStyle("inset")}
                >
                  <social.icon
                    size={28}
                    style={{ color: social.color }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h4 className="text-lg font-black text-slate-900 mb-1">
                  {social.name}
                </h4>
                <p className="text-[10px] font-black text-blue-600 tracking-widest mb-4">
                  {social.handle}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-8">
                  {social.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  Explore Port <ExternalLink size={10} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEXT STEPS: THE ROADMAP */}
      <section className="py-20 px-6 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-16">
            Mission <span className="text-blue-600 italic">Protocol.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Audit Phase",
                desc: "Surface-level review of your technical specs.",
              },
              {
                title: "Strategy Call",
                desc: "30-minute deep dive into business KPIs.",
              },
              {
                title: "Initialisation",
                desc: "Execution of the technical build roadmap.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-10 rounded-[40px] relative group"
                style={nStyle("outset")}
              >
                <div className="text-4xl font-black text-slate-50 absolute top-4 right-8 select-none group-hover:text-blue-50 transition-colors">
                  0{i + 1}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-4">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXED DECORATIVE MOUSE CURSOR */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 left-10 hidden xl:block opacity-20 pointer-events-none"
      >
        <MousePointer2 size={60} className="text-blue-600" />
        <span className="bg-blue-600 text-[10px] font-black px-2 py-1 rounded text-white mt-2 block">
          SYSTEMS_ACTIVE
        </span>
      </motion.div>
    </div>
  );
};

export default ContactPage;
