"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,46rem)] text-center"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{
        once: true,
        margin: "-100px"
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      {/* Premium description with glass background */}
      <motion.div
        className="relative -mt-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 
                      shadow-xl shadow-black/30 overflow-hidden">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

          <p className="text-gray-400 relative z-10 text-lg leading-relaxed">
            Please contact me directly at{" "}
            <motion.a 
              className="text-white underline decoration-white/30 hover:decoration-white transition-all duration-300
                       hover:text-gray-100"
              href="mailto:akashpurjalkar66@gmail.com"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 8px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              akashpurjalkar66@gmail.com
            </motion.a>{" "}
            or through this form.
          </p>
        </div>
      </motion.div>

      {/* Luxury form container */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        whileHover={{ 
          y: -5,
          rotateX: 2,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        viewport={{ once: true }}
        style={{ perspective: "1200px" }}
      >
        {/* Main form glass container */}
        <div className="relative p-8 rounded-3xl bg-black/90 backdrop-blur-xl border border-white/10
                      shadow-2xl shadow-black/40 overflow-hidden
                      group-hover:backdrop-blur-2xl group-hover:bg-black/95 
                      group-hover:border-white/30 group-hover:shadow-black/60
                      transition-all duration-500 ease-out">
          
          {/* Enhanced glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                        group-hover:from-white/15 group-hover:via-white/4 transition-all duration-500 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent
                        group-hover:via-white/60 transition-all duration-500"></div>
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/40 via-transparent to-transparent
                        group-hover:from-white/60 transition-all duration-500"></div>
          
          {/* Bottom highlight line */}
          <div className="absolute bottom-0 left-0 h-px w-0 bg-white/50 group-hover:w-full transition-all duration-1000 ease-out"></div>
          
          <form
            className="flex flex-col relative z-10"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            {/* Email input */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.input
                className="w-full h-16 px-6 rounded-xl bg-black/70 backdrop-blur-lg border border-white/20
                         text-white placeholder-gray-400 text-lg
                         focus:bg-black/80 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10
                         transition-all duration-400 ease-out
                         hover:border-white/30 hover:bg-black/75"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)"
                }}
                whileHover={{
                  boxShadow: "0 0 15px rgba(255,255,255,0.05)"
                }}
              />
              {/* Input glass reflection */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Message textarea */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.textarea
                className="w-full h-48 p-6 rounded-xl bg-black/70 backdrop-blur-lg border border-white/20
                         text-white placeholder-gray-400 text-lg leading-relaxed resize-none
                         focus:bg-black/80 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10
                         transition-all duration-400 ease-out
                         hover:border-white/30 hover:bg-black/75"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)"
                }}
                whileHover={{
                  boxShadow: "0 0 15px rgba(255,255,255,0.05)"
                }}
              />
              {/* Textarea glass reflection */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Submit button container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SubmitBtn />
            </motion.div>
          </form>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full group-hover:bg-white/30"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  y: [-4, 4, -4],
                  x: [-2, 2, -2],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>

        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700 -z-10"></div>
      </motion.div>

      <style jsx>{`
        .group:hover {
          transform: perspective(1200px) rotateX(1deg) translateZ(10px);
        }
        
        input::placeholder,
        textarea::placeholder {
          transition: all 0.3s ease;
        }
        
        input:focus::placeholder,
        textarea:focus::placeholder {
          opacity: 0.6;
          transform: translateY(-2px);
        }
      `}</style>
    </motion.section>
  );
}