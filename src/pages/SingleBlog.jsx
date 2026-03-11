import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  MessageCircle,
  Calendar,
  User,
  ArrowRight,
  Clock,
  BookOpen,
  Share2,
  Heart,
  Eye,
  ChevronLeft,
  Bookmark,
  ArrowUp,
  Hash,
  Minus,
  Cpu,
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

const SingleBlogPost = ({
  title = "Engineering the Future of Web Performance",
  image = "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1200&q=80",
  author = "Abdullah",
  date = "March 12, 2024",
  content = "",
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocItems, setTocItems] = useState([]);

  // Default technical content
  const defaultContent = `
    <h1 id="introduction">The High-Performance Mandate</h1>
    <p>In the modern digital landscape, speed isn't just a technical metric; it's the foundation of business growth. As we move through 2024, the gap between performant digital engines and standard websites is widening.</p>
    
    <h2 id="technologies">Technical Stack Evolution</h2>
    <p>Several technologies are defining the next generation of web performance:</p>
    
    <ul>
      <li>Next.js App Router for optimized streaming</li>
      <li>Edge Runtime for global low-latency execution</li>
      <li>Headless E-commerce bridges for rapid checkouts</li>
      <li>Zero-runtime CSS for minimal main-thread blocking</li>
    </ul>
    
    <h3 id="rendering">Dynamic Rendering</h3>
    <p>Moving away from heavy client-side bundles towards server-side precision ensures that users see content in under 800ms.</p>
    
    <h2 id="conclusion">The Path Forward</h2>
    <p>Architecture matters. By prioritizing Core Web Vitals and technical SEO from day one, brands can establish a dominant online presence that converts at significantly higher rates.</p>
    
    <blockquote>
      "Performance is the silent salesman. It builds trust before the user reads a single word of your copy."
    </blockquote>
    
    <p>Implementation example: <code>const engine = initializeGrowth();</code></p>
  `;

  const contentToUse = content || defaultContent;

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentToUse, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3");
    const newTocItems = Array.from(headings)
      .filter((heading) => heading.id)
      .map((heading) => {
        const level = parseInt(heading.tagName.substring(1));
        return {
          id: heading.id,
          label: heading.textContent,
          icon: level === 1 ? <Hash size={14} /> : <Minus size={14} />,
          level: level,
        };
      });
    setTocItems(newTocItems);
  }, [contentToUse]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      if (tocItems.length > 0) {
        let currentSection = "";
        for (const item of tocItems) {
          const element = document.getElementById(item.id);
          if (element && window.scrollY >= element.offsetTop - 150) {
            currentSection = item.id;
          }
        }
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element)
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-8 px-4 font-sans selection:bg-blue-100 selection:text-blue-600">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <motion.button
            whileHover={{ x: -8 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 group"
            onClick={() => window.history.back()}
          >
            <div
              className="p-3 rounded-2xl transition-all"
              style={nStyle("outset", 0.5)}
            >
              <ChevronLeft size={20} className="text-blue-600" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">
              Knowledge_Archive
            </span>
          </motion.button>
        </motion.div>

        {/* 1. TOP LAYOUT: SIDEBAR + ARTICLE */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Table of Contents Sidebar */}
          {tocItems.length > 0 && (
            <motion.div
              className="lg:w-1/4 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div
                className="sticky top-28 p-8 rounded-[40px]"
                style={nStyle("outset")}
              >
                <h3 className="text-[10px] font-black text-slate-900 mb-8 flex items-center uppercase tracking-[0.3em]">
                  <Cpu className="mr-3 text-blue-600" size={16} /> Navigation
                </h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-3 px-4 rounded-xl flex items-center transition-all duration-500 ${
                        activeSection === item.id
                          ? "text-blue-600 font-bold"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                      style={
                        activeSection === item.id
                          ? nStyle("inset", 0.5)
                          : { paddingLeft: `${(item.level - 1) * 12 + 16}px` }
                      }
                    >
                      <span className="mr-3 opacity-50">{item.icon}</span>
                      <span className="text-[11px] uppercase tracking-wider truncate">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}

          {/* Main Prose Content Area */}
          <div className={tocItems.length > 0 ? "lg:w-3/4" : "w-full"}>
            <article>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                {[
                  { icon: User, label: author },
                  { icon: Calendar, label: date },
                  { icon: Clock, label: "8 min read" },
                  { icon: Eye, label: "1.2K Analysed" },
                ].map((meta, i) => (
                  <div
                    key={i}
                    className="flex items-center px-4 py-2 rounded-xl"
                    style={nStyle("inset")}
                  >
                    <meta.icon size={12} className="mr-2 text-blue-600" />
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">
                      {meta.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-12"
              >
                {title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[50px] overflow-hidden mb-16 h-[500px] relative shadow-2xl"
                style={nStyle("outset", 1.2)}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div
                  className="absolute bottom-8 right-8 px-5 py-2 rounded-2xl text-[10px] font-black uppercase bg-white/90 backdrop-blur-md text-slate-900"
                  style={nStyle("outset", 0.3)}
                >
                  System_Visual: ON
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-slate max-w-none"
              >
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: contentToUse }}
                />
              </motion.div>
            </article>
          </div>
        </div>

        {/* 2. FULL WIDTH: ACTION BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[45px] mb-12"
          style={nStyle("outset")}
        >
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Share_Brief:
            </span>
            <div className="flex gap-4">
              {[Linkedin, Twitter, MessageCircle].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 rounded-2xl"
                  style={nStyle("outset", 0.5)}
                >
                  <Icon size={20} className="text-blue-600" />
                </motion.button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 rounded-3xl"
              style={nStyle("inset")}
            >
              <Heart size={20} className="text-rose-500 fill-rose-500/20" />
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
                312 Endorsements
              </span>
            </motion.button>
            <motion.button
              onClick={() => setIsBookmarked(!isBookmarked)}
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-2xl"
              style={nStyle("outset", 0.5)}
            >
              <Bookmark
                size={20}
                className={
                  isBookmarked
                    ? "text-blue-600 fill-blue-600"
                    : "text-slate-300"
                }
              />
            </motion.button>
          </div>
        </motion.div>

        {/* 3. FULL WIDTH: AUTHOR TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-12 rounded-[50px] mb-24 flex flex-col md:flex-row items-center gap-12"
          style={nStyle("inset")}
        >
          <div
            className="w-32 h-32 rounded-[40px] flex items-center justify-center text-white font-black text-5xl shadow-2xl transition-all"
            style={{
              background: "linear-gradient(145deg, #1e293b, #0f172a)",
              ...nStyle("outset"),
            }}
          >
            {author.charAt(0)}
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                {author}
              </h3>
              <div className="px-3 py-1 rounded-lg bg-blue-600 text-[9px] font-black text-white tracking-widest uppercase">
                Verified Architect
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-3xl">
              Technical Lead at Jamal Studio. Specializing in high-concurrency
              architectures, server-side performance tuning, and scaling digital
              engines for modern global brands.
            </p>
          </div>
        </motion.div>

        {/* RELATED BRIEFINGS */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
              System Related Logs
            </h2>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2"
            >
              Explore Feed <ArrowRight size={14} />
            </motion.a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                className="p-8 rounded-[40px] group transition-all"
                style={nStyle("outset")}
              >
                <div
                  className="h-44 rounded-[30px] overflow-hidden mb-6"
                  style={nStyle("inset")}
                >
                  <div className="w-full h-full bg-slate-100 group-hover:bg-blue-50 transition-colors" />
                </div>
                <div className="text-[9px] font-black text-blue-600 uppercase mb-4 tracking-widest">
                  Protocol: 0.9.3
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  Scaling WooCommerce Architecture for High-Volume Checkouts
                </h4>
                <div className="flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-black uppercase">
                    MAR 10
                  </span>
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-5 rounded-2xl text-blue-600 transition-all z-50 ${showScrollTop ? "opacity-100" : "opacity-0"}`}
        style={nStyle("outset")}
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* REFINED CONTENT STYLES */}
      <style jsx global>{`
        .blog-content h1,
        .blog-content h2,
        .blog-content h3 {
          color: #0f172a;
          font-weight: 900;
          margin: 4rem 0 1.5rem;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          scroll-margin-top: 120px;
        }
        .blog-content h2 {
          font-size: 2.5rem;
          line-height: 1.1;
          border-left: 6px solid #2563eb;
          padding-left: 1.5rem;
        }
        .blog-content p {
          color: #475569;
          line-height: 1.9;
          margin-bottom: 2rem;
          font-size: 1.25rem;
          font-weight: 500;
        }
        .blog-content ul {
          list-style: none;
          padding: 0;
          margin: 2.5rem 0;
        }
        .blog-content li {
          position: relative;
          padding-left: 2.5rem;
          color: #475569;
          margin-bottom: 1.2rem;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .blog-content li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 1rem;
          height: 3px;
          background: #2563eb;
          border-radius: 4px;
        }
        .blog-content blockquote {
          margin: 4rem 0;
          padding: 4rem;
          border-radius: 3rem;
          background: #ffffff;
          box-shadow:
            inset 8px 8px 20px rgba(51, 65, 85, 0.1),
            inset -8px -8px 20px rgba(255, 255, 255, 1);
          font-style: italic;
          color: #1e293b;
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.4;
          text-align: center;
          border: 1px solid #f1f5f9;
        }
        .blog-content code {
          background: #f8fafc;
          color: #2563eb;
          padding: 0.4rem 0.8rem;
          rounded: 0.75rem;
          font-family: "Fira Code", monospace;
          font-weight: 800;
          border: 2px solid #e2e8f0;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
};

export default SingleBlogPost;
