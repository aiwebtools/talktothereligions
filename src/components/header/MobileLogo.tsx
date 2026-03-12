
import React, { useState } from "react";
import { Wand2, Sparkles, Zap } from "lucide-react";

const MobileLogo: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="flex flex-col items-center relative">
      {/* Mobile Divine Aura */}
      <div className="absolute inset-0 -m-8 bg-gradient-radial from-resurrection-primary/25 via-divine-accent/15 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Sacred Rays for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-16 bg-gradient-to-t from-transparent via-gold-400/60 to-transparent"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '50% 80px',
              transform: `rotate(${i * 45}deg) translateY(-40px)`,
              animation: `divine-rays 3s ease-in-out infinite ${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="relative z-10"
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        style={{
          transform: isPressed ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Mobile Sacred Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-white/20 via-gold-400/15 to-transparent rounded-lg blur-lg animate-pulse"></div>
        
        <h1 className="text-base font-serif text-white/95 flex items-center relative">
          <span className="mr-1 relative text-sm">
            Religious Studies
            <Zap className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 text-yellow-300 animate-ping" />
          </span>
          
          <div className="relative mx-0.5">
            <span className="text-lg">📖</span>
            <div className="absolute inset-0 bg-gradient-radial from-gold-500/50 to-transparent rounded-full blur-sm animate-pulse-slow"></div>
            <Sparkles className="absolute -top-0.5 -right-0.5 h-1 w-1 text-gold-300 animate-ping" />
          </div>
          
          <span className="relative">
            <span 
              className="text-[#9b87f5] font-bold"
              style={{
                background: 'linear-gradient(45deg, #9b87f5, #fbbf24, #8B5CF6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 100%',
                animation: 'divine-text-shimmer 2s ease-in-out infinite'
              }}
            >
              GPT
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-gold-400/20 to-purple-400/20 blur-md animate-pulse-slow"></div>
          </span>
        </h1>
        
        {/* Mobile Divine Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`mobile-particle-${i}`}
              className="absolute w-0.5 h-0.5 rounded-full bg-gold-400/70"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(${15 + Math.sin(Date.now() * 0.003 + i) * 8}px)`,
                animation: `divine-particles 3s ease-in-out infinite ${i * 0.5}s`,
                boxShadow: '0 0 6px rgba(245, 158, 11, 0.8)'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-0.5 relative z-10">
        <div className="absolute inset-0 bg-gradient-radial from-divine-accent/15 to-transparent rounded blur-md"></div>
        <a 
          href="https://aiwebtools.lovable.app/?via=aiwebtools"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[7px] text-resurrection-foreground/60 hover:text-gold-300 transition-all duration-300 relative hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
        >
          ✨ Presented by AiWebTools.Ai ✨
        </a>
      </div>
    </div>
  );
};

export default MobileLogo;
