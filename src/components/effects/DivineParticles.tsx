
import React from 'react';

const DivineParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Small floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 rounded-full bg-resurrection-primary/30 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Medium particles with glow */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`medium-${i}`}
          className="absolute w-2 h-2 rounded-full bg-resurrection-accent/20 animate-float blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Large particles with pulsing effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={`large-${i}`}
          className="absolute w-3 h-3 rounded-full bg-resurrection-secondary/15 animate-pulse-float blur-[2px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default DivineParticles;
