import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Twitter,
  Zap,
} from "lucide-react";

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
