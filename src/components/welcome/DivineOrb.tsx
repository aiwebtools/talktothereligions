
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

const DivineOrb: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || isMobile) return; // Disable mouse interaction on mobile
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = orb.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      orb.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);
  
  return (
    <div className="relative h-80 flex items-center justify-center my-12 perspective-2000">
      {/* Outer divine aura - reduced on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="absolute inset-0 bg-gradient-radial from-resurrection-primary/10 via-divine-accent/5 to-transparent rounded-full blur-3xl animate-pulse-slow"
        style={{ opacity: isMobile ? 0.5 : 1 }}
      ></motion.div>
      
      {/* Middle energy ring - simplified on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, type: "spring" }}
        className={`absolute inset-12 bg-gradient-conic from-divine-purple/20 via-resurrection-accent/15 to-divine-purple/20 rounded-full blur-2xl ${isMobile ? '' : 'animate-spin-slow'}`}
        style={{ opacity: isMobile ? 0.3 : 1 }}
      ></motion.div>
      
      <motion.div
        ref={orbRef}
        className="h-56 w-56 rounded-full relative transition-transform duration-300 ease-out preserve-3d"
        initial={{ rotateX: 0, rotateY: 0, scale: 0.8 }}
        animate={{ 
          rotateX: isMobile ? [0, 5, 0] : [0, 15, 0], 
          rotateY: isMobile ? [0, 5, 0] : [0, 15, 0],
          scale: 1
        }}
        transition={{ 
          duration: isMobile ? 6 : 4, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
      >
        {/* Main orb with enhanced effects */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-resurrection-primary/90 via-divine-accent/70 to-resurrection-secondary/80 backdrop-blur-sm shadow-[0_0_80px_rgba(245,158,11,0.8),0_0_160px_rgba(233,53,193,0.6)]">
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Inner divine core */}
        <div className="absolute inset-12 rounded-full bg-gradient-radial from-white/40 via-resurrection-primary/30 to-transparent backdrop-blur-md animate-pulse-slow"></div>
        
        {/* Central divine spark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-gradient-radial from-white/80 via-gold-400/60 to-transparent backdrop-blur-md animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.8)]"></div>
        
        {/* Floating divine symbols - simplified on mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotateZ: 0 }}
            animate={{ opacity: 1, rotateZ: 360 }}
            transition={{ duration: isMobile ? 60 : 30, repeat: Infinity, ease: "linear" }}
            className="h-40 w-40 rounded-full border-2 border-white/40 relative"
          >
            {/* Cardinal points */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-divine-accent/90 shadow-[0_0_20px_rgba(245,158,11,0.8)]"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-resurrection-primary/90 shadow-[0_0_20px_rgba(233,53,193,0.8)]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-divine-purple/90 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
            
            {/* Intercardinal points - hidden on mobile for performance */}
            {!isMobile && (
              <>
                <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-white/70 animate-pulse"></div>
                <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-divine-accent/70 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-resurrection-primary/70 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 h-2 w-2 rounded-full bg-divine-purple/70 animate-pulse"></div>
              </>
            )}
          </motion.div>
          
          {/* Inner rotating ring - simplified on mobile */}
          <motion.div
            initial={{ opacity: 0, rotateZ: 0 }}
            animate={{ opacity: 1, rotateZ: -360 }}
            transition={{ duration: isMobile ? 40 : 20, repeat: Infinity, ease: "linear" }}
            className="absolute h-24 w-24 rounded-full border border-white/30"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/80"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-divine-accent/80"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-resurrection-primary/80"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-divine-purple/80"></div>
          </motion.div>
        </div>
        
        {/* Energy trails - reduced on mobile */}
        {!isMobile && Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-t from-transparent to-white/60 rounded-full"
            style={{
              top: '10%',
              left: '50%',
              transformOrigin: '50% 200px',
            }}
            animate={{
              rotateZ: [0, 360],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
          />
        ))}
      </motion.div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-resurrection-primary/80 text-lg font-serif italic animate-pulse-slow">
        ✨ ~Divine Energy Manifestation~ ✨
      </div>
    </div>
  );
};

export default DivineOrb;
