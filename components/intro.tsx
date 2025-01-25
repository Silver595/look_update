"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const videos: string[] = ["/hero-1.mp4", "/hero-2.mp4","/hero-3.mp4","/hero-4.mp4"];

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
      <section
          ref={ref}
          id="home"
          className="mb-28 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] flex flex-col sm:flex-row items-center justify-center"
      >
        <div className="sm:w-1/2 flex flex-col items-center sm:items-start sm:text-left mt-4 sm:mt-0 sm:px-8">
          <motion.h1
              className="mb-20 text-2xl font-medium !leading-[1.5] sm:text-4xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello! I'm Akash, but feel free to call me Silver.</span>{" "}
            I'm a <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">a year</span> of experience.
          </motion.h1>

          <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
          >
            <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://linkedin.com/in/akash-purjalkar"
                target="_blank"
                rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/Silver595"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        <div className="sm:w-1/2 flex justify-center mt-8 sm:mt-0">
          <AnimatePresence mode="wait">
            <motion.video
                key={currentVideo}
                ref={videoRef}
                className="h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform cursor-pointer"
                autoPlay
                loop
                muted
                onMouseEnter={handlePlayAudio}
                onMouseLeave={handlePauseAudio}
                onClick={handleVideoClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        </div>
      </section>
  );
};

export default Intro;
