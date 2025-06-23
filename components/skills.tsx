"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.02 * index,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-32 max-w-6xl mx-auto scroll-mt-28 text-center sm:mb-48 px-4"
    >
      <div className="mb-20">
        <SectionHeading>My skills</SectionHeading>
      </div>
      
      {/* Skills Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            whileHover={{ 
              scale: 1.08,
              y: -5,
              rotateY: 5,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className="group cursor-pointer perspective-1000"
          >
            <div className="relative px-4 py-2.5 sm:px-5 sm:py-3 bg-black/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 ease-out overflow-hidden min-w-[80px] hover:border-white/40">
              
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out skew-x-12"></div>
              
              {/* Skill text */}
              <span className="relative z-10 text-sm font-medium text-white/90 tracking-wide whitespace-nowrap group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
              
              {/* Subtle pulse animation */}
              <div className="absolute inset-0 border border-white/10 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 1000,
              y: Math.random() * 500,
              opacity: 0
            }}
            animate={{ 
              y: [null, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Bottom accent */}
      <motion.div 
        className="mt-16 flex justify-center"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}