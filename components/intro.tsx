"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProfileCard from "@/context/ProfileCard";

const videos: string[] = ["/hero-1.mp4", "/hero-2.mp4", "/hero-3.mp4", "/hero-4.mp4"];

const Intro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentVideo, setCurrentVideo] = useState<number>(0);

  const handlePlayAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handlePauseAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
    }
  };

  const handleVideoClick = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <>
      <style jsx>{`
        .luxury-container {
          background: linear-gradient(180deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(0, 0, 0, 0.98) 50%, 
            rgba(0, 0, 0, 1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        
        .text-shadow-luxury {
          text-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.9),
            0 8px 24px rgba(0, 0, 0, 0.6);
        }
        
        .text-shadow-accent {
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            0 2px 8px rgba(0, 0, 0, 0.8);
        }
        
        .glass-minimal {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 
            0 4px 24px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.015);
        }
        
        .video-frame {
          position: relative;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 
            0 8px 40px rgba(0, 0, 0, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }
        
        .video-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: inherit;
          z-index: -1;
        }
        
        .social-luxury {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(4px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 2px 12px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }
        
        .social-luxury:hover {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 
            0 6px 24px rgba(0, 0, 0, 0.25),
            0 2px 8px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .floating-element {
          animation: float-luxury 8s ease-in-out infinite;
        }
        
        @keyframes float-luxury {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.03;
          }
          25% { 
            transform: translateY(-15px) translateX(5px); 
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-8px) translateX(-3px); 
            opacity: 0.04;
          }
          75% { 
            transform: translateY(-12px) translateX(2px); 
            opacity: 0.06;
          }
        }
        
        .line-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.02);
          animation: line-glow 6s ease-in-out infinite;
        }
        
        @keyframes line-glow {
          0%, 100% { 
            opacity: 0.02;
            transform: scaleX(1);
          }
          50% { 
            opacity: 0.06;
            transform: scaleX(1.05);
          }
        }
        
        .text-luxury {
          font-weight: 100;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }
        
        .text-accent {
          font-weight: 300;
          color: rgba(255, 255, 255, 0.95);
        }
        
        .reveal-animation {
          animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .video-hover {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .video-hover:hover {
          transform: scale(1.01) translateY(-4px);
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.4),
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }
        
        .dots-indicator {
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }
        
        .dots-indicator.active {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        /* Enhanced styles for left section */
        .gradient-text {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(255, 255, 255, 0.7) 40%, 
            rgba(255, 255, 255, 0.9) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glowing-accent {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.95) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glowing-accent::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%);
          filter: blur(20px);
          z-index: -1;
          opacity: 0.3;
        }

        .text-reveal {
          overflow: hidden;
          position: relative;
        }

        .text-reveal::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.03) 50%, 
            transparent 100%);
          transform: translateX(-100%);
          animation: text-shimmer 3s infinite;
        }

        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        .enhanced-line {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.3) 50%, 
            transparent 100%);
          animation: line-flow 4s ease-in-out infinite;
        }

        @keyframes line-flow {
          0%, 100% { 
            transform: scaleX(0.8);
            opacity: 0.2;
          }
          50% { 
            transform: scaleX(1);
            opacity: 0.4;
          }
        }

        .status-indicator {
          position: relative;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: rgb(34, 197, 94);
        }

        .status-indicator::before {
          content: '';
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          background: rgb(34, 197, 94);
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { 
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: translateY(-50%) scale(1.2);
          }
        }

        .experience-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .experience-badge:hover {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }

        .typing-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .floating-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, 
            rgba(255, 255, 255, 0.015) 0%, 
            rgba(255, 255, 255, 0.005) 50%, 
            transparent 100%);
          border-radius: 50%;
          animation: float-orb 12s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes float-orb {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% { 
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.5;
          }
          66% { 
            transform: translate(-15px, 20px) scale(0.9);
            opacity: 0.4;
          }
        }

        /* Profile Card Container */
        .profile-card-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 600px;
        }

        /* Ensure grid items have equal height */
        .equal-height-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          min-height: 80vh;
        }

        @media (max-width: 1024px) {
          .equal-height-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            min-height: auto;
          }
          
          .profile-card-container {
            min-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .profile-card-container {
            min-height: 400px;
          }
        }
      `}</style>

      <section
        ref={ref}
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 sm:px-12 lg:px-24"
      >
        {/* Enhanced floating orb */}
        <div className="floating-orb -top-20 -left-20" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb top-1/3 right-1/4" style={{animationDelay: '-4s'}}></div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/6 w-px h-32 line-element floating-element"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-px line-element floating-element" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-24 line-element floating-element" style={{animationDelay: '-4s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-12 h-px line-element floating-element" style={{animationDelay: '-6s'}}></div>

        {/* Main Content Grid with Equal Heights */}
        <div className="max-w-7xl w-full equal-height-grid gap-16 lg:gap-24">
          
          {/* Enhanced Text Content */}
          <motion.div
            className="space-y-12 lg:pr-12 relative flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Heading */}
            <div className="space-y-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-light">
                    Creative Developer
                  </p>
                  <div className="flex-1 h-px enhanced-line"></div>
                </div>
                
                <div className="text-reveal">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl text-luxury text-shadow-luxury">
                    <motion.span 
                      className="block text-white/25 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      Hello, I'm
                    </motion.span>
                    <motion.span 
                      className="block glowing-accent text-shadow-accent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      Akash
                      <span className="typing-cursor">|</span>
                    </motion.span>
                  </h1>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <p className="text-lg sm:text-xl text-white/50 font-light">
                    But feel free to call me{" "}
                    <span className="gradient-text font-normal text-xl">Silver</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-20 h-px enhanced-line"></div>
                  <div className="experience-badge px-4 py-2 rounded-full">
                    <span className="text-xs text-white/60 font-light">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-lg">
                  I'm a <span className="text-white/85 font-normal">passionate full-stack developer</span> with{" "}
                  <span className="text-white/85 font-normal">one year</span> of experience crafting 
                  digital experiences that blend innovation with elegance.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="experience-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-light text-white/80">12+</div>
                    <div className="text-xs text-white/50 mt-1">Projects</div>
                  </div>
                  <div className="experience-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-light text-white/80">1+</div>
                    <div className="text-xs text-white/50 mt-1">Year Exp</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-6">
                <a
                  className="social-luxury p-4 rounded-full text-white/60 hover:text-white/90 group"
                  href="https://linkedin.com/in/akash-purjalkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                </a>

                <a
                  className="social-luxury p-4 rounded-full text-white/60 hover:text-white/90 group"
                  href="https://github.com/Silver595"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="text-xl group-hover:scale-110 transition-transform" />
                </a>

                <div className="w-px h-8 bg-white/10 mx-4"></div>
                
                <div className="status-indicator px-6 py-2 rounded-full backdrop-filter backdrop-blur-sm">
                  <div className="text-xs font-light tracking-wider pl-4">
                    Available for work
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-white/30 font-light">
                <div className="w-2 h-px bg-white/20"></div>
                <span>Based in India</span>
                <div className="w-2 h-px bg-white/20"></div>
                <span>Remote Friendly</span>
                <div className="w-2 h-px bg-white/20"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Card Section */}
          <motion.div
            className="profile-card-container relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <ProfileCard
              // name="Akash Purjalkar"
              // title="Full-Stack Developer"
              // handle="Silver595"
              // status="Available for work"
              // contactText="Contact Me"
              avatarUrl="/profile-img3.png"
              iconUrl="/profile-img.png"
              grainUrl="/profile-img.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => {
                console.log('Contact clicked');
                // Add your contact logic here
                window.open('mailto:akashpurjalkar66@gmail.com', '_blank');
              }}
            />
          </motion.div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.015] transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.015] transform -translate-y-1/2"></div>
      </section>
    </>
  );
};

export default Intro;