"use client";

import { useRef, useEffect, useCallback, memo } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = memo(function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  // Reduced transforms for better performance
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Simplified mount animation using CSS instead of GSAP
  useEffect(() => {
    if (ref.current) {
      ref.current.style.animation = 'slideUp 0.8s ease-out forwards';
    }
  }, []);

  // Debounced mouse move handler
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .card-3d {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .tag-hover {
          transition: all 0.2s ease;
        }
        
        .tag-hover:hover {
          transform: translateY(-2px) scale(1.05);
          background: rgba(0,0,0,0.4);
          border-color: rgba(255,255,255,0.4);
          color: white;
        }
      `}</style>
      
      <motion.div
        ref={ref}
        style={{ scale, opacity }}  
        className="group mb-24 last:mb-0"
      >
        <section className="relative max-w-6xl mx-auto">
          <div 
            className="card-3d relative backdrop-blur-xl bg-black/95 border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
            style={{ minHeight: '32rem' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* Simplified shimmer effect */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-0 min-h-[32rem]">
              
              {/* Content Section */}
              <div className="flex flex-col justify-center p-12 lg:p-16 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-light tracking-tight text-white/95 leading-tight">
                    {title}
                  </h3>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-white/60 to-transparent"></div>
                  
                  <p className="text-lg lg:text-xl leading-relaxed text-white/70 font-light max-w-lg">
                    {description}
                  </p>
                </div>
                
                {/* Optimized Tags */}
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="tag-hover px-4 py-2 text-xs font-medium tracking-widest uppercase text-white/80 bg-black/60 border border-white/20 rounded-full backdrop-blur-sm cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="relative flex items-center justify-center p-8 lg:p-12">
                <div className="relative group/image">
                  <Image
                    src={imageUrl}
                    alt={title}
                    quality={85}
                    width={500}
                    height={400}
                    className="w-full max-w-md rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300 group-hover/image:scale-105"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Doi2wdBLvXT6Jjdp+8hs/aHlNZJeWUcbTD5pX2HaH/9k="
                  />
                </div>
              </div>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        </section>
      </motion.div>
    </>
  );
});

export default Project;