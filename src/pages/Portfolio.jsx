import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  GithubIcon,
  X,
  CheckCircle2,
  Layers,
  Star,
  ChevronLeft,
  ChevronRight,
  Monitor,
  ShieldCheck,
  Zap,
  Coffee,
  Heart,
} from "lucide-react";
import TestimonialsSection from "../componets/Testmonial";

// --------------------------------------------
// PROJECT DATA (unchanged)
// --------------------------------------------
const projects = [
  {
    id: 1,
    title: "Green Garde",
    category: "Mern Stack",
    isFeatured: false,
    image: "/Main.png",
    description:
      "A full-stack MERN eCommerce platform specializing in gardening products. Features include user authentication, product catalog, shopping cart, secure checkout, and a unique gardener booking system. Integrated AI capabilities including a CNN-based plant recognition model and AI chatbot for customer support.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "CNN",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "User authentication system",
      "AI-powered plant recognition",
      "Shopping cart & secure checkout",
      "Gardener booking system",
      "Admin panel for management",
    ],
    liveLink: null,
    githubLink: "https://github.com/21014156-068/green-garden",
  },
  {
    id: 2,
    title: "Paswal Tours LTD",
    category: "Travel Agency Website",
    isFeatured: true,
    image: "/loo.png",
    description:
      "A comprehensive online travel and visa services platform offering multi-entry and single-entry visas, flight bookings, and Pakistan NADRA services including ID card and passport issuance and renewal.",
    techStack: ["WordPress", "Elementor", "PHP", "Html", "Tailwind CSS"],
    features: [
      "Visa Services",
      "Flight Booking",
      "Pakistan NADRA Services",
      "Customer Support",
      "Secure Payments",
    ],
    liveLink: "https://mysafetrips.com/",
    githubLink: null,
  },
  {
    id: 3,
    title: "Alfattah Vibes",
    category: "Ecommerce Website",
    isFeatured: false,
    image: "/al.png",
    description:
      "A comprehensive eCommerce platform built with wordpress woocommerce for local business owner to sell their products online.",
    techStack: ["WordPress", "Elementor", "PHP", "Html", "Tailwind CSS"],
    features: [
      "Fully responsive design",
      "Advanced 3D animations",
      "Smooth page transitions",
      "Fully Functional checkout system",
    ],
    liveLink: "https://alfattahvibes.com/",
    githubLink: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Development",
    isFeatured: false,
    image: "/p3.png",
    description:
      "A professional developer portfolio built with React, TailwindCSS, Framer Motion, and Three.js. The site includes advanced 3D animations, smooth transitions, multi-page navigation (Home, About, Resume, Services, Projects, Contact), and a CV download feature.",
    techStack: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
    features: [
      "Fully responsive design",
      "Advanced 3D animations",
      "Smooth page transitions",
      "Multi-page layout",
      "CV download functionality",
    ],
    liveLink: "https://abdullahjs.dev/",
    githubLink: "https://github.com/21014156-068/portfolio/",
  },
];

// --------------------------------------------
// NEUMORPHIC CONFIG
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featuredIndex = projects.findIndex((p) => p.isFeatured);

  const getCircularProjects = () => {
    const result = [];
    const total = projects.length;
    for (let i = 0; i < total; i++) {
      const index = (featuredIndex + i) % total;
      result.push(projects[index]);
    }
    return result;
  };

  const circularProjects = getCircularProjects();

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % circularProjects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + circularProjects.length) % circularProjects.length,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getCardPosition = (index) => {
    const totalCards = circularProjects.length;
    let relativePos = (index - currentIndex + totalCards) % totalCards;
    if (relativePos > totalCards / 2) relativePos -= totalCards;

    const isCenter = relativePos === 0;
    const radius = isMobile ? 0 : 380;
    const angleStep = 30;
    const angle = relativePos * angleStep;

    const xOffset = isMobile
      ? relativePos * 85 + "%"
      : Math.sin(angle * (Math.PI / 180)) * radius;
    const scale = isCenter ? 1 : isMobile ? 0.85 : 0.75;
    const opacity = isCenter ? 1 : isMobile ? 0 : 0.5;
    const zIndex = 10 - Math.abs(relativePos);

    return { x: xOffset, scale, opacity, zIndex, isCenter };
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @media (max-width: 768px) {
            .mobile-title { font-size: 2.2rem !important; }
            .nav-btn { width: 45px !important; height: 45px !important; }
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      {/* Header */}
      <header style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ ...styles.badge, ...nStyle("inset") }}
        >
          <Monitor size={14} />
          <span>Success Stories</span>
        </motion.div>

        <h1 style={styles.title} className="mobile-title">
          Proven <span style={styles.gradientText}>Results.</span>
        </h1>
        <p style={styles.subtitle}>
          High-performance digital engines engineered for growth.
        </p>
      </header>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <button
          onClick={handlePrev}
          style={{
            ...styles.navButton,
            ...styles.navButtonLeft,
            ...nStyle("outset"),
          }}
          disabled={isTransitioning}
          className="nav-btn"
        >
          <ChevronLeft size={24} />
        </button>

        <div style={styles.cardsWrapper}>
          {circularProjects.map((project, index) => {
            const pos = getCardPosition(index);
            return (
              <motion.div
                key={`${project.id}-${index}`}
                style={{
                  ...styles.card,
                  ...nStyle("outset", pos.isCenter ? 1.2 : 0.6),
                  zIndex: pos.zIndex,
                  display: pos.opacity === 0 ? "none" : "flex",
                }}
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  translateX: "-50%",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => pos.isCenter && setSelectedProject(project)}
              >
                {project.isFeatured && (
                  <div style={styles.featuredBadge}>
                    <Star size={12} fill="currentColor" /> Featured
                  </div>
                )}
                <div style={{ ...styles.imageWrapper, ...nStyle("inset") }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.cardImage}
                  />
                </div>
                <div style={styles.cardOverlay}>
                  <span style={styles.cardCategory}>{project.category}</span>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          style={{
            ...styles.navButton,
            ...styles.navButtonRight,
            ...nStyle("outset"),
          }}
          disabled={isTransitioning}
          className="nav-btn"
        >
          <ChevronRight size={24} />
        </button>

        <div style={styles.pagination}>
          {circularProjects.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.paginationDot,
                ...nStyle(index === currentIndex ? "inset" : "outset"),
                backgroundColor:
                  index === currentIndex ? "#2563eb" : themeColor,
                width: index === currentIndex ? "30px" : "12px",
              }}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalBackdrop}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              style={{ ...styles.modalContent, backgroundColor: themeColor }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{ ...styles.closeBtn, ...nStyle("outset") }}
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              <div style={styles.modalGrid}>
                <div style={styles.modalMedia}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={styles.modalImg}
                  />
                </div>
                <div style={styles.modalDetails}>
                  <span style={styles.modalCategory}>
                    {selectedProject.category}
                  </span>
                  <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                  <p style={styles.modalDesc}>{selectedProject.description}</p>
                  <div style={styles.modalColumns}>
                    <div>
                      <div style={styles.sectionTitle}>
                        <Layers size={16} /> Tech Stack
                      </div>
                      <div style={styles.tagContainer}>
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{ ...styles.tag, ...nStyle("outset", 0.4) }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={styles.sectionTitle}>
                        <CheckCircle2 size={16} /> Features
                      </div>
                      <ul style={styles.featureList}>
                        {selectedProject.features.map((feat) => (
                          <li key={feat} style={styles.featureItem}>
                            <div style={styles.featureBullet} /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={styles.btnGroup}>
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      style={{ ...styles.primaryBtn, ...nStyle("outset") }}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        style={{ ...styles.secondaryBtn, ...nStyle("outset") }}
                      >
                        <GithubIcon size={18} /> GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <div style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
        <TestimonialsSection />
      </div>

      {/* NEW ADVANCED TRUST & ENGAGEMENT SECTION */}
      <section style={styles.trustSection}>
        <div style={styles.trustContainer}>
          <div style={styles.trustHeader}>
            <div
              style={{
                ...styles.badge,
                margin: "0 auto 15px auto",
                ...nStyle("inset"),
              }}
            >
              <ShieldCheck size={14} />
              <span>Zero Risk Commitment</span>
            </div>
            <h2
              style={{
                ...styles.title,
                fontSize: "2.5rem",
                marginBottom: "15px",
              }}
            >
              Why Trust My <span style={styles.gradientText}>Process?</span>
            </h2>
            <p style={{ ...styles.subtitle, margin: "0 auto 40px auto" }}>
              Building digital excellence isn't just about code; it's about
              reliability and measurable impact.
            </p>
          </div>

          <div style={styles.statsGrid} className="stats-grid">
            {[
              {
                icon: <Zap color="#2563eb" />,
                label: "Avg. Performance Score",
                value: "98%",
                desc: "Optimized for Core Web Vitals",
              },
              {
                icon: <CheckCircle2 color="#2563eb" />,
                label: "Project Success Rate",
                value: "100%",
                desc: "Every project delivered on time",
              },
              {
                icon: <Coffee color="#2563eb" />,
                label: "Cups of Coffee",
                value: "840+",
                desc: "Fueling complex logic & design",
              },
              {
                icon: <Heart color="#2563eb" />,
                label: "Client Satisfaction",
                value: "5.0",
                desc: "Based on 20+ verified reviews",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                style={{ ...styles.statCard, ...nStyle("outset") }}
              >
                <div style={{ ...styles.statIcon, ...nStyle("inset") }}>
                  {stat.icon}
                </div>
                <h4 style={styles.statValue}>{stat.value}</h4>
                <p style={styles.statLabel}>{stat.label}</p>
                <p style={styles.statDesc}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ ...styles.guaranteeBox, ...nStyle("inset") }}>
            <div style={styles.guaranteeFlex}>
              <div style={styles.guaranteeText}>
                <h4 style={{ margin: "0 0 5px 0", color: "#31344b" }}>
                  Quality Assurance Guarantee
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
                  Every line of code is tested for security, scalability, and
                  responsiveness before deployment.
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                style={{
                  ...styles.primaryBtn,
                  ...nStyle("outset"),
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => (window.location.href = "#contact")}
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#F5F5F5",
    minHeight: "100vh",
    color: "#444",
    fontFamily: "'Inter', sans-serif",
    overflowX: "hidden",
  },
  header: {
    textAlign: "center",
    marginBottom: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  badge: {
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#777",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "100px",
    marginBottom: "0px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "900",
    marginBottom: "-10px",
    color: "#31344b",
    letterSpacing: "-1px",
  },
  gradientText: {
    color: "#2563eb",
  },
  subtitle: {
    color: "#777",
    fontSize: "1.1rem",
    marginTop: "10px",
    maxWidth: "500px",
    marginBottom: "-30px",
  },
  carouselContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    height: "600px",
    display: "flex",
    alignItems: "center",
  },
  cardsWrapper: {
    position: "relative",
    width: "100%",
    height: "450px",
    perspective: "1000px",
  },
  card: {
    position: "absolute",
    width: "min(90%, 360px)",
    height: "430px",
    borderRadius: "40px",
    padding: "20px",
    left: "50%",
    flexDirection: "column",
    cursor: "pointer",
  },
  imageWrapper: {
    width: "100%",
    height: "240px",
    borderRadius: "25px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardOverlay: {
    padding: "10px",
    textAlign: "center",
  },
  cardCategory: {
    fontSize: "11px",
    textTransform: "uppercase",
    color: "#2563eb",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#31344b",
    margin: "10px 0",
  },
  featuredBadge: {
    position: "absolute",
    top: "35px",
    left: "35px",
    background: "#31344b",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    zIndex: 2,
  },
  navButton: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    color: "#31344b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    position: "absolute",
  },
  navButtonLeft: { left: "5px" },
  navButtonRight: { right: "5px" },
  pagination: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
  },
  paginationDot: {
    height: "12px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "0px",
  },
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#F5F5F5",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "15px",
  },
  modalContent: {
    width: "100%",
    maxWidth: "1000px",
    maxHeight: "90vh",
    borderRadius: "40px",
    overflowY: "auto",
    position: "relative",
    padding: "30px",
    boxShadow: "20px 20px 60px #babecc, -20px -20px 60px #ffffff",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  modalImg: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "inset 5px 5px 10px #babecc, inset -5px -5px 10px #ffffff",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    zIndex: 100,
  },
  tag: {
    padding: "6px 15px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#555",
  },
  primaryBtn: {
    padding: "12px 25px",
    borderRadius: "15px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  secondaryBtn: {
    padding: "12px 25px",
    borderRadius: "15px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#31344b",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  modalCategory: {
    color: "#2563eb",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  modalTitle: { fontSize: "32px", margin: "10px 0", color: "#31344b" },
  modalDesc: { color: "#666", lineHeight: "1.6" },
  modalColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    margin: "25px 0",
  },
  sectionTitle: {
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },
  tagContainer: { display: "flex", flexWrap: "wrap", gap: "8px" },
  featureList: { listStyle: "none", padding: 0 },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
    fontSize: "14px",
  },
  featureBullet: {
    width: "6px",
    height: "6px",
    background: "#2563eb",
    borderRadius: "50%",
  },
  btnGroup: { display: "flex", gap: "15px" },

  /* NEW SECTION STYLES */
  trustSection: {
    padding: "100px 20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  trustContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  trustHeader: {
    textAlign: "center",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "25px",
  },
  statCard: {
    padding: "30px 20px",
    borderRadius: "30px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  statIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  statValue: {
    fontSize: "2rem",
    fontWeight: "900",
    margin: "0",
    color: "#31344b",
  },
  statLabel: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#2563eb",
    margin: "5px 0",
  },
  statDesc: {
    fontSize: "12px",
    color: "#888",
    margin: 0,
  },
  guaranteeBox: {
    marginTop: "20px",
    padding: "30px 40px",
    borderRadius: "30px",
  },
  guaranteeFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  guaranteeText: {
    maxWidth: "600px",
  },
};
