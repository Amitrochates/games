import React, { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

const ResendBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = width;
    canvas.height = height;

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');

    // Particle animation
    let particles: { x: number; y: number; radius: number; speedX: number; speedY: number }[] = [];
    const maxParticles = 100;

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw gradient background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff'; // Light blue color
        ctx.fill();

        // Update particle positions
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around the screen
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      });

      requestAnimationFrame(animateParticles);
    };

    initParticles();
    animateParticles();

    return () => {
      // Clean up the animation on component unmount
      cancelAnimationFrame(animateParticles as any);
    };
  }, [width, height]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
  );
};

export default ResendBackground;