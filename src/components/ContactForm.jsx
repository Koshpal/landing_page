import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative overflow-visible bg-[#5B7FDB] w-full">
      <div className="w-full py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Content */}
            <div className="text-white space-y-5 lg:space-y-6 pt-8 lg:pt-12">
              <h1 
                className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight"
                style={{ color: '#ffffff' }}
              >
                Explore endless possibilities with Koshpal
              </h1>

              <p 
                className="font-jakarta text-base sm:text-lg leading-relaxed max-w-xl"
                style={{ color: '#ffffff' }}
              >
                Explore what money clarity feels like with Koshpal. Manage bills, track shared expenses, 
                and grow smarter with tailored insights and advisory tools — built just for you.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-block px-8 py-3.5 bg-transparent border-2 border-white text-white font-jakarta font-semibold rounded-full hover:bg-white hover:text-[#5B7FDB] transition-all duration-300 text-base sm:text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Request a Demo
              </button>
            </div>

            {/* Right: Phone Mockups - Hanging from top */}
            <div className="flex justify-center lg:justify-end relative -mt-8 lg:-mt-16">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/phone20.png"
                  alt="Koshpal app interface showing budget tracking"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


