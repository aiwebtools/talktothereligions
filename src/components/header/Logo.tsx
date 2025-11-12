
import React, { useEffect, useRef, useState } from "react";
import { Eye, Wand2, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 10,
          y: (e.clientY - centerY) / 10
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden sm:flex flex-col items-center justify-center sm:justify-start relative">
      {/* Divine Aura Background */}
      <div className="absolute inset-0 -m-20 bg-gradient-radial from-resurrection-primary/30 via-divine-accent/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Sacred Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-40 bg-gradient-to-t from-transparent via-gold-400/80 to-transparent"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '50% 200px',
              transform: `rotate(${i * 30}deg) translateY(-100px)`,
              animation: `divine-rays 4s ease-in-out infinite ${i * 0.3}s`,
              opacity: isHovered ? 1 : 0.6
            }}
          />
        ))}
      </div>

      {/* Interactive Divine Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-3 h-3 rounded-full bg-gradient-radial from-white/90 via-gold-400/70 to-transparent"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${60 + Math.sin(Date.now() * 0.001 + i) * 20}px) translateY(${Math.cos(Date.now() * 0.001 + i) * 15}px)`,
              animation: `divine-orbs 6s ease-in-out infinite ${i * 0.75}s`,
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
            }}
          />
        ))}
      </div>

      <div 
        ref={logoRef}
        className="relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
        }}
      >
        {/* Sacred Glow Effect */}
        <div className="absolute inset-0 bg-gradient-conic from-resurrection-primary/40 via-divine-accent/30 to-resurrection-secondary/40 rounded-xl blur-xl animate-spin-slow"></div>
        
        {/* Holy Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-divine-sweep"></div>
        
        <h1 
          className={cn(
            "text-xl sm:text-2xl md:text-5xl font-serif font-light relative",
            "tracking-wider animate-fade-in flex items-center",
            "bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-300 to-white",
            "filter drop-shadow-[0_0_30px_rgba(245,158,11,0.8)] drop-shadow-[0_0_60px_rgba(255,255,255,0.6)]",
            isHovered && "animate-divine-glow"
          )}
          style={{
            backgroundImage: 'linear-gradient(45deg, #ffffff 0%, #f59e0b 25%, #fbbf24 50%, #f59e0b 75%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            animation: 'divine-text-shimmer 3s ease-in-out infinite'
          }}
        >
          {/* Divine Crystal Emoji with Effects */}
          <span className="relative mr-2 md:mr-3 text-xl md:text-3xl">
            🔮
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/50 to-transparent rounded-full blur-lg animate-pulse"></div>
            <Sparkles className="absolute top-0 right-0 h-2 w-2 md:h-4 md:w-4 text-cyan-300 animate-ping" />
          </span>
          
          <span className="text-white/95 text-xs sm:text-sm md:text-xl mr-2 relative">
            Religious Studies
            <div className="absolute -top-1 -right-1">
              <Zap className="h-2 w-2 md:h-3 md:w-3 text-yellow-300 animate-pulse" />
            </div>
          </span>
          
          {/* Sacred Book Icon with Divine Effects */}
          <div className="relative mx-1 md:mx-2">
            <span className="text-xl md:text-3xl">📖</span>
            <div className="absolute inset-0 bg-gradient-radial from-gold-400/60 to-transparent rounded-full blur-md animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-conic from-gold-400/40 via-transparent to-gold-400/40 rounded-full blur-lg animate-spin-slow"></div>
          </div>
          
          {/* Holy "GPT" Text */}
          <span className="relative">
            <span className="bg-gradient-to-r from-[#9b87f5] via-[#fbbf24] to-[#8B5CF6] bg-clip-text text-transparent font-bold text-xs sm:text-sm md:text-2xl">
              GPT
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-gold-400/30 to-purple-400/30 blur-lg animate-pulse-slow"></div>
          </span>
        </h1>
        
        {/* Sacred Particles Emanating from Logo */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-gold-400/80"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 18}deg) translateX(${30 + Math.sin(Date.now() * 0.002 + i) * 20}px)`,
                animation: `divine-particles 4s ease-in-out infinite ${i * 0.2}s`,
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Divine Attribution */}
      <div className="text-center mt-1 relative z-10">
        <div className="absolute inset-0 bg-gradient-radial from-divine-accent/20 to-transparent rounded-lg blur-lg"></div>
        <a 
          href="https://www.aiwebtools.ai"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-[8px] sm:text-[10px] md:text-xs text-resurrection-foreground/70 relative",
            "hover:text-gold-300 transition-all duration-500",
            "animate-fade-in tracking-wide",
            "hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
          )}
        >
          ✨ Presented by AiWebTools.Ai ✨
        </a>
      </div>
    </div>
  );
};

export default Logo;
