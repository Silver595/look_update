import React, { useState } from "react";
import { motion, useInView } from "framer-motion";


const radialGradientStyle = {
  background: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))'
};

type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'split' | 'typewriter' | 'gradient';
  delay?: number;
};

export default function SectionHeading({
  children,
  variant = 'default',
  delay = 0
}: SectionHeadingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Convert children to string for character-based animations
  const text = typeof children === 'string' ? children : children?.toString() || '';
  const words = text.split(' ');
  const chars = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: variant === 'typewriter' ? 0.05 : 0.1,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  if (variant === 'glow') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-8 mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.h2
          className={`text-3xl font-medium capitalize relative cursor-pointer transition-all duration-500 ${isHovered ? 'text-white' : 'text-gray-200'
            }`}
          animate={{
            textShadow: isHovered
              ? '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 0 90px rgba(200, 200, 200, 0.4)'
              : '0 0 10px rgba(255, 255, 255, 0.2)',
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
          <motion.div
            className="absolute -inset-6 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)'
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.3 : 0.8
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Inner radial glow layer */}
          <motion.div
            className="absolute -inset-3 rounded-full blur-lg"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)'
            }}
            animate={{
              opacity: isHovered ? 0.8 : 0,
              scale: isHovered ? 1.1 : 0.7
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.h2>
      </motion.div>
    );
  }

  if (variant === 'split') {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mt-8 mb-8 overflow-hidden"
      >
        <motion.h2 className="text-3xl font-medium capitalize inline-block text-gray-200">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2 hover:text-white transition-colors duration-300 cursor-pointer"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    );
  }

  if (variant === 'typewriter') {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mt-8 mb-8"
      >
        <motion.h2 className="text-3xl font-medium capitalize text-gray-200">
          {chars.map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className="inline-block"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-0.5 h-8 bg-white ml-1 shadow-lg shadow-white/50"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))'
            }}
          />
        </motion.h2>
      </motion.div>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-8 mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.h2
          className="text-3xl font-medium capitalize bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent cursor-pointer relative"
          animate={{
            backgroundSize: isHovered ? '200% 200%' : '100% 100%',
            backgroundPosition: isHovered ? 'right center' : 'left center'
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
          }}
        >
          {children}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-gray-300 to-white shadow-lg shadow-white/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0 }}
          />

          {/* Floating platinum particles */}
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg shadow-white/50"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
                  }}
                  initial={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 60 - 30,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{
                    y: [0, -30, -60],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 60 - 30
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </motion.h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="text-center mt-8 mb-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h2
        className="text-3xl font-medium capitalize relative overflow-hidden cursor-pointer text-gray-200"
        style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
        }}
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          rotateX: 0
        } : {}}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          damping: 20,
          stiffness: 100
        }}
        whileHover={{
          scale: 1.02,
          y: -2,
          textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)',
          color: '#ffffff',
          transition: { duration: 0.2 }
        }}
      >
        {children}


        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent origin-center shadow-lg shadow-white/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 blur-sm origin-center"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />


        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-16 rounded-full blur-xl -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)'
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 0.5
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />


        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-12 rounded-full blur-lg -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)'
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1 : 0.3
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />


        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-20 rounded-full blur-2xl -z-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)'
          }}
          animate={{
            opacity: isHovered ? [0.2, 0.4, 0.2] : 0,
            scale: isHovered ? [0.8, 1.1, 0.8] : 0.5
          }}
          transition={{
            duration: isHovered ? 3 : 0.4,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.h2>
    </motion.div>
  );
}