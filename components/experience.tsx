"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience And Hobbies</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 auto-rows-fr">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotateX: 15, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }
            }}
            whileHover={{ 
              y: -12, 
              rotateX: 8, 
              rotateY: 3,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            whileTap={{
              scale: 0.98,
              rotateX: 12,
              rotateY: 5,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            onHoverStart={() => {
              // Additional scroll-based animation trigger
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-full min-h-[280px] cursor-pointer"
            style={{ perspective: "1200px" }}
          >
            {/* Main card */}
            <div className={`
              relative flex flex-col gap-3 rounded-2xl p-7 h-full
              bg-black/90 backdrop-blur-xl border border-white/15
              dark:bg-black/95 dark:border-white/20
              shadow-xl shadow-black/30
              transition-all duration-500 ease-out
              group-hover:backdrop-blur-2xl group-hover:bg-black/95
              group-hover:border-white/40 dark:group-hover:border-white/50
              group-hover:shadow-2xl group-hover:shadow-black/60
              overflow-hidden
            `}>
              {/* Glass reflection effect - enhanced on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent 
                            group-hover:from-white/15 group-hover:via-white/5 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent
                            group-hover:via-white/70 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/40 via-transparent to-transparent
                            group-hover:from-white/70 transition-all duration-500"></div>
              
              {/* Subtle pattern overlay - only on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <div className="absolute inset-0 bg-white/10"></div>
              </div>

              {/* Header section */}
              <motion.div 
                className="flex items-center gap-4 mb-3 relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
              <motion.span 
                className="text-4xl filter drop-shadow-lg"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 8,
                  filter: "drop-shadow(0 0 12px rgba(255,255,255,0.4))"
                }}
                whileTap={{
                  scale: 1.3,
                  rotate: 15,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  rotateY: [0, 5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                  {item.icon}
                </motion.span>
                <div className="flex-1">
                  <motion.h3 
                    className="font-bold capitalize text-xl leading-tight text-white group-hover:text-gray-100 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="font-medium text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {item.location}
                  </motion.p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-gray-200 text-base leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300 flex-grow"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>

              {/* Date badge */}
              <motion.span 
                className="absolute top-6 right-6 px-3 py-1 text-xs font-mono rounded-full
                          bg-white/5 border border-white/15 text-gray-300
                          group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30
                          transition-all duration-300 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 16px rgba(255,255,255,0.2)"
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                initial={{ rotate: -3 }}
                animate={{ 
                  rotate: [-3, 3, -3],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                transition={{ duration: 0.2 }}
              >
                {item.date}
              </motion.span>

              {/* Clean bottom highlight line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Floating particles effect with scroll animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full group-hover:bg-white/40"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${25 + i * 20}%`,
                    filter: "blur(0.5px)"
                  }}
                  animate={{
                    y: [-3, 3, -3],
                    x: [-1, 1, -1],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.3, 0.8]
                  }}
                  whileInView={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.3, 0],
                    transition: {
                      duration: 1.5,
                      delay: index * 0.1 + i * 0.2
                    }
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                />
              ))}
              
              {/* Pulse effect on scroll */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/10 opacity-0"
                whileInView={{
                  opacity: [0, 0.3, 0],
                  scale: [0.95, 1.05, 0.95],
                  transition: {
                    duration: 2,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .group:hover {
          transform: perspective(1200px) rotateX(3deg) rotateY(2deg) translateZ(20px);
        }
        
        .group:active {
          transform: perspective(1200px) rotateX(8deg) rotateY(4deg) translateZ(10px) scale(0.98);
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .group:active::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
          z-index: 100;
        }
      `}</style>
    </section>
  );
}