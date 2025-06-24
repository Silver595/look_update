"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { ReactNode } from 'react';
interface SectionHeadingProps {
  children: ReactNode;
}
const SectionHeading = ({ children }: SectionHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="text-7xl font-thin tracking-tight text-white mb-16"
  >
    {children}
  </motion.h2>
);

export default function About() {
  const [activeVideo, setActiveVideo] = useState(1);
  const { ref } = useSectionInView("About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden"  id="about" style={{ marginLeft: '20px', marginRight: '20px' }}>
      {/* Enhanced Glass Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.01]"></div>
      </div>

      {/* Main Container with Glass Effect and Soft Corners */}
      <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-3xl shadow-2xl shadow-black/50">
        {/* Enhanced Corner Accents with Glow */}
        <div className="absolute -top-1 -left-1 w-8 h-8 rounded-tl-3xl border-l-2 border-t-2 border-white/20 shadow-lg shadow-white/10"></div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-tr-3xl border-r-2 border-t-2 border-white/20 shadow-lg shadow-white/10"></div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 rounded-bl-3xl border-l-2 border-b-2 border-white/20 shadow-lg shadow-white/10"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-br-3xl border-r-2 border-b-2 border-white/20 shadow-lg shadow-white/10"></div>

        {/* Animated Background Grid Lines with Glass Effect */}
        <div className="absolute inset-0 opacity-3 rounded-3xl overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 3 }}
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          ></motion.div>
        </div>

        {/* Enhanced Floating Decorative Elements with 3D Effect */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-3 h-3 bg-white/40 rounded-full shadow-lg shadow-white/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-32 w-2 h-2 bg-white/30 rounded-full shadow-md shadow-white/15 backdrop-blur-sm"
        />

        <div className="max-w-7xl mx-auto px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-12 gap-8 min-h-screen items-center"
          >
            {/* Left Side - Content */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
              {/* Enhanced Status Badge with Glass Effect */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-3 px-4 py-2 rounded-full backdrop-blur-md bg-white/[0.05] border border-white/10 shadow-lg"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"
                ></motion.div>
                <span className="text-white/70 text-sm font-light tracking-widest uppercase">
                  Available for work
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="text-white/40 text-sm font-light tracking-widest uppercase mb-4">
                  Creative Developer
                </div>
                <SectionHeading>About me</SectionHeading>
              </motion.div>

              {/* Enhanced Decorative Line with Glow */}
              <motion.div
                variants={lineVariants}
                className="w-24 h-px bg-gradient-to-r from-white/40 to-transparent origin-left shadow-sm shadow-white/20"
                ref={ref}
              />

              {/* Description Paragraphs */}
              <motion.div variants={itemVariants} className="space-y-8 max-w-xl">
                <p className="text-white/80 text-lg font-light leading-relaxed tracking-wide">
                  After graduating with a degree in IT, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. I also have knowledge about Networking and am familiar with cybersecurity fundamentals.
                </p>

                <p className="text-white/70 text-lg font-light leading-relaxed tracking-wide">
                  When I'm not coding, I'm a history enthusiast fascinated by the stories that shape our world. From ancient civilizations to modern milestones, I love exploring how the past offers timeless lessons in resilience, courage, and innovation.
                </p>

                <p className="text-white/60 text-lg font-light leading-relaxed tracking-wide">
                  History fuels my curiosity and inspires me to view life through a broader lens, embracing growth and learning every step of the way.
                </p>
              </motion.div>

              {/* Enhanced Skills Tags with Animated Borders */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-8">
                {['Full-Stack Development', 'Networking', 'Cybersecurity', 'History Research'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                    }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className="relative px-6 py-3 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/10 text-white/60 text-sm font-light tracking-wide hover:border-white/30 hover:text-white/90 transition-all duration-500 shadow-lg hover:shadow-white/10 group overflow-hidden"
                  >
                    {/* Animated Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(0deg, transparent, transparent)",
                          "linear-gradient(180deg, rgba(255,255,255,0.1), transparent)",
                          "linear-gradient(360deg, transparent, transparent)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Enhanced Video with 3D Glass Effect */}
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                {/* Video Counter with Glass Effect */}
                <div className="absolute -top-12 right-0 px-3 py-1 rounded-full backdrop-blur-md bg-white/[0.05] border border-white/10 text-white/50 font-light text-sm tracking-widest shadow-lg">
                  0{activeVideo}/04
                </div>

                {/* Enhanced Video Container with 3D Glass Effect */}
                <div className="relative aspect-[4/5] backdrop-blur-md bg-white/[0.02] border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                  {/* 3D Corner Accents with Animation */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-3xl shadow-lg shadow-white/20"
                  ></motion.div>
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-3xl shadow-lg shadow-white/20"
                  ></motion.div>
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-3xl shadow-lg shadow-white/20"
                  ></motion.div>
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-3xl shadow-lg shadow-white/20"
                  ></motion.div>

                  {/* Video Elements */}
                  <video
                    key={activeVideo}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    src={`/hero-${activeVideo}.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* Enhanced Hover Overlay with 3D Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl backdrop-blur-sm"></div>
                </div>

                {/* Enhanced Video Navigation Dots */}
                <div className="flex justify-center space-x-4 mt-8">
                  {[1, 2, 3, 4].map((num) => (
                    <motion.button
                      key={num}
                      onClick={() => setActiveVideo(num)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                        activeVideo === num
                          ? 'bg-white shadow-lg shadow-white/50 scale-125'
                          : 'bg-white/30 hover:bg-white/60'
                      } backdrop-blur-sm border border-white/20`}
                    >
                      {/* Animated Ring for Active Dot */}
                      {activeVideo === num && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/50"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Bottom Decorative Line with 3D Effect */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-lg shadow-white/20"
          />
        </div>
      </div>
    </section>
  );
}