
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const DivineOrb: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = orb.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (e.clientX - centerX) / 25;
      const moveY = (e.clientY - centerY) / 25;
      
      orb.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative h-64 flex items-center justify-center my-10 perspective-1000">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="absolute inset-0 bg-resurrection-primary/5 rounded-full blur-3xl animate-pulse-slow"
      ></motion.div>
      
      <motion.div
        ref={orbRef}
        className="h-48 w-48 rounded-full relative transition-transform duration-200 ease-out preserve-3d"
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{ rotateX: 10, rotateY: 10 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-resurrection-primary/80 to-resurrection-accent/50 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-resurrection-primary/20 to-transparent backdrop-blur-md"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/20 backdrop-blur-md animate-pulse"></div>
        
        {/* Divine symbols */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotateZ: 0 }}
            animate={{ opacity: 1, rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-32 w-32 rounded-full border-2 border-white/30"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white/80"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white/80"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/80"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/80"></div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-resurrection-primary/70 text-sm font-serif italic">
        ~Divine Energy~
      </div>
    </div>
  );
};

export default DivineOrb;
