import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
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
