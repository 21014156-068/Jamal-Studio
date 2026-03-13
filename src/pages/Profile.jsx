import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";

// ----------------------------------------------------
// Neumorphic theme helper (matches your AuthPage)
// ----------------------------------------------------
const themeColor = "#e0e5ec";

const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
    outset: `${9 * intensity}px ${9 * intensity}px ${16 * intensity}px #babecc, -${
      9 * intensity
    }px -${9 * intensity}px ${16 * intensity}px #ffffff`,
    inset: `inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff`,
  };

  return {
    backgroundColor: themeColor,
    boxShadow: shadows[type],
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };
};

// ----------------------------------------------------
// Helpers
// ----------------------------------------------------
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const SectionTitle = ({ icon, title, subtitle, right }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-2xl" style={nStyle("outset", 0.9)}>
        <div className="text-slate-700">{icon}</div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.35em] text-slate-700">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-sm text-slate-500 font-semibold mt-1 leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
          {right}
        </div>
      </div>
    </div>
  );
};

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
  disabled,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <label className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
          {label}
        </label>
        {error ? (
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-rose-600">
            {error}
          </span>
        ) : null}
      </div>

      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl"
        style={nStyle("inset")}
      >
        <div className="text-slate-500">{icon}</div>
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full bg-transparent outline-none text-sm font-bold text-slate-700 placeholder:text-slate-400 disabled:opacity-60"
        />
        {right}
      </div>
    </div>
  );
};

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    fullName: "Jamal Khan",
    email: "jamal@company.com",
    phone: "+1 555 012 3456",
    currentPassword: "",
    newPassword: "",
  });

  const errors = useMemo(() => {
    const e = {};

    if (touched.fullName && form.fullName.trim().length < 2)
      e.fullName = "Too short";
    if (touched.email && !isEmail(form.email)) e.email = "Invalid email";

    // phone validation kept light (different countries)
    if (touched.phone && form.phone.trim().length < 7) e.phone = "Too short";

    // Only validate password fields when editing
    if (editing) {
      // If user starts changing password, enforce both fields
      const wantsPwChange =
        form.currentPassword.length > 0 || form.newPassword.length > 0;

      if (
        touched.currentPassword &&
        wantsPwChange &&
        form.currentPassword.length < 6
      ) {
        e.currentPassword = "Min 6 chars";
      }
      if (touched.newPassword && wantsPwChange && form.newPassword.length < 6) {
        e.newPassword = "Min 6 chars";
      }
      if (
        wantsPwChange &&
        form.currentPassword &&
        form.newPassword &&
        form.currentPassword === form.newPassword
      ) {
        e.newPassword = "Must be different";
      }
    }

    return e;
  }, [form, touched, editing]);

  const hasErrors = Object.keys(errors).length > 0;

  const startEdit = () => {
    setEditing(true);
    setTouched({});
  };

  const cancelEdit = () => {
    setEditing(false);
    setTouched({});
    // clear password fields on cancel
    setForm((p) => ({ ...p, currentPassword: "", newPassword: "" }));
  };

  const save = async () => {
    // touch all fields that matter
    setTouched((p) => ({
      ...p,
      fullName: true,
      email: true,
      phone: true,
      currentPassword: true,
      newPassword: true,
    }));

    // let errors compute
    setTimeout(async () => {
      const stillHasErrors = Object.keys(errors).length > 0;
      if (stillHasErrors) return;

      setSaving(true);
      try {
        await new Promise((r) => setTimeout(r, 900));
        setEditing(false);
        setForm((p) => ({ ...p, currentPassword: "", newPassword: "" }));
        alert("Profile updated (UI demo). Hook this to your API.");
      } finally {
        setSaving(false);
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Background accents (same vibe as AuthPage) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.18), transparent 60%)",
          }}
          animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[620px] h-[620px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, rgba(6,182,212,0.16), transparent 62%)",
          }}
          animate={{ x: [0, -20, 0], y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col mt-7 md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-3">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow-inner w-fit"
                style={nStyle("inset")}
              >
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                  Profile Settings
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.95] uppercase">
                Profile{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 italic">
                  Details
                </span>
                .
              </h1>

              <p className="text-slate-600 text-base md:text-lg font-semibold max-w-2xl leading-relaxed">
                Update your full name, email, phone number, and password. Clean
                neumorphic UI with smooth motion.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {!editing ? (
                <button
                  type="button"
                  onClick={startEdit}
                  className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.35em] transition-all"
                  style={nStyle("outset", 0.95)}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.35em] transition-all"
                  style={nStyle("outset", 0.95)}
                  disabled={saving}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
        >
          <div
            className="p-8 md:p-12 rounded-[60px] relative"
            style={nStyle("outset", 1.15)}
          >
            <div
              className="absolute inset-0 rounded-[60px] opacity-70 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.12), transparent 60%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.10), transparent 55%)",
              }}
            />
            <div className="relative space-y-10">
              <SectionTitle
                icon={<User size={18} />}
                title="Account information"
                subtitle={
                  editing
                    ? "Edit your details and save changes."
                    : "Your details are locked until you click edit."
                }
                right={
                  <div className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 hidden sm:block">
                    {editing ? "Edit Mode" : "View Mode"}
                  </div>
                }
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="Full name"
                  icon={<User size={18} />}
                  value={form.fullName}
                  onChange={(v) => {
                    if (!editing) return;
                    setForm((p) => ({ ...p, fullName: v }));
                    setTouched((p) => ({ ...p, fullName: true }));
                  }}
                  placeholder="Enter full name"
                  error={editing ? errors.fullName : ""}
                  autoComplete="name"
                  disabled={!editing || saving}
                />

                <Field
                  label="Email"
                  icon={<Mail size={18} />}
                  value={form.email}
                  onChange={(v) => {
                    if (!editing) return;
                    setForm((p) => ({ ...p, email: v }));
                    setTouched((p) => ({ ...p, email: true }));
                  }}
                  placeholder="you@company.com"
                  error={editing ? errors.email : ""}
                  autoComplete="email"
                  disabled={!editing || saving}
                />

                <Field
                  label="Phone number"
                  icon={<Phone size={18} />}
                  value={form.phone}
                  onChange={(v) => {
                    if (!editing) return;
                    setForm((p) => ({ ...p, phone: v }));
                    setTouched((p) => ({ ...p, phone: true }));
                  }}
                  placeholder="+1 ..."
                  error={editing ? errors.phone : ""}
                  autoComplete="tel"
                  disabled={!editing || saving}
                />
              </div>

              <div className="border-t border-slate-200/60 pt-10">
                <SectionTitle
                  icon={<Lock size={18} />}
                  title="Password"
                  subtitle="Optional: change password by filling both fields."
                />

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Field
                    label="Current password"
                    icon={<Lock size={18} />}
                    type={showPw ? "text" : "password"}
                    value={form.currentPassword}
                    onChange={(v) => {
                      if (!editing) return;
                      setForm((p) => ({ ...p, currentPassword: v }));
                      setTouched((p) => ({ ...p, currentPassword: true }));
                    }}
                    placeholder="••••••••"
                    error={editing ? errors.currentPassword : ""}
                    autoComplete="current-password"
                    disabled={!editing || saving}
                    right={
                      <button
                        type="button"
                        onClick={() => setShowPw((s) => !s)}
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                        disabled={!editing}
                        aria-label={showPw ? "Hide password" : "Show password"}
                      >
                        {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    }
                  />

                  <Field
                    label="New password"
                    icon={<Lock size={18} />}
                    type={showPw ? "text" : "password"}
                    value={form.newPassword}
                    onChange={(v) => {
                      if (!editing) return;
                      setForm((p) => ({ ...p, newPassword: v }));
                      setTouched((p) => ({ ...p, newPassword: true }));
                    }}
                    placeholder="Min 6 characters"
                    error={editing ? errors.newPassword : ""}
                    autoComplete="new-password"
                    disabled={!editing || saving}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-5">
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={save}
                  disabled={!editing || saving}
                  className="w-full py-5 rounded-full font-black text-xs tracking-[0.35em] uppercase text-white transition-all inline-flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(145deg, #1a1d24, #000000)",
                    boxShadow:
                      "0px 25px 60px rgba(0,0,0,0.18), 0px 10px 30px rgba(0,0,0,0.12)",
                    opacity: !editing || saving ? 0.75 : 1,
                  }}
                >
                  {saving ? "Saving..." : "Save Changes"}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
                    <Check size={16} />
                  </span>
                </motion.button>

                <AnimatePresence>
                  {editing && hasErrors ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="text-center text-[10px] font-black uppercase tracking-[0.35em] text-slate-400"
                    >
                      Fix highlighted fields to continue
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
