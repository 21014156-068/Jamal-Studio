import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  ChevronLeft,
} from "lucide-react";

// ----------------------------------------------------
// FINALIZED HD NEUMORPHIC STYLE (Locked Jamal Studio System)
// ----------------------------------------------------
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

// ----------------------------------------------------
// Small helpers
// ----------------------------------------------------
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const Field = ({
  label,
  icon,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  right,
  autoComplete,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-500 ml-2">
          {label}
        </label>
        {error ? (
          <span className="text-[10px] font-black uppercase tracking-[0.1em] text-rose-600">
            {error}
          </span>
        ) : null}
      </div>

      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl"
        style={nStyle("inset")}
      >
        <div className="text-slate-400">{icon}</div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full bg-transparent outline-none text-sm font-bold text-slate-700 placeholder:text-slate-300"
        />
        {right}
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const data = mode === "login" ? login : signup;

  const errors = useMemo(() => {
    const e = {};
    if (mode === "login") {
      if (touched.email && !isEmail(login.email)) e.email = "Invalid";
      if (touched.password && login.password.length < 6) e.password = "Short";
    } else {
      if (touched.name && signup.name.trim().length < 2) e.name = "Short";
      if (touched.email && !isEmail(signup.email)) e.email = "Invalid";
      if (touched.password && signup.password.length < 6) e.password = "Short";
    }
    return e;
  }, [mode, login, signup, touched]);

  const submit = async (e) => {
    e.preventDefault();
    setTouched(
      mode === "login"
        ? { email: true, password: true }
        : { name: true, email: true, password: true },
    );
    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
  };

  const switchMode = (m) => {
    setMode(m);
    setTouched({});
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative selection:bg-blue-100 selection:text-blue-600">
      {/* 1. BRAND PANEL (LEFT SIDE - REDESIGNED) */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            {/* Agency Badge */}
            <div className="flex mt-10 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
                <Zap size={20} className="text-blue-500" fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">
                Jamal
                <span className="text-slate-400 italic font-light">Studio</span>
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-2xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-slate-900">
                {mode === "login" ? "Access" : "Join"} {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 italic">
                  The Engine.
                </span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-md leading-relaxed font-medium">
                {mode === "login"
                  ? "Enter your credentials to monitor your digital performance and scale your operations."
                  : "Initialize your technical account and begin your high-performance growth journey."}
              </p>
            </div>

            {/* Technical Feature Grid - Beautiful on Mobile */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", val: "99.9%", icon: <Globe size={14} /> },
                {
                  label: "Security",
                  val: "AES-256",
                  icon: <ShieldCheck size={14} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[35px]"
                  style={nStyle("outset", 0.8)}
                >
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">
                    {item.val}
                  </div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Diagnostic Module - Visible on Desktop */}
            <div
              className="hidden md:block p-8 rounded-[40px]"
              style={nStyle("inset")}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                  System_Status: Optimal
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    className="h-full bg-blue-600"
                  />
                </div>
                <div className="h-1.5 w-2/3 rounded-full bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    className="h-full bg-cyan-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. AUTH CARD (RIGHT SIDE - KEPT EXACTLY SAME AS REQUESTED) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div
              className="p-8 md:p-12 rounded-[60px] relative"
              style={nStyle("outset", 1.2)}
            >
              <div className="relative">
                {/* Tabs */}
                <div className="flex items-center gap-3 mb-10">
                  <button
                    onClick={() => switchMode("login")}
                    className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.35em] transition-all"
                    style={
                      mode === "login" ? nStyle("inset") : nStyle("outset", 0.9)
                    }
                  >
                    Login
                  </button>
                  <button
                    onClick={() => switchMode("signup")}
                    className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.35em] transition-all"
                    style={
                      mode === "signup"
                        ? nStyle("inset")
                        : nStyle("outset", 0.9)
                    }
                  >
                    Sign Up
                  </button>

                  <div className="ml-auto text-[10px] font-black uppercase tracking-[0.35em] text-slate-300 hidden sm:block">
                    {mode === "login" ? "Access" : "Onboarding"}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={submit} className="space-y-7">
                  <AnimatePresence mode="popLayout">
                    {mode === "signup" ? (
                      <motion.div
                        key="signup-name"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Field
                          label="Full Name"
                          icon={<User size={18} />}
                          value={signup.name}
                          onChange={(v) =>
                            setSignup((p) => ({ ...p, name: v }))
                          }
                          placeholder="Enter your name"
                          error={errors.name}
                          autoComplete="name"
                        />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <Field
                    label="Email"
                    icon={<Mail size={18} />}
                    value={data.email}
                    onChange={(v) =>
                      mode === "login"
                        ? setLogin((p) => ({ ...p, email: v }))
                        : setSignup((p) => ({ ...p, email: v }))
                    }
                    placeholder="you@company.com"
                    error={errors.email}
                    autoComplete="email"
                  />

                  <Field
                    label="Password"
                    icon={<Lock size={18} />}
                    type={showPassword ? "text" : "password"}
                    value={data.password}
                    onChange={(v) =>
                      mode === "login"
                        ? setLogin((p) => ({ ...p, password: v }))
                        : setSignup((p) => ({ ...p, password: v }))
                    }
                    placeholder="••••••••"
                    error={errors.password}
                    autoComplete={
                      mode === "login" ? "current-password" : "new-password"
                    }
                    right={
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    }
                  />

                  <div className="pt-2 space-y-5">
                    <motion.button
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-[25px] font-black text-xs tracking-[0.35em] uppercase text-white transition-all shadow-2xl"
                      style={{
                        background: "linear-gradient(145deg, #1a1d24, #000000)",
                        opacity: isSubmitting ? 0.8 : 1,
                      }}
                    >
                      {isSubmitting
                        ? "Initializing..."
                        : mode === "login"
                          ? "Initialize Login"
                          : "Create Account"}
                    </motion.button>

                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        Forgot password?
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          switchMode(mode === "login" ? "signup" : "login")
                        }
                        className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        {mode === "login"
                          ? "Need an account?"
                          : "Already have one?"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
