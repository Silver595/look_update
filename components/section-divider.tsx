"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center items-center my-32">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.125,
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
      >
        {/* Outer platinum glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 blur-2xl w-40 h-8 rounded-full transform -translate-x-20 -translate-y-4"></div>
        
        {/* Secondary gold glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-5 blur-xl w-32 h-6 rounded-full transform -translate-x-16 -translate-y-3"></div>
        
        {/* Main divider */}
        <motion.div
          className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-px w-24 rounded-full relative shadow-lg shadow-white/20"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ 
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut"
          }}
        >
          {/* Center diamond accent */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-white via-gray-200 to-gray-300 rounded-full shadow-lg shadow-white/30"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.8,
              duration: 0.5,
              ease: "easeOut"
            }}
          />
          
          {/* Inner glow for center */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white opacity-10 rounded-full blur-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.8,
              duration: 0.5,
            }}
          />
          
          {/* Platinum shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 w-full h-full rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.2,
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        </motion.div>
        
        {/* Premium side ornaments */}
        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2">
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-sm shadow-white/20"
            style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          />
        </div>
        
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-sm shadow-white/20"
            style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          />
        </div>
        
        {/* Delicate outer ornaments */}
        <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
          <motion.div
            className="w-1 h-1 bg-gray-400 rounded-full opacity-60 shadow-sm shadow-white/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </div>
        
        <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
          <motion.div
            className="w-1 h-1 bg-gray-400 rounded-full opacity-60 shadow-sm shadow-white/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </div>
        
        {/* Micro accent dots */}
        <div className="absolute top-1/2 -left-20 transform -translate-y-1/2">
          <motion.div
            className="w-0.5 h-0.5 bg-gray-500 rounded-full opacity-40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, duration: 0.2 }}
          />
        </div>
        
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2">
          <motion.div
            className="w-0.5 h-0.5 bg-gray-500 rounded-full opacity-40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, duration: 0.2 }}
          />
        </div>

        {/* Subtle pulsing ambient light */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-white opacity-5 rounded-full blur-2xl"
          animate={{ 
            opacity: [0.02, 0.08, 0.02],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}