import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    // fixed floating pill  — adjusts spacing from top with top-4
    <header className="fixed inset-x-0 top-1 z-50 pointer-events-none">
      <div className="max-w-5xl max-h-4xl mx-auto px-6 pointer-events-auto">
        {/* outer pill frame (rounded + ring + subtle border) */}
        <div className="mx-auto rounded-full bg-white/95 backdrop-blur-lg px-4 py-0 flex items-center justify-between shadow-2xl ring-1 ring-grey-lightest border border-white-light">
          {/* left: logo */}
          <div className="flex items-center gap-3">
            {/* larger responsive logo */}
            <img
              src="/assets/koshPal-logo.png"
              alt="Koshpal"
              className="h-28 w-auto md:h-20"
            />
            
          </div>

          {/* center: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-10 text-black-light font-outfit font-bold px-6 py-2.5">
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">What we do</a>
            <a href="#" className="hover:text-primary transition">How it works</a>
            <a href="#" className="hover:text-primary transition">Resources</a>
          </nav>

          {/* right: CTA */}
          <div className="hidden md:block">
            <button 
              className="bg-primary text-white font-bold font-jakarta px-6 py-2.5 rounded-full shadow-md hover:bg-primary-darkest transition-all"
              style={{ color: '#FFFFFF' }}
            >
              Request a Demo
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden text-black-light p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-xl p-4 text-black-light space-y-3 shadow-lg border border-grey-lightest">
            <a className="block font-jakarta font-medium hover:text-primary transition" href="#">About</a>
            <a className="block font-jakarta font-medium hover:text-primary transition" href="#">What we do</a>
            <a className="block font-jakarta font-medium hover:text-primary transition" href="#">How it works</a>
            <a className="block font-jakarta font-medium hover:text-primary transition" href="#">Resources</a>
            <div className="pt-2">
              <button className="w-full bg-primary text-white font-jakarta font-semibold px-4 py-2.5 rounded-full hover:bg-primary-darkest transition-all">
                Request a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
