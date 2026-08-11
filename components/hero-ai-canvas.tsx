'use client';

import { useEffect, useRef } from 'react';

export function HeroAiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for high-tech neural mesh
    const numParticles = Math.min(Math.floor(width / 15), 90);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.3,
    }));

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing grid
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw sine wave energy beams
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.12)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 5) {
        const y = height * 0.5 + Math.sin(x * 0.005 + step) * 80 + Math.cos(x * 0.008 - step) * 40;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 102, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 5) {
        const y = height * 0.45 + Math.cos(x * 0.006 - step * 1.2) * 90;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Update and draw neural particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw connections between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.25 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${p.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00d9ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
    />
  );
}
