import React, { useEffect, useRef } from 'react';

const Graphic = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set font style
    const fontSize = 100;
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = 'center';

    // Define colors for particles
    const colors = ['blue', 'yellow', 'red', 'purple', 'green', 'orange', 'black'];

    // Particle settings
    const particleCount = 100;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)] // Randomly choose a color from the array
      });
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redraw
      particles.forEach(particle => {
        ctx.fillStyle = particle.color; // Set color for the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();
        particle.x -= particle.speed;
        if (particle.x < 0) {
          particle.x = canvas.width;
        }
      });
      requestAnimationFrame(drawParticles);
    };

    drawParticles();

  }, []);

  return <canvas ref={canvasRef} />;
};

export default Graphic;
