import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Download,
  Briefcase,
  User,
  Mail,
  ExternalLink,
  ArrowRight,
  Code,
  Server,
  Database,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample projects data
const projects = [
  {
    title: "Paswal Tours LTD",
    description:
      "A travel agency website built with WordPress, featuring custom themes and SEO optimization.",
    tags: ["Wordpress", "PHP", "SEO", "Elementor"],
    image: "/pa1.png",
  },
  {
    title: "Green Garden – AI-Powered E-Commerce Platform",
    description:
      "MERN stack e-commerce platform for a plant nursery with AI chatbot and CNN-based plant recognition model.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AI", "CNN"],
    image: "/Main.png",
  },

  {
    title: "Portfolio Website Builder",
    description: "Drag-and-drop portfolio website builder for developers",
    tags: ["React", "Firebase", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

// Sample services data
const services = [
  {
    icon: <Code size={36} />,
    title: "Frontend Development",
    description: "Modern, responsive web applications with React and Next.js",
  },
  {
    icon: <Server size={36} />,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js and Express",
  },
  {
    icon: <Database size={36} />,
    title: "Database Design",
    description: "Efficient database architecture and optimization",
  },
  {
    icon: <Palette size={36} />,
    title: "UI/UX Design",
    description: "User-centered interfaces with modern design principles",
  },
];

// Sample achievements data
const achievements = [
  { value: "15+", label: "Projects Completed" },
  { value: "3", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "∞", label: "Coffee Cups" },
];

const HomePage = () => {
  const [setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Project carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Skill icons for the hero section

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0D0F13 0%, #151920 100%)",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section - Made Responsive */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "0 1rem" : "0 2rem",
        }}
      >
        {/* Enhanced 3D Holographic Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.7,
          }}
        ></div>

        {/* New 3D holographic pyramid */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: isMobile ? "70%" : "75%",
            width: isMobile ? "80px" : "120px",
            height: isMobile ? "80px" : "120px",
            transform: "rotateX(60deg) rotateZ(45deg)",
            opacity: 0.15,
            background:
              "linear-gradient(45deg, rgba(79, 70, 229, 0.3), rgba(236, 72, 153, 0.3))",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "hologramPyramid 10s ease-in-out infinite",
            filter: "blur(8px)",
            zIndex: 1,
          }}
        ></div>

        {/* New holographic grid effect with 3D depth */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            opacity: 0.2,
            pointerEvents: "none",
            animation: "holographGrid 15s linear infinite",
            perspective: "500px",
            transform: "rotateX(60deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>

        {/* Enhanced 3D Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            paddingTop: isMobile ? "100px" : "80px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "2.2rem" : "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #fff, #d1d5db)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Full-Stack Developer &{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Digital Creator
              </span>
            </h1>

            <p
              style={{
                fontSize: isMobile ? "1.1rem" : "1.25rem",
                color: "#d1d5db",
                marginBottom: "2.5rem",
                maxWidth: "600px",
                lineHeight: 1.6,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Let's bring your ideas to life with
              cutting-edge technology.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <button
                  style={{
                    padding: "0.875rem 2rem",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: "linear-gradient(145deg, #4f46e5, #6366f1)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
                    transform: "translateY(0)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(79, 70, 229, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 14px rgba(79, 70, 229, 0.4)";
                  }}
                >
                  View My Work
                  <ChevronRight size={20} />
                </button>
              </Link>

              <Link
                to="/CV.pdf"
                download
                style={{ textDecoration: "none" }} // removes underline
              >
                <button
                  style={{
                    padding: "0.875rem 2rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Download CV
                  <Download size={20} />
                </button>
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "1rem" : "1.5rem",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {achievements.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isMobile ? "center" : "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? "1.3rem" : "1.5rem",
                      fontWeight: 700,
                      background: "linear-gradient(to right, #4f46e5, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#d1d5db",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Icons Grid - Made Responsive */}
          <div
            style={{
              display: "grid",
              // --- CHANGE HERE ---
              // Adjusted gridTemplateColumns for more columns
              gridTemplateColumns: isMobile
                ? "repeat(3, 1fr)"
                : "repeat(5, 1fr)", // Changed from 2/3 to 3/5
              // Decreased gap
              gap: isMobile ? "0.8rem" : "1rem", // Decreased gap for both mobile and desktop
              // --- END CHANGE ---
              justifyItems: "center",
              marginTop: isMobile ? "2rem" : "0",
            }}
          >
            {/* Existing skillIcons + new ones */}
            {[
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              // New Icons
              {
                name: "HTML",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              },
              {
                name: "WordPress",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
              },
              {
                name: "Shopify",
                icon: "https://static.cdnlogo.com/logos/s/31/shopify-2018.svg",
              },
              {
                name: "SEO",
                icon: "https://static.thenounproject.com/png/2218918-512.png",
              },
            ].map(
              (
                skill,
                index, // Make sure to update the array being mapped
              ) => (
                <div
                  key={index}
                  style={{
                    width: isMobile ? "60px" : "70px", // Slightly decreased size to fit more
                    height: isMobile ? "60px" : "70px", // Slightly decreased size to fit more
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform =
                      "translateY(-5px) scale(1.1) rotateY(10deg)";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(79, 70, 229, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform =
                      "translateY(0) scale(1) rotateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: isMobile ? "28px" : "35px",
                      height: isMobile ? "28px" : "35px",
                    }} // Adjusted icon size
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Floating CV Button - Position Adjusted for Mobile */}
        <a
          href="/CV.pdf"
          download
          style={{
            position: "fixed",
            bottom: isMobile ? "1.5rem" : "2rem",
            right: isMobile ? "1.5rem" : "2rem",
            width: isMobile ? "50px" : "60px",
            height: isMobile ? "50px" : "60px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #4f46e5, #6366f1)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(79, 70, 229, 0.4)",
            zIndex: 100,
            animation: "float 3s ease-in-out infinite",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 8px 25px rgba(79, 70, 229, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 20px rgba(79, 70, 229, 0.4)";
          }}
        >
          <Download size={isMobile ? 20 : 24} />
        </a>
      </section>

      {/* Rest of the sections remain exactly the same */}
      {/* Highlight Cards Section */}
      {/* Highlight Cards Section */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {/* About Me Card */}
            <div
              className="neumorph-card highlight-card"
              style={{
                // Added highlight-card class
                background: "#151a22",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative", // Needed for :before pseudo-element
                zIndex: 0, // Needed for :before pseudo-element
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                    marginRight: "1rem",
                  }}
                >
                  <User size={24} color="#4f46e5" />
                </div>
                <h3
                  className="card-content"
                  style={{
                    // Added card-content class
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    background: "linear-gradient(to right, #4f46e5, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.3s ease", // Added transition
                  }}
                >
                  About Me
                </h3>
              </div>
              <p
                className="card-content"
                style={{
                  // Added card-content class
                  color: "#d1d5db",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  transition: "all 0.3s ease", // Added transition
                }}
              >
                Learn more about my journey, skills, and what drives me as a
                developer.
              </p>
              <Link
                to="/about"
                className="card-content"
                style={{
                  // Added card-content class
                  display: "flex",
                  alignItems: "center",
                  color: "#4f46e5",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease", // Added transition
                }}
              >
                Discover more
                <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>

            {/* My Projects Card */}
            <div
              className="neumorph-card highlight-card"
              style={{
                // Added highlight-card class
                background: "#151a22",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative", // Needed for :before pseudo-element
                zIndex: 0, // Needed for :before pseudo-element
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                    marginRight: "1rem",
                  }}
                >
                  <Briefcase size={24} color="#4f46e5" />
                </div>
                <h3
                  className="card-content"
                  style={{
                    // Added card-content class
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    background: "linear-gradient(to right, #4f46e5, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.3s ease", // Added transition
                  }}
                >
                  My Projects
                </h3>
              </div>
              <p
                className="card-content"
                style={{
                  // Added card-content class
                  color: "#d1d5db",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  transition: "all 0.3s ease", // Added transition
                }}
              >
                Explore my portfolio of web applications and digital solutions.
              </p>
              <Link
                to="/projects"
                className="card-content"
                style={{
                  // Added card-content class
                  display: "flex",
                  alignItems: "center",
                  color: "#4f46e5",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease", // Added transition
                }}
              >
                View all projects
                <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>

            {/* Contact Me Card */}
            <div
              className="neumorph-card highlight-card"
              style={{
                // Added highlight-card class
                background: "#151a22",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative", // Needed for :before pseudo-element
                zIndex: 0, // Needed for :before pseudo-element
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                    marginRight: "1rem",
                  }}
                >
                  <Mail size={24} color="#4f46e5" />
                </div>
                <h3
                  className="card-content"
                  style={{
                    // Added card-content class
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    background: "linear-gradient(to right, #4f46e5, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.3s ease", // Added transition
                  }}
                >
                  Contact Me
                </h3>
              </div>
              <p
                className="card-content"
                style={{
                  // Added card-content class
                  color: "#d1d5db",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  transition: "all 0.3s ease", // Added transition
                }}
              >
                Ready to start a project? Get in touch and let's discuss your
                ideas.
              </p>
              <Link
                to="/contact"
                className="card-content"
                style={{
                  // A
                  display: "flex",
                  alignItems: "center",
                  color: "#4f46e5",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Get in touch
                <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexDirection: isMobile ? "column" : "row",

              gap: isMobile ? "1rem" : "0",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: 700,
                background: "linear-gradient(to right, #fff, #d1d5db)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Projects
            </h2>

            <Link
              to="/projects"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View all projects
              <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>

          <div
            ref={projectsRef}
            style={{
              position: "relative",
              height: isMobile ? "300px" : "400px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: index === activeProject ? 1 : 0,
                  transform: `scale(${index === activeProject ? 1 : 0.95})`,
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  background: `linear-gradient(rgba(13, 15, 19, 0.7), rgba(13, 15, 19, 0.9)), url(${project.image}) center/cover`,
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: isMobile ? "1.5rem" : "2rem",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "1.5rem" : "1.75rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#fff",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    marginBottom: "1.5rem",
                    maxWidth: "500px",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        background: "rgba(79, 70, 229, 0.2)",
                        color: "#4f46e5",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#4f46e5",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  View project
                  <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            ))}

            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "1.5rem" : "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === activeProject
                        ? "#4f46e5"
                        : "rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "1rem" : "0",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: 700,
                background: "linear-gradient(to right, #fff, #d1d5db)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Services
            </h2>

            <Link
              to="/services"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "1px solid rgba(79, 70, 229, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(79, 70, 229, 0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              See All Services
              <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="tilt-card highlight-card neumorph-card"
                style={{
                  // ADDED highlight-card here
                  background: "#151a22",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  transform: "perspective(1000px) rotateX(0) rotateY(0)",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 0,
                }}
                // Keep your onMouseMove and onMouseLeave for the tilt effect
                onMouseMove={(e) => {
                  if (isMobile) return;

                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateY = (x - centerX) / 25;
                  const rotateX = (centerY - y) / 25;

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  card.style.boxShadow = `
                  ${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.2),
                  inset 0 0 30px rgba(79, 70, 229, 0.1)
                `;
                }}
                onMouseLeave={(e) => {
                  if (isMobile) return;

                  const card = e.currentTarget;
                  card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";
                  card.style.boxShadow =
                    "9px 9px 24px #0b0c10, -9px -9px 24px #232838";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: "#4f46e5",
                    transition: "all 0.3s ease", // Added transition for icon color
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className="card-content"
                  style={{
                    // ADDED card-content here
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    background: "linear-gradient(to right, #4f46e5, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.3s ease", // Added transition
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="card-content"
                  style={{
                    // ADDED card-content here
                    color: "#d1d5db",
                    lineHeight: 1.6,
                    transition: "all 0.3s ease", // Added transition
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",

          background: "linear-gradient(45deg, #4f46e5, #ec4899)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            // Consider changing this gradient or its opacity to blend with the new background
            background:
              "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)", // Changed to white for subtle effect
            animation: "gradientShift 8s ease infinite",
            transform: "rotate(30deg)",
            opacity: 0.2, // Reduced opacity
          }}
        ></div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              // --- TEXT COLOR ADJUSTMENT ---
              // The existing text gradient might not contrast well on the new background.
              // Consider changing this to a solid white or a gradient that stands out.
              background: "linear-gradient(to right, #fff, #e0e0e0)", // Slightly lighter for contrast
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // --- END TEXT COLOR ADJUSTMENT ---
            }}
          >
            Let's Build Something Amazing Together
          </h2>

          <p
            style={{
              fontSize: isMobile ? "1.1rem" : "1.25rem",
              // --- TEXT COLOR ADJUSTMENT ---
              color: "#e0e0e0", // Lighter grey for better contrast
              // --- END TEXT COLOR ADJUSTMENT ---
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            I'm currently available for freelance work and full-time
            opportunities. If you have a project that you want to get started or
            think you need my help with something, then get in touch.
          </p>
          <Link to="/contact">
            <button
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                // Keep button background as is, it contrasts well
                background: "linear-gradient(145deg, #fff, #e0e0e0)", // Changed to white/light grey gradient for contrast
                color: "#4f46e5", // Changed text color to purple for contrast
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 14px rgba(255, 255, 255, 0.4)", // Changed shadow to match new button background
                transform: "translateY(0)",
                animation: "pulse 2s infinite",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow =
                  "0 8px 20px rgba(255, 255, 255, 0.6)"; // Changed shadow
                e.target.style.animation = "none";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 14px rgba(255, 255, 255, 0.4)"; // Changed shadow
                e.target.style.animation = "pulse 2s infinite";
              }}
            >
              Get In Touch
              <Mail size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Global Styles */}
      <style>
        {`
                /* New styles for highlight cards */
        .highlight-card:hover {
          transform: translateY(-10px);
          box-shadow: 2px 2px 12px #0b0c10, -2px -2px 18px #20253a, 0 0 16px 2px #4f46e566;
        }

        .highlight-card:hover .card-content {
          color: #fff; /* Example: change paragraph color to white */
          background: linear-gradient(to right, #fff, #a78bfa); /* Example: change heading gradient */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: brightness(1.2); /* Example: make text a bit brighter */
          transform: translateY(-2px); /* Slight lift for text */
        }
        
        .highlight-card:hover .card-content[href] { /* Specific for the 'see all' link */
          color: #a78bfa !important; /* Brighter purple for the link */
          filter: brightness(1.3);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes holograph {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        
        @keyframes holographGrid {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
        
        @keyframes hologramPyramid {
          0% { 
            opacity: 0.1;
            transform: rotateX(60deg) rotateZ(45deg) translateY(0);
          }
          50% { 
            opacity: 0.2;
            transform: rotateX(60deg) rotateZ(45deg) translateY(-20px);
          }
          100% { 
            opacity: 0.1;
            transform: rotateX(60deg) rotateZ(45deg) translateY(0);
          }
        }
        
        .neumorph-card:hover::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: linear-gradient(45deg, #4f46e5, #ec4899, #4f46e5);
          border-radius: 22px;
          animation: holograph 3s ease-in-out infinite;
        }
        
                .neumorph-card:hover::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: linear-gradient(45deg, #4f46e5, #ec4899, #4f46e5);
          border-radius: 22px;
          animation: holograph 3s ease-in-out infinite;
        }
                  .highlight-card:hover::before { /* Changed .neumorph-card to .highlight-card */
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: linear-gradient(45deg, #4f46e5, #ec4899, #4f46e5);
          border-radius: 22px;
          animation: holograph 3s ease-in-out infinite;
        }
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Responsive adjustments */
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            margin-top: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .tilt-card {
            transform: none !important;
          }
          
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .hero-content {
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-achievements {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.8rem;
          }
          
          .hero-buttons button {
            width: 100%;
            justify-content: center;
          }
        }
        `}
      </style>
    </div>
  );
};

export default HomePage;
