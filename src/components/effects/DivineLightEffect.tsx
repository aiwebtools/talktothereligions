
import React from 'react';

const DivineLightEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-resurrection-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-resurrection-accent/5 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-resurrection-secondary/5 rounded-full blur-[110px] animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-divine-purple-light/5 rounded-full blur-[80px] animate-pulse-slow animation-delay-3000"></div>
      <div className="absolute top-2/3 left-1/3 w-[350px] h-[350px] bg-divine-purple-dark/5 rounded-full blur-[90px] animate-pulse-slow animation-delay-2000"></div>
    </div>
  );
};

export default DivineLightEffect;
