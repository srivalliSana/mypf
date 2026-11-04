import React, { useEffect, useRef } from 'react';

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle drifting astronomical / spectral coordinates
    interface StarPoint {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }

    const points: StarPoint[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.6,
      opacity: Math.random() * 0.25 + 0.05,
      speed: Math.random() * 0.15 + 0.05,
    }));

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint, ultra-slow drifting spectral reference points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        pt.y -= pt.speed;
        if (pt.y < 0) {
          pt.y = height;
          pt.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(240, 240, 235, ${pt.opacity})`;
        ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        aria-hidden="true"
      />
    </>
  );
};
