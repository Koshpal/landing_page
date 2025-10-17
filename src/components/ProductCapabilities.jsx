import React from "react";
import { motion } from "framer-motion";

const featuresContent = [
  {
    badge: "Set it and Own it",
    title: "We track your money so you don't have to",
    description:
      "Automatic UPI & SMS categorisation eliminates manual spreadsheets.",
    image: "/assets/feature-center.png",
  },
  {
    badge: "Your money, Your rules",
    title: "Track what matters, ignore what doesn't.",
    description:
      "Dashboards surface the 10% of expenses that drive 90% of leaks.",
    image: "/assets/feature-left.png",
  },
  {
    badge: "Your personalized money tracker",
    title: "Koshpal learns your habits and adjusts in real time.",
    description:
      "Personalized nudges help teams stay on-budget without micro-management.",
    image: "/assets/feature-right.png",
  },
];

export default function ProductCapabilities() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16"
      style={{
        background: "linear-gradient(0deg, #ffffff, #334eac)",
      }}
    >
      {/* Top Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-jakarta font-medium mb-8">
          <span>✨</span>
          <span>How we make your money smarter</span>
        </div>

        <h1 className="font-outfit text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          We turn your spending into smarter financial decisions.
        </h1>

        <p className="font-jakarta text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Koshpal helps you track, budget, and grow your money with real-time
          insights and a privacy-first approach.
        </p>
      </div>

      {/* Alternating Features Section */}
      <div className="max-w-7xl mx-auto space-y-28">
        {featuresContent.map((feature, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Text Content */}
            <div
              className={`text-white ${
                index % 2 !== 0 ? "lg:col-start-2" : ""
              }`}
            >
              <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                {feature.badge}
              </span>
              <h2 className="font-outfit text-4xl font-bold leading-snug mb-5">
                {feature.title}
              </h2>
              <p className="font-jakarta text-white/80 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
