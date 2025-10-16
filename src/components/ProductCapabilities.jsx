import React from 'react';
import { StickyScroll } from './ui/StickyScroll';

const featuresContent = [
  {
    badge: 'Set it and Own it',
    title: 'We track your money so you don\'t have to',
    description: 'Automatic UPI & SMS categorisation eliminates manual spreadsheets.',
    image: '/assets/Gemini_Generated_Image_j4iy4bj4iy4bj4iy.png',
  },
  {
    badge: 'Your money, Your rules',
    title: 'Track what matters, ignore what doesn\'t.',
    description: 'Dashboards surface the 10% of expenses that drive 90% of leaks.',
    image: '/assets/Gemini_Generated_Image_ddvoaeddvoaeddvo.png',
  },
  {
    badge: 'Your personalized money tracker',
    title: 'Koshpal learns your habits and adjusts in real time.',
    description: 'Personalized nudges help teams stay on-budget without micro-management.',
    image: '/assets/Gemini_Generated_Image_aplufgaplufgaplu.png',
  },
];

export default function ProductCapabilities() {
  return (
    <section
      className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16"
      style={{
        background: 'linear-gradient(180deg, #5767C8 0%, #7B89D3 50%, #B3BDE8 100%)',
      }}
    >
      {/* Top Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-jakarta font-medium mb-8">
          <span>💰</span>
          <span>How we make your money smarter?</span>
        </div>

        <h1 className="font-outfit text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          We turn your spending into smarter
          <br />
          financial decisions
        </h1>

        <p className="font-jakarta text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Koshpal helps you track, budget and grow your money with real-time insights and a privacy-first approach.
        </p>
      </div>

      {/* Animated Features with Sticky Scroll */}
      <StickyScroll content={featuresContent} />
    </section>
  );
}
