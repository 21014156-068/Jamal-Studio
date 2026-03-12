import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Phone,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Twitter,
  Zap,
} from "lucide-react";
import { FaRobot } from "react-icons/fa";
import {
  SiExpress,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

export const DEMO_TESTIMONIALS = [
  {
    name: "Tanseer Hamza",
    role: "CEO, TechFlow",
    text: "Jamal Studio didn't just build a site; they built a conversion engine. Our load speeds dropped by 60% and leads doubled.",
    img: "/t.jpg",
    rating: 5,
  },
  {
    name: "Talha Ameen",
    role: "Founder, E-com Hub",
    text: "The Shopify customization is flawless. The neumorphic UI they implemented gives us a premium edge over competitors.",
    img: "/u.jpg",
    rating: 5,
  },
  {
    name: "M. Abubakar",
    role: "Marketing Director",
    text: "Professional, fast, and strategic. They understand that performance is the foundation of digital growth.",
    img: "/m.jpg",
    rating: 5,
  },
];

export const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 333 1482815",
    href: "tel:+923331482815",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@jamalagency.com",
    href: "mailto:contact@jamalagency.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
];

export const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923331482815?text=Hi%20Jamal%20Team!%20I%20want%20to%20discuss%20my%20project.",
    icon: MessageCircle,
  },
];

export const SNAPSHOT_SERVICES = [
  {
    title: "Website Development",
    description:
      "Custom business websites engineered for peak performance, modern user experiences, and consistent lead generation.",
    icon: MonitorSmartphone,
    color: "text-blue-400",
  },
  {
    title: "E-commerce Development",
    description:
      "Specialized Shopify and WooCommerce solutions built to maximize online sales and streamline the customer journey.",
    icon: ShoppingBag,
    color: "text-emerald-400",
  },
  {
    title: "Website Optimization",
    description:
      "Technical tuning of speed, SEO structure, and Core Web Vitals to improve your rankings and conversion rates.",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing outdated sites into responsive, high-converting platforms that reflect your brand’s current authority.",
    icon: RefreshCw,
    color: "text-purple-400",
  },
  {
    title: "Maintenance & Support",
    description:
      "Proactive security monitoring and performance management to ensure your digital asset remains stable 24/7.",
    icon: ShieldCheck,
    color: "text-rose-400",
  },
];

export const PROJECTS = [
  {
    title: "Paswal Tours LTD - Travel Agency",
    category: "Wordpress Website",
    metrics: "99/100 Speed Score",
    description:
      "A comprehensive online travel and visa services platform offering multi-entry and single-entry visas, flight bookings, and Pakistan NADRA services including ID card and passport issuance and renewal.",
    tags: ["Wordpress", "Elementor", "UX Design", "Html", "PHP"],
    img: "/pas1.png",
    link: "https://www.mysafetrips.com",
  },
  {
    title: "Alfattah Vibes- Ecommerce",
    category: "Woocommerce Website",
    metrics: "99/100 Speed Score",
    description:
      "A comprehensive eCommerce platform built with wordpress woocommerce for local business owner to sell their products online.",
    tags: ["Wordpress", "Woocommerce", "Elementor", "Custom Html", "PHP"],
    img: "/al.png",
    link: "https://www.alfattahvibes.com",
  },
  {
    title: "Green Garden ",
    category: "Mern Stack Web App",
    metrics: "2x Lead Generation",
    description:
      "A full-stack MERN eCommerce platform with admin panel, featuring real-time inventory management, secure payment processing, and AI-powered product recommendations for enhanced user engagement.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CNN",
      "JWT",
      "AI Integration",
    ],
    img: "/Main.png",
    link: "https://github.com/21014156-068/green-garden",
  },
];

export const SERVICE_INFRASTRUCTURE = [
  {
    category: "Website Development",
    icon: Monitor,
    color: "#3b82f6",
    tag: "SYS_ARCH",
    nodes: [
      {
        id: "WD-01",
        title: "Custom Business Websites",
        desc: "Engineering high-end, scalable digital engines tailored for corporate growth and market authority.",
      },
      {
        id: "WD-02",
        title: "Corporate Websites",
        desc: "Enterprise-grade architecture designed for large-scale operations and professional brand positioning.",
      },
      {
        id: "WD-03",
        title: "Landing Pages",
        desc: "High-velocity sales funnels optimized for maximum conversion rates and instant user engagement.",
      },
      {
        id: "WD-04",
        title: "Portfolio Websites",
        desc: "Bespoke creative showcases using advanced UI/UX to highlight your professional achievements.",
      },
      {
        id: "WD-05",
        title: "Startup Websites",
        desc: "Lean, fast, and highly scalable MVP infrastructure built to evolve with your growing venture.",
      },
    ],
  },
  {
    category: "E-commerce Website",
    icon: ShoppingBag,
    color: "#10b981",
    tag: "REV_ENG",
    nodes: [
      {
        id: "EC-01",
        title: "Shopify Store Development",
        desc: "Building industry-leading Shopify ecosystems with custom logic and high-converting storefronts.",
      },
      {
        id: "EC-02",
        title: "Shopify Customization",
        desc: "Deep-layer Liquid coding and custom app integration to push Shopify beyond its standard limits.",
      },
      {
        id: "EC-03",
        title: "WooCommerce Store",
        desc: "Scalable WordPress-based commerce solutions with custom plugin architecture and secure checkout.",
      },
      {
        id: "EC-04",
        title: "E-com Performance",
        desc: "Aggressive speed tuning specifically for checkout flows and product catalogs to boost ROI.",
      },
      {
        id: "EC-05",
        title: "Full E-com Architecture",
        desc: "End-to-end custom shopping platforms designed for high-concurrency and seamless inventory sync.",
      },
    ],
  },
  {
    category: "Website Optimization",
    icon: Zap,
    color: "#f59e0b",
    tag: "PERF_TUNING",
    nodes: [
      {
        id: "OP-01",
        title: "Speed Optimization",
        desc: "Reaching the green zone with 99+ PageSpeed scores and sub-second Largest Contentful Paint.",
      },
      {
        id: "OP-02",
        title: "Technical SEO Optimization",
        desc: "Fine-tuning crawling efficiency and schema markup to ensure search engine dominance.",
      },
      {
        id: "OP-03",
        title: "Conversion Rate (CRO)",
        desc: "Analyzing user behavior to eliminate friction points and turn more visitors into loyal customers.",
      },
      {
        id: "OP-04",
        title: "Mobile Performance",
        desc: "Optimizing the mobile critical path for a flawless, native-app feel on every handheld device.",
      },
    ],
  },
  {
    category: "Website Redesign",
    icon: RefreshCw,
    color: "#a855f7",
    tag: "UI_REGEN",
    nodes: [
      {
        id: "RD-01",
        title: "Business Website Redesign",
        desc: "Modernizing outdated corporate assets with contemporary design systems and updated tech stacks.",
      },
      {
        id: "RD-02",
        title: "E-com Website Redesign",
        desc: "Re-platforming and re-designing stores to enhance user journey and match modern brand aesthetics.",
      },
      {
        id: "RD-03",
        title: "UX/UI Improvement",
        desc: "Scientifically-backed user experience overhauls focused on usability and brand emotional resonance.",
      },
      {
        id: "RD-04",
        title: "Website Modernization",
        desc: "Migrating legacy systems to modern, type-safe environments like Next.js and React.",
      },
    ],
  },
  {
    category: "Maintenance & Support",
    icon: ShieldCheck,
    color: "#f43f5e",
    tag: "SEC_PROTO",
    nodes: [
      {
        id: "MS-01",
        title: "Maintenance Services",
        desc: "Proactive health checks, dependency updates, and continuous performance monitoring for stability.",
      },
      {
        id: "MS-02",
        title: "Security Monitoring",
        desc: "24/7 vulnerability scanning and advanced firewall management to protect your digital assets.",
      },
      {
        id: "MS-03",
        title: "Bug Fixing & Support",
        desc: "On-demand technical assistance and rapid response troubleshooting to minimize downtime.",
      },
      {
        id: "MS-04",
        title: "Backup Management",
        desc: "Automated daily cloud backups and fail-safe disaster recovery protocols for total peace of mind.",
      },
    ],
  },
];

export const SKILL_BADGES = [
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

export const PROGRESS_SKILLS = [
  { name: "React.js", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "MongoDB", percent: 80 },
  { name: "Express.js", percent: 80 },
  { name: "TailwindCSS", percent: 85 },
  { name: "Shopify", percent: 75 },
  { name: "WordPress", percent: 70 },
];

export const teamMembers = [
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
