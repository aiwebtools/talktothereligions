
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const DivineAuroraField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let time = 0;
    const waves: Array<{
      amplitude: number;
      frequency: number;
      phase: number;
      color: string;
      opacity: number;
    }> = isMobile ? [
      // Reduced waves for mobile
      { amplitude: 60, frequency: 0.02, phase: 0, color: '245, 158, 11', opacity: 0.2 },
      { amplitude: 80, frequency: 0.015, phase: Math.PI / 3, color: '233, 53, 193', opacity: 0.15 },
    ] : [
      { amplitude: 100, frequency: 0.02, phase: 0, color: '245, 158, 11', opacity: 0.3 },
      { amplitude: 150, frequency: 0.015, phase: Math.PI / 3, color: '233, 53, 193', opacity: 0.25 },
      { amplitude: 120, frequency: 0.025, phase: Math.PI / 2, color: '168, 85, 247', opacity: 0.35 },
      { amplitude: 80, frequency: 0.03, phase: Math.PI, color: '255, 255, 255', opacity: 0.2 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create aurora waves
      waves.forEach((wave, index) => {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `rgba(${wave.color}, 0)`);
        gradient.addColorStop(0.5, `rgba(${wave.color}, ${wave.opacity})`);
        gradient.addColorStop(1, `rgba(${wave.color}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        const step = isMobile ? 10 : 5; // Larger step for mobile performance
        for (let x = 0; x <= canvas.width; x += step) {
          const y = canvas.height / 2 + 
            Math.sin(x * wave.frequency + time + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * 1.5 + wave.phase) * wave.amplitude * 0.5;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      });

      // Reduced floating particles for mobile
      const particleCount = isMobile ? 5 : 15;
      for (let i = 0; i < particleCount; i++) {
        const x = (time * 0.5 + i * 50) % (canvas.width + 100);
        const y = canvas.height / 2 + Math.sin(time * 0.01 + i) * 200;
        const size = isMobile ? 1.5 : 2 + Math.sin(time * 0.02 + i) * 1;
        
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        particleGradient.addColorStop(0, 'rgba(245, 158, 11, 0.8)');
        particleGradient.addColorStop(0.5, 'rgba(233, 53, 193, 0.6)');
        particleGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      time += isMobile ? 0.01 : 0.02; // Slower animation on mobile
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: isMobile ? 0.2 : 0.4 }}
    />
  );
};

export default DivineAuroraField;
