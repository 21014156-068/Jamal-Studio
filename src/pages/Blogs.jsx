import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Clock,
  ArrowRight,
  Zap,
  Cpu,
  ShieldCheck,
  MousePointer2,
  Filter,
  CheckCircle2,
  X,
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

const BLOG_CATEGORIES = [
  "All",
  "Performance",
  "E-commerce",
  "Development",
  "Security",
];

const BLOG_DATA = [
  {
    id: 1,
    category: "Performance",
    title: "Why 99+ PageSpeed is the New Standard for 2024",
    excerpt:
      "Forensic analysis of how load times directly correlate with conversion lift and Google rankings.",
    readTime: "6 min",
    tag: "TECHNICAL_AUDIT",
    metric: "100% Core Vitals",
    color: "#3b82f6",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "E-commerce",
    title: "Optimizing Shopify Checkout for Maximum ROI",
    excerpt:
      "Technical strategies to reduce cart abandonment through custom Liquid tuning and headless bridges.",
    readTime: "8 min",
    tag: "REVENUE_LOGIC",
    metric: "+45% Growth",
    color: "#10b981",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Development",
    title: "The Architecture of Scalable Digital Engines",
    excerpt:
      "Deep-dive into Next.js and React server-side rendering for enterprise-grade business platforms.",
    readTime: "12 min",
    tag: "CORE_ASSEMBLY",
    metric: "Type-Safe Code",
    color: "#a855f7",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -12 }}
    className="p-8 rounded-[45px] flex flex-col group transition-all duration-500"
    style={nStyle("outset", 1.1)}
  >
    <div
      className="relative h-56 rounded-[30px] overflow-hidden mb-8"
      style={nStyle("inset")}
    >
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[9px] font-black tracking-widest bg-slate-900/80 text-white uppercase backdrop-blur-md">
        {post.tag}
      </div>
    </div>

    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-2 text-slate-400">
        <Clock size={14} />
        <span className="text-[10px] font-black uppercase">
          {post.readTime} Read
        </span>
      </div>
      <div className="w-[1px] h-3 bg-slate-200" />
      <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">
        {post.category}
      </span>
    </div>

    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors">
      {post.title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed font-semibold mb-8 flex-grow">
      {post.excerpt}
    </p>

    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-500" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
          {post.metric}
        </span>
      </div>
      <motion.div whileHover={{ x: 5 }} className="cursor-pointer">
        <ArrowRight
          size={20}
          className="text-slate-300 group-hover:text-slate-900 transition-colors"
        />
      </motion.div>
    </div>
  </motion.div>
);

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  // SEARCH & FILTER LOGIC
  const filteredBlogs = useMemo(() => {
    return BLOG_DATA.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 shadow-inner"
                style={nStyle("inset")}
              >
                <BookOpen size={14} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                  The Intelligence Hub
                </span>
              </motion.div>
              <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-[0.85] mb-8">
                Knowledge{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 italic">
                  Archive.
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                Technical insights and performance strategies from the Jamal
                Studio laboratory.
              </p>
            </div>

            <div
              className="w-full lg:w-96 p-10 rounded-[45px]"
              style={nStyle("outset", 1.2)}
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap size={18} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                  Weekly Briefing
                </span>
              </div>
              <div className="space-y-4">
                <input
                  placeholder="professional@email.com"
                  className="w-full p-4 rounded-xl text-xs outline-none"
                  style={nStyle("inset")}
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-black text-[10px] tracking-[0.2em] text-white"
                  style={{
                    background: "linear-gradient(145deg, #1a1d24, #000000)",
                  }}
                >
                  SUBSCRIBE_TO_INTEL
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONSOLIDATED FILTER & SEARCH CONSOLE */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div
          className="p-4 rounded-[35px] flex flex-col lg:flex-row items-center gap-6"
          style={nStyle("outset", 0.9)}
        >
          {/* Search Box */}
          <div className="relative w-full lg:w-80 group">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query Database..."
              className="w-full p-4 pl-12 pr-10 rounded-2xl outline-none text-xs font-bold text-slate-700 placeholder:text-slate-400"
              style={nStyle("inset")}
            />
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="h-10 w-[1px] bg-slate-200 hidden lg:block" />

          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            {BLOG_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${activeCategory === cat ? "text-blue-600" : "text-slate-400"}`}
                style={activeCategory === cat ? nStyle("inset") : {}}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center flex flex-col items-center"
              >
                <div className="p-8 rounded-full mb-6" style={nStyle("inset")}>
                  <Search size={40} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase">
                  No Data Found
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  No technical logs match your current query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 text-blue-600 font-bold uppercase text-[10px] tracking-widest underline"
                >
                  Reset Terminal
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Search Shortcut Module */}
          {filteredBlogs.length > 0 && (
            <motion.div
              className="p-10 rounded-[45px] flex flex-col justify-center items-center text-center border-2 border-dashed border-slate-200 opacity-60 hover:opacity-100 transition-all cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => searchInputRef.current.focus()}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner"
                style={nStyle("inset")}
              >
                <Search
                  size={32}
                  className="text-slate-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">
                Search Library
              </h4>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                Enter custom query
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Decorative UI */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 left-10 hidden xl:block opacity-20 pointer-events-none"
      >
        <MousePointer2 size={60} className="text-blue-500" />
        <span className="bg-blue-600 text-[10px] font-black px-2 py-1 rounded text-white mt-2 block">
          DATABASE_READY
        </span>
      </motion.div>
    </div>
  );
};

export default BlogsPage;
