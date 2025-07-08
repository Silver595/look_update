import React from "react";
import { FaChrome, FaVideo, FaStore, FaLandmark, FaIdCard, FaIdBadge } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/Editor.png";
import wordanalyticsImg from "@/public/portscanner.png";
import interviewImg from "@/public/interview.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data engineering intern Esther Data Labs",
    location: "Solapur, IN",
    description:
      "Gained hands-on experience in Python programming, data visualization, SQL databases, and data security best practices during a data engineering internship.",
    icon: React.createElement(FaIdBadge),
    date: "2024",
  },
  {
    title: "College MiniProject",
    location: "Solapur, IN",
    description:
      "Developed an eCommerce website for a local business mall as part of my college work, featuring product listings, cart functionality, and a responsive design.",
    icon: React.createElement(FaStore),
    date: "2024",
  },
  {
    title: "Time Travel for Web - Chrome Extension",
    location: "Remote",
    description:
      "Built a Chrome extension that compares live web pages with archived versions from the Wayback Machine using a split-screen interface. Includes features like update notifications, timeline view, text search across versions, and link safety checks.",
    icon: React.createElement(FaChrome), // You can import FaChrome from react-icons/fa
    date: "2025",
  },

  {
    title: "A Gamer",
    location: "",
    description:
      "I enjoy playing a variety of games, including PC games like Counter Strike 2, Fortnite, Resident Evil Village 8, Minecraft, Forza Horizon 5, and GTA 5. I also enjoy phone games.",
    icon: React.createElement(LuGamepad2),
    date: `${new Date(new Date()).toLocaleDateString("en-US")}`,
  },
  {
    title: "a historophile",
    location: "",
    description:
      "Passionate about history, exploring different eras and understanding their impact on the present.",
    icon: React.createElement(FaLandmark),
    date: `2021 - ${new Date(new Date()).toLocaleDateString("en-US")}`,
  },
] as const;

export const projectsData = [
  {
    title: "Keylogger",
    description:
      "Built a keylogger for educational and cybersecurity research, demonstrating how keystroke data can be captured and analyzed to highlight potential security threats.",
    tags: ["Python", "Security", "OSINT"],
    imageUrl: corpcommentImg,
  },
  {
    title:"TechMock",
    description:
      "Developed a real-time video calling website for college use, enabling staff and students to communicate through peer-to-peer video sessions using WebRTC and Socket.IO.",
    tags: ["TypeScript", "Next.js", "Tailwind", "WebRTC","convex","Stream","clerk"
    ],
    imageUrl: interviewImg,
  },
  {
    title: "Code Editor",
    description:
      "Working on Developing a custom code editor inspired by VS Code, with features like syntax highlighting, auto-completion, and file navigation.",
    tags: ["prisma", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Port Scanner",
    description: "A fast and efficient tool to scan IP addresses and identify open ports, helping users assess network security and potential vulnerabilities.",
    tags: ["Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "REST APIs",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Shell Scripting",
  "Batch Scripting",
  "OSINT",
  "Network Security"
] as const;
