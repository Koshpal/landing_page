import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const smoothScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 60;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create grid particles
    const initParticles = () => {
      particles = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height / 2; y += gridSize) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            opacity: 0.2,
            targetOpacity: 0.2,
            offsetX: 0,
            offsetY: 0,
            targetOffsetX: 0,
            targetOffsetY: 0
          });
        }
      }
    };
    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        const dx = mousePos.x - particle.baseX;
        const dy = mousePos.y - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 350; // Larger radius

        if (distance < maxDistance) {
          const intensity = 1 - distance / maxDistance;
          
          // Heavy fade out effect - more dramatic
          particle.targetOpacity = Math.max(0, 0.25 * (distance / maxDistance));
          
          // Heavy pixelated/distortion effect - much stronger
          const distortionStrength = intensity * 45; // Increased from 15 to 45
          particle.targetOffsetX = (Math.random() - 0.5) * distortionStrength;
          particle.targetOffsetY = (Math.random() - 0.5) * distortionStrength;
        } else {
          particle.targetOpacity = 0.25;
          particle.targetOffsetX = 0;
          particle.targetOffsetY = 0;
        }

        // Slower, smoother transition
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.08;
        particle.offsetX += (particle.targetOffsetX - particle.offsetX) * 0.12;
        particle.offsetY += (particle.targetOffsetY - particle.offsetY) * 0.12;

        // Calculate actual position with offset
        const drawX = particle.baseX + particle.offsetX;
        const drawY = particle.baseY + particle.offsetY;

        // Draw grid lines with heavier, more visible effect
        const lineOpacity = particle.opacity;
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
        ctx.lineWidth = 1.5; // Thicker lines for more visibility
        
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX + gridSize, drawY);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(drawX, drawY + gridSize);
        ctx.stroke();
        
        // Add extra visual effect - draw small dots at intersections for more visibility
        if (distance < maxDistance) {
          const dotSize = (1 - distance / maxDistance) * 3;
          ctx.fillStyle = `rgba(255, 255, 255, ${lineOpacity * 1.5})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      style={{ 
        background: 'linear-gradient(180deg, #334EAC 0%, #081F5C 100%)'
      }}
    >
      {/* Interactive Grid Canvas with Dissipation Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative w-full flex items-center" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center w-full">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 sm:space-y-6 md:space-y-7 lg:pr-8 text-center lg:text-left"
          >
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-outfit text-white text-[28px] leading-[1.2] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              style={{ letterSpacing: '-0.02em', color: 'white' }}
            >
              <span className="block">Empower Your Team's</span>
              <span className="block">Financial Wellness</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-jakarta text-white text-base sm:text-lg md:text-xl lg:text-lg max-w-[540px] leading-[1.6] sm:leading-[1.65] mx-auto lg:mx-0"
              style={{ color: 'white' }}
            >
              Koshpal delivers privacy-first, automated expense tracking and actionable insights, designed to boost productivity and financial clarity for your workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-3 sm:pt-4 md:pt-5 flex justify-center lg:justify-start"
            >
              <motion.button
                onClick={smoothScrollToContact}
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#334eac' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white rounded-full px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-jakarta font-semibold text-base sm:text-[15px] md:text-base focus:outline-none focus:ring-4 focus:ring-white/30 transition-colors duration-300 shadow-lg touch-manipulation"
                aria-label="Book a Demo"
                style={{ color: 'white' }}
              >
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5"
                  aria-hidden="true"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
                <span>Book a Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Phone Frame with Enhanced Shadow and Continuous Float Animation */}
              <motion.div
                animate={{
                  y: [-10, -20, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative cursor-pointer"
              >
                <motion.img
                  src="/assets/phone-mock.png"
                  alt="Koshpal App Preview"
                  className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px]"
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.35)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.25))'
                  }}
                  whileHover={{
                    filter: 'drop-shadow(0 40px 80px rgba(0, 0, 0, 0.45)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.35))'
                  }}
                />
              </motion.div>

              {/* Enhanced Glow effect behind phone with pulse animation */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
