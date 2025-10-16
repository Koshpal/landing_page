import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export default function Hero() {
  const smoothScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      aria-labelledby="hero-heading"
      style={{ backgroundColor: '#4961C6' }}
    >
      {/* Interactive Background Ripple Effect */}
      <BackgroundRippleEffect />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24 relative w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7 lg:pr-8"
          >
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-outfit text-white text-[64px] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.15] tracking-tight text-left"
              style={{ letterSpacing: '-0.02em', color: 'white' }}
            >
              Empower Your Team's Financial Wellness
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-jakarta text-white text-base sm:text-lg lg:text-xl max-w-[540px] leading-[1.65] text-left"
              style={{ color: 'white' }}
            >
              Koshpal delivers privacy-first, automated expense tracking and actionable insights, designed to boost productivity and financial clarity for your workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <motion.button
                onClick={smoothScrollToContact}
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#334eac' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white rounded-full px-7 py-3.5 font-jakarta font-semibold text-[15px] focus:outline-none focus:ring-4 focus:ring-white/30 transition-colors duration-300 shadow-lg"
                aria-label="Book a Demo"
              >
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
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
            className="flex justify-center lg:justify-end"
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
                  className="w-[260px] sm:w-[320px] lg:w-[380px] xl:w-[420px]"
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
