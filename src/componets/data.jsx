import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Zap,
} from "lucide-react";

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
