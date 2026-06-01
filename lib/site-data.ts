import { Clock, MapPin, Phone } from "lucide-react"

import facebookIcon from "@/public/images/fb.png"
import whatsappIcon from "@/public/images/wpp.png"
import instagramIcon from "@/public/images/ig.png"

export const siteConfig = {
  name: "Dr. Martin Luther King Jr. Primary School",
  shortName: "MLK Primary School",
  description:
    "A nurturing primary school committed to academic excellence, character development, leadership, and lifelong learning.",
  phone: "+1 721 XXX XXXX",
  address: "Sint Maarten",
  workTime: "Mon - Fri 8 AM - 5 PM",
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
]

export const contactItems = [
  { title: "Call", value: siteConfig.phone, icon: Phone },
  { title: "Work Time", value: siteConfig.workTime, icon: Clock },
  { title: "Address", value: siteConfig.address, icon: MapPin },
]

export const socialLinks = [
  { label: "Facebook", href: "#", icon: facebookIcon },
  { label: "WhatsApp", href: "#", icon: whatsappIcon },
  { label: "Instagram", href: "#", icon: instagramIcon },
]

export const features = [
  {
    title: "Dedicated Teachers",
    description:
      "Caring educators committed to helping every student grow academically, socially, and emotionally.",
    icon: "/images/placeholder.jpg",
  },
  {
    title: "Strong Foundation",
    description:
      "A balanced primary education focused on literacy, numeracy, creativity, and critical thinking.",
    icon: "/images/placeholder.jpg",
  },
  {
    title: "Leadership Values",
    description:
      "Students are encouraged to lead with kindness, confidence, responsibility, and respect.",
    icon: "/images/placeholder.jpg",
  },
  {
    title: "Student Support",
    description:
      "A supportive school environment that helps students feel safe, seen, and ready to learn.",
    icon: "/images/placeholder.jpg",
  },
]

export const galleryImages = [
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
]

export const services = [
  {
    title: "Primary Education",
    description:
      "A strong academic foundation focused on literacy, numeracy, science, creativity, and personal growth.",
  },
  {
    title: "Student Support",
    description:
      "Guidance and care that help students feel safe, supported, and ready to learn.",
  },
  {
    title: "Parent Communication",
    description:
      "Clear communication between school and home to support every child’s development.",
  },
]

export const projects = [
  {
    title: "School Improvement Projects",
    description:
      "Ongoing initiatives focused on improving learning spaces, technology, safety, and student resources.",
  },
  {
    title: "Student Leadership Projects",
    description:
      "Projects that encourage students to take responsibility, serve others, and grow as leaders.",
  },
  {
    title: "Community Projects",
    description:
      "School and community partnerships that strengthen student engagement and civic responsibility.",
  },
]

export const activities = [
  {
    title: "Sports & Movement",
    description:
      "Activities that promote teamwork, fitness, discipline, and healthy competition.",
  },
  {
    title: "Arts & Creativity",
    description:
      "Creative opportunities that help students express themselves through art, music, and performance.",
  },
  {
    title: "School Events",
    description:
      "Celebrations, assemblies, themed days, and educational events that enrich school life.",
  },
]