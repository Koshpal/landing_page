import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="w-full py-20 lg:py-28"
        style={{
          background: 'linear-gradient(90deg, #5B6FD8 0%, #5B6FD8 50%, #7B8CE8 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Explore endless possibilities with Koshpal
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                Explore what money clarity feels like with Koshpal. Manage bills, track shared expenses, 
                and grow smarter with tailored insights and advisory tools — built just for you.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg cursor-pointer"
                style={{ color: '#FFFFFF' }}
              >
                Request a Demo
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/assets/phone-right.png"
                  alt="Koshpal app interface showing expense tracking"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


