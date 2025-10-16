import React from 'react';

// Helper component for the decorative background shapes
const CardShape = ({ shape, position, size, color, opacity }) => {
  const shapes = {
    circle: <div className={`absolute ${position} ${size} ${color} ${opacity} rounded-full`} />,
    sparkle: (
      <svg className={`absolute ${position} ${size} ${color} ${opacity}`}
        width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 0L49.5113 38.4887L88 44L49.5113 49.5113L44 88L38.4887 49.5113L0 44L38.4887 38.4887L44 0Z" fill="currentColor"/>
      </svg>
    ),
    wave: (
      <svg className={`absolute ${position} ${size} ${color} ${opacity}`}
        width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50V100H0V50Z" fill="currentColor" />
      </svg>
    ),
    bar: <div className={`absolute ${position} ${size} ${color} ${opacity} rounded-full`} />
  };
  return shapes[shape] || null;
};

export default function TrustedExperts() {
  const experts = [
    {
      name: 'Mark Adam',
      title: 'Chartered Accountant',
      image: '/assets/Adam.png', // Image asset for Mark Adam
      bgColor: 'bg-[#FDEBEA]',
      badgeColor: 'bg-[#F27A7A]',
      textColor: 'text-[#D95B5B]',
      shapes: [
        { shape: 'circle', position: 'bottom-0 right-0', size: 'w-24 h-24', color: 'bg-[#F27A7A]', opacity: 'opacity-50' },
        { shape: 'sparkle', position: 'top-1/3 left-4', size: 'w-8 h-8', color: 'text-[#F27A7A]', opacity: 'opacity-70' },
      ]
    },
    {
      name: 'Ms. Smitha',
      title: 'Financial Planner',
      image: '/assets/Smitha.png',
      bgColor: 'bg-[#EAF6F0]',
      badgeColor: 'bg-[#6CC19A]',
      textColor: 'text-[#4A9D7C]',
      shapes: [
        { shape: 'wave', position: 'bottom-0 left-0', size: 'w-32 h-16', color: 'text-[#6CC19A]', opacity: 'opacity-40' },
        { shape: 'sparkle', position: 'top-1/2 right-4', size: 'w-6 h-6', color: 'text-[#6CC19A]', opacity: 'opacity-80' },
      ]
    },
    {
      name: 'Dr. Einstein',
      title: 'Financial Coach',
      image: '/assets/Einstein.png',
      bgColor: 'bg-[#FFF3E5]',
      badgeColor: 'bg-[#F5A623]',
      textColor: 'text-[#D98200]',
      shapes: [
        { shape: 'circle', position: 'bottom-4 -right-8', size: 'w-32 h-32', color: 'bg-[#F5A623]', opacity: 'opacity-40' },
        { shape: 'circle', position: 'top-1/4 left-0', size: 'w-20 h-20', color: 'bg-[#F5A623]', opacity: 'opacity-30' },
      ]
    },
    {
      name: 'Priya Sharma',
      title: 'Chartered Accountant',
      image: '/assets/Priya.png',
      bgColor: 'bg-[#E9EFFF]',
      badgeColor: 'bg-[#4A72FF]',
      textColor: 'text-[#3B5AD9]',
      shapes: [
        { shape: 'bar', position: 'bottom-1/4 right-4', size: 'w-8 h-16', color: 'bg-[#4A72FF]', opacity: 'opacity-30' },
        { shape: 'bar', position: 'top-1/3 left-4', size: 'w-8 h-24', color: 'bg-[#4A72FF]', opacity: 'opacity-20' },
      ]
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted Finance Experts
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            Meet Koshpal's Certified Advisors. Your Partners in Financial Wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className={`${expert.bgColor} rounded-3xl p-6 text-center flex flex-col overflow-hidden relative transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* Decorative Shapes */}
              {expert.shapes.map((s, i) => <CardShape key={i} {...s} />)}

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Top part: Name and Title */}
                <div className="flex-shrink-0">
                  <h3 className="font-bold text-2xl text-slate-800">{expert.name}</h3>
                  <div className={`mt-3 inline-block ${expert.badgeColor} rounded-full px-4 py-1`}>
                    <p className="text-sm font-semibold text-white">{expert.title}</p>
                  </div>
                </div>

                {/* Bottom part: Image placeholder */}
                <div className="flex-grow flex items-end justify-center mt-4">
                  <div className="w-full h-48 bg-black/5 rounded-t-2xl flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105" style={{background: 'linear-gradient(to right, #4A72FF, #2743A8)'}}>
            View our Advisors
          </button>
        </div>
      </div>
    </section>
  );
}
