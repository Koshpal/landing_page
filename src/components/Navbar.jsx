import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    // fixed floating pill  — adjusts spacing from top with top-4
    <header className="fixed inset-x-0 top-2 sm:top-3 md:top-4 z-50 pointer-events-none">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 pointer-events-auto">
        {/* outer pill frame (rounded + ring + subtle border) */}
        <div className="mx-auto rounded-full bg-white/95 backdrop-blur-lg px-3 sm:px-4 md:px-6 flex items-center justify-between shadow-2xl ring-1 ring-grey-lightest border border-white-light h-[56px] sm:h-[64px] md:h-[70px]">
          {/* left: logo */}
          <div className="flex items-center gap-2 sm:gap-3 h-full">
            {/* larger responsive logo */}
            <img
              src="/assets/koshPal-logo.png"
              alt="Koshpal"
              className="h-[36px] sm:h-[42px] md:h-[50px] w-auto"
            />
            
          </div>

          {/* center: nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-black-light font-outfit font-bold px-4 xl:px-6 py-2.5 text-sm xl:text-base">
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">About</a>
            <a href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">What we do</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">How it works</a>
            <a href="#resources" onClick={(e) => { e.preventDefault(); smoothScrollTo('resources'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">Resources</a>
          </nav>

          {/* right: CTA */}
          <div className="hidden lg:block">
            <button 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}
              className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap"
              style={{ color: '#FFFFFF' }}
            >
              Request a Demo
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="lg:hidden text-black-light p-2 -mr-2 touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl p-5 text-black-light space-y-4 shadow-lg border border-grey-lightest animate-fadeIn">
            <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>About</a>
            <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }}>What we do</a>
            <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }}>How it works</a>
            <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#resources" onClick={(e) => { e.preventDefault(); smoothScrollTo('resources'); }}>Resources</a>
            <div className="pt-3">
              <button onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }} className="w-full bg-primary text-white font-jakarta font-semibold px-4 py-3 text-base rounded-full hover:bg-primary-darkest transition-all cursor-pointer touch-manipulation">
                Request a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
