"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Main glass container with premium black effects */}
      <motion.div
    
      >
        {/* Animated glass shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 w-full"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Premium black inner glow */}
        <div className="absolute inset-2 rounded-none sm:rounded-full bg-gradient-to-r from-gray-800/10 via-white/5 to-gray-800/10 blur-sm" />
      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: index * 0.1
              }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-2 transition-all duration-300 relative rounded-full group",
                  "hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-black/50",
                  "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/0 before:via-white/0 before:to-white/0 before:transition-all before:duration-300",
                  "hover:before:from-white/10 hover:before:via-white/15 hover:before:to-white/10",
                  "after:absolute after:inset-0 after:rounded-full after:bg-white/0 after:backdrop-blur-sm after:transition-all after:duration-300",
                  "hover:after:bg-white/8 hover:after:shadow-inner",
                  {
                    "text-white shadow-lg shadow-black/60 scale-105": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                onMouseEnter={(e) => {
                  // Add dynamic glow effect on hover
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.name) {
                    e.currentTarget.style.boxShadow = "";
                  }
                }}
              >
                <span className="relative z-10 font-semibold tracking-wide">
                  {link.name}
                </span>

                {/* Premium black active indicator */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-black/60 via-gray-800/70 to-black/60 shadow-lg shadow-black/50 border border-white/10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    {/* Inner glass glow */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white/8 via-white/12 to-white/8 blur-sm" />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full border border-white/15 animate-pulse" />
                  </motion.span>
                )}

                {/* Hover glass effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)"
                  }}
                />

                {/* Floating glass particles effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Ambient black background glow */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[40rem] h-20 bg-gradient-to-r from-black/20 via-gray-900/30 to-black/20 blur-3xl -z-10 rounded-full opacity-40" />
    </header>
  );
}