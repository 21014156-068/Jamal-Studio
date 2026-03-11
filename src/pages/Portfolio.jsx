import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Note: ensure you use your project's framer-motion import
import {
  ExternalLink,
  Github,
  X,
  CheckCircle2,
  Layers,
  Star,
  ChevronLeft,
  ChevronRight,
  Monitor,
} from "lucide-react";
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
    image: "/pas1.png",
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
      "Multi-page layout (Home, About, Resume, Services, Projects, Contact)",
      "CV download functionality",
    ],
    liveLink: "https://abdullahjs.dev/",
    githubLink: "https://github.com/21014156-068/portfolio/",
  },
];

// Finalized Jamal Studio HD Neumorphic Logic
const nStyle = (type = "outset", intensity = 1) => {
  const shadows = {
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

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

    const angleStep = 30;
    const angle = relativePos * angleStep;
    const radius = 400;
    const xOffset = Math.sin(angle * (Math.PI / 180)) * radius;

    const distance = Math.abs(relativePos);
    const scale = Math.max(0.7, 1 - distance * 0.15);
    const opacity = Math.max(0.4, 1 - distance * 0.2);
    const zIndex = totalCards - distance;

    return {
      x: xOffset,
      scale,
      opacity,
      zIndex,
      isCenter: relativePos === 0,
    };
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <header style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.badge}
        >
          <Monitor size={14} />
          <span>Success Stories</span>
        </motion.div>
        <h1 style={styles.title}>
          Proven <span style={styles.gradientText}>Results.</span>
        </h1>
        <p style={styles.subtitle}>
          A collection of high-performance digital engines engineered for
          scalability and growth.
        </p>
      </header>

      <div style={styles.carouselContainer} ref={containerRef}>
        <button
          onClick={handlePrev}
          style={{ ...styles.navButton, ...styles.navButtonLeft }}
          disabled={isTransitioning}
        >
          <ChevronLeft size={30} />
        </button>

        <div style={styles.cardsWrapper}>
          {circularProjects.map((project, index) => {
            const position = getCardPosition(index);

            return (
              <motion.div
                key={`${project.id}-${index}`}
                style={{
                  ...styles.card,
                  ...nStyle("outset", position.isCenter ? 1.2 : 0.8),
                  zIndex: position.zIndex,
                  opacity: position.opacity,
                }}
                animate={{
                  x: position.x,
                  scale: position.scale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                onClick={() => position.isCenter && setSelectedProject(project)}
              >
                {project.isFeatured && (
                  <div style={styles.featuredBadge}>
                    <Star size={12} fill="currentColor" /> Featured
                  </div>
                )}

                <div style={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.cardImage}
                  />
                </div>

                <div style={styles.cardOverlay}>
                  <span style={styles.cardCategory}>{project.category}</span>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  {position.isCenter && (
                    <button style={styles.viewBtn}>Project Details</button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          style={{ ...styles.navButton, ...styles.navButtonRight }}
          disabled={isTransitioning}
        >
          <ChevronRight size={30} />
        </button>

        <div style={styles.pagination}>
          {circularProjects.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.paginationDot,
                backgroundColor: index === currentIndex ? "#2563eb" : "#cbd5e1",
                width: index === currentIndex ? "24px" : "10px",
              }}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
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
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="hide-scrollbar"
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
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

                  <div style={styles.sectionTitle}>
                    <Layers size={16} color="#2563eb" /> Technology Stack
                  </div>
                  <div style={styles.tagContainer}>
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} style={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={styles.sectionTitle}>
                    <CheckCircle2 size={16} color="#059669" /> Key Outcomes
                  </div>
                  <ul style={styles.featureList}>
                    {selectedProject.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#2563eb",
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div style={styles.btnGroup}>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.primaryBtn}
                    >
                      <ExternalLink size={18} /> Launch Live Demo
                    </a>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.secondaryBtn}
                      >
                        <Github size={18} /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  page: {
    background: "#F5F5F5",
    minHeight: "100vh",
    padding: "80px 20px",
    color: "#0f172a",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  badge: {
    padding: "8px 16px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    boxShadow:
      "inset 4px 4px 10px rgba(51, 65, 85, 0.1), inset -4px -4px 10px rgba(255, 255, 255, 0.5)",
    fontSize: "10px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#64748b",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
    border: "1.5px solid #E2E8F0",
  },
  title: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: "900",
    letterSpacing: "-2px",
    margin: "0",
    color: "#0f172a",
  },
  gradientText: {
    background: "linear-gradient(to right, #2563eb, #06b6d4, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "18px",
    marginTop: "15px",
    maxWidth: "600px",
    lineHeight: "1.6",
    fontWeight: "500",
  },
  carouselContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    padding: "40px 0 80px",
  },
  cardsWrapper: {
    position: "relative",
    height: "550px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
  },
  card: {
    position: "absolute",
    width: "380px",
    height: "520px",
    borderRadius: "45px",
    overflow: "hidden",
    cursor: "pointer",
    left: "50%",
    marginLeft: "-190px",
    padding: "15px",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: "32px",
    overflow: "hidden",
    boxShadow:
      "inset 6px 6px 12px rgba(51, 65, 85, 0.1), inset -6px -6px 12px rgba(255, 255, 255, 0.8)",
    backgroundColor: "#f1f5f9",
  },
  featuredBadge: {
    position: "absolute",
    top: "30px",
    left: "30px",
    zIndex: 5,
    background: "linear-gradient(to right, #1e293b, #0f172a)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "100px",
    fontSize: "10px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardOverlay: {
    position: "absolute",
    bottom: "15px",
    left: "15px",
    right: "15px",
    padding: "30px",
    background:
      "linear-gradient(to top, rgba(255,255,255,1) 30%, rgba(255,255,255,0.8) 60%, transparent)",
    borderRadius: "0 0 32px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  cardCategory: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#64748b",
    fontWeight: "800",
  },
  cardTitle: {
    fontSize: "24px",
    margin: "0",
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: "-0.5px",
  },
  viewBtn: {
    marginTop: "15px",
    background: "#0f172a",
    border: "none",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1px",
    width: "fit-content",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#FFFFFF",
    border: "1.5px solid #E2E8F0",
    color: "#64748b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    boxShadow:
      "10px 10px 20px rgba(51, 65, 85, 0.1), -10px -10px 20px rgba(255, 255, 255, 1)",
    transition: "all 0.3s ease",
  },
  navButtonLeft: { left: "40px" },
  navButtonRight: { right: "40px" },
  pagination: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 10,
  },
  paginationDot: {
    height: "10px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalContent: {
    background: "#FFFFFF",
    width: "100%",
    maxWidth: "1100px",
    maxHeight: "90vh",
    borderRadius: "45px",
    overflowY: "auto",
    position: "relative",
    border: "1.5px solid #E2E8F0",
    boxShadow: "0 40px 100px rgba(51, 65, 85, 0.2)",
  },
  closeBtn: {
    position: "absolute",
    top: "30px",
    right: "30px",
    background: "#FFFFFF",
    border: "1.5px solid #E2E8F0",
    color: "#64748b",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "6px 6px 12px rgba(51, 65, 85, 0.1), -6px -6px 12px rgba(255, 255, 255, 1)",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
  },
  modalMedia: {
    width: "100%",
    height: "100%",
    minHeight: "500px",
    background: "#f8fafc",
    padding: "20px",
  },
  modalImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  modalDetails: {
    padding: "60px",
  },
  modalCategory: {
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  modalTitle: {
    fontSize: "42px",
    margin: "15px 0",
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: "-1.5px",
  },
  modalDesc: {
    color: "#475569",
    lineHeight: "1.8",
    fontSize: "16px",
    marginBottom: "35px",
    fontWeight: "500",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "14px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#0f172a",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "35px",
  },
  tag: {
    background: "#f1f5f9",
    padding: "8px 18px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#475569",
    border: "1.5px solid #e2e8f0",
  },
  featureList: {
    paddingLeft: "0",
    color: "#475569",
    fontSize: "15px",
    marginBottom: "45px",
    listStyle: "none",
    fontWeight: "600",
  },
  btnGroup: {
    display: "flex",
    gap: "15px",
  },
  primaryBtn: {
    background: "linear-gradient(145deg, #1e293b, #0f172a)",
    color: "#fff",
    padding: "18px 32px",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.2)",
  },
  secondaryBtn: {
    background: "#FFFFFF",
    color: "#0f172a",
    padding: "18px 32px",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1.5px solid #E2E8F0",
    boxShadow: "10px 10px 20px rgba(51, 65, 85, 0.05)",
  },
};
