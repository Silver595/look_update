import React from "react";
import {CgGames, CgWorkAlt} from "react-icons/cg";
import {FaBible, FaChurch, FaCoins, FaCompass, FaReact, FaSketch} from "react-icons/fa";
import {LuGamepad2, LuGraduationCap} from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/Editor.png";
import wordanalyticsImg from "@/public/portscanner.png";

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
    title: "College MiniProject",
    location: "solapur, IN",
    description:
      "I made a Ecommerce Website.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
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
    icon: React.createElement(FaCompass),
    date: `2021 - ${new Date(new Date()).toLocaleDateString("en-US")}`,
  },
] as const;

export const projectsData = [
  {
    title: "BlogSite",
    description:
    "I built a simple blog site using React, MongoDB, and Tailwind. The platform allows users to create, read, and comment on blog posts, providing a seamless and user-friendly experience.",
    tags: ["React", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
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
    description: "A fast and efficient tool to scan IP addresses and identify open ports, helping users assess network security and potential vulnerabilities." ,
    tags: [ "Python"],
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
