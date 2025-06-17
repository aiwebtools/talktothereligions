
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type DivineParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  trail: Array<{ x: number; y: number; alpha: number }>;
};

const EnhancedParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<DivineParticle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile optimizations
    const maxParticles = isMobile ? 20 : 80;
    const trailLength = isMobile ? 3 : 10;
    const animationQuality = isMobile ? 0.5 : 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      'rgba(245, 158, 11, 0.8)',  // Gold
      'rgba(233, 53, 193, 0.8)',  // Pink
      'rgba(168, 85, 247, 0.8)',  // Purple
      'rgba(255, 255, 255, 0.9)',  // White
      'rgba(124, 58, 237, 0.7)',   // Deep purple
    ];

    const createParticle = (): DivineParticle => {
      const edge = Math.floor(Math.random() * 4);
      let x, y;
      
      switch (edge) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -10;
          break;
        case 1: // Right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          break;
        default: // Left
          x = -10;
          y = Math.random() * canvas.height;
      }

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5),
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        life: 0,
        maxLife: Math.random() * (isMobile ? 300 : 500) + 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      };
    };

    const updateParticle = (particle: DivineParticle) => {
      // Reduced mouse attraction on mobile
      if (!isMobile) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200 * 0.01;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
      }

      // Simplified flow patterns for mobile
      const flowIntensity = isMobile ? 0.005 : 0.01;
      particle.vx += Math.sin(particle.y * 0.01 + particle.life * 0.02) * flowIntensity;
      particle.vy += Math.cos(particle.x * 0.01 + particle.life * 0.02) * flowIntensity;

      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Reduced trail length for mobile
      particle.trail.push({ 
        x: particle.x, 
        y: particle.y, 
        alpha: 1 - particle.life / particle.maxLife 
      });
      
      if (particle.trail.length > trailLength) {
        particle.trail.shift();
      }

      // Apply gentle drift
      particle.vx *= 0.99;
      particle.vy *= 0.99;
    };

    const drawParticle = (particle: DivineParticle) => {
      const alpha = 1 - particle.life / particle.maxLife;
      
      // Simplified trail rendering for mobile
      if (!isMobile || particle.trail.length <= 2) {
        particle.trail.forEach((point, index) => {
          const trailAlpha = alpha * point.alpha * (index / particle.trail.length);
          const size = particle.size * (index / particle.trail.length) * 0.5;
          
          ctx.globalAlpha = trailAlpha * (isMobile ? 0.2 : 0.3);
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw main particle with reduced glow on mobile
      ctx.globalAlpha = alpha * animationQuality;
      
      // Simplified glow for mobile
      const glowSize = isMobile ? particle.size * 2 : particle.size * 4;
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowSize
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core
      ctx.globalAlpha = alpha * 0.8 * animationQuality;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Bright center (simplified for mobile)
      if (!isMobile) {
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = isMobile ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reduced particle spawn rate on mobile
      const spawnRate = isMobile ? 0.1 : 0.3;
      if (particlesRef.current.length < maxParticles && Math.random() < spawnRate) {
        particlesRef.current.push(createParticle());
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        updateParticle(particle);
        drawParticle(particle);

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: isMobile ? 0.4 : 0.7 }}
    />
  );
};

export default EnhancedParticles;
