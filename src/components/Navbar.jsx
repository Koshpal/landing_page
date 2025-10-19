import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

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
          <Link to="/" className="flex items-center gap-2 sm:gap-3 h-full">
            {/* larger responsive logo */}
            <img
              src="/assets/koshPal-logo.png"
              alt="Koshpal"
              className="h-[36px] sm:h-[42px] md:h-[50px] w-auto cursor-pointer"
            />
          </Link>

          {/* center: nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-black-light font-jakarta font-bold px-4 xl:px-6 py-2.5 text-sm xl:text-base">
            {isHomePage ? (
              <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">About</a>
            ) : (
              <Link to="/#about" className="hover:text-primary transition cursor-pointer whitespace-nowrap">About</Link>
            )}
            {isHomePage ? (
              <a href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">What we do</a>
            ) : (
              <Link to="/#what-we-do" className="hover:text-primary transition cursor-pointer whitespace-nowrap">What we do</Link>
            )}
            {isHomePage ? (
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">How it works</a>
            ) : (
              <Link to="/#how-it-works" className="hover:text-primary transition cursor-pointer whitespace-nowrap">How it works</Link>
            )}
            {isHomePage ? (
              <a href="#resources" onClick={(e) => { e.preventDefault(); smoothScrollTo('resources'); }} className="hover:text-primary transition cursor-pointer whitespace-nowrap">Resources</a>
            ) : (
              <Link to="/#resources" className="hover:text-primary transition cursor-pointer whitespace-nowrap">Resources</Link>
            )}
            <Link to="/contact" className="hover:text-primary transition cursor-pointer whitespace-nowrap">Contact Us</Link>
          </nav>

          {/* right: CTA */}
          <div className="hidden lg:block">
            {isHomePage ? (
              <button 
                onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}
                className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap"
                style={{ color: '#FFFFFF' }}
              >
                Request a Demo
              </button>
            ) : (
              <Link 
                to="/contact"
                className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap inline-block"
                style={{ color: '#FFFFFF' }}
              >
                Get Started
              </Link>
            )}
          </div>

          {/* mobile menu button */}
          <button
            className="lg:hidden text-black-light p-2 -mr-2 touch-manipulation transition-transform duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* mobile dropdown */}
        <div className={`lg:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl text-black-light shadow-lg border border-grey-lightest transition-all duration-300 ease-in-out origin-top ${
          open ? 'opacity-100 scale-y-100 max-h-96 p-5 space-y-4' : 'opacity-0 scale-y-0 max-h-0 p-0 border-0'
        }`}>
            {isHomePage ? (
              <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>About</a>
            ) : (
              <Link to="/#about" className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" onClick={() => setOpen(false)}>About</Link>
            )}
            {isHomePage ? (
              <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }}>What we do</a>
            ) : (
              <Link to="/#what-we-do" className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" onClick={() => setOpen(false)}>What we do</Link>
            )}
            {isHomePage ? (
              <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }}>How it works</a>
            ) : (
              <Link to="/#how-it-works" className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" onClick={() => setOpen(false)}>How it works</Link>
            )}
            {isHomePage ? (
              <a className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" href="#resources" onClick={(e) => { e.preventDefault(); smoothScrollTo('resources'); }}>Resources</a>
            ) : (
              <Link to="/#resources" className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" onClick={() => setOpen(false)}>Resources</Link>
            )}
            <Link to="/contact" className="block font-jakarta font-medium text-base hover:text-primary transition cursor-pointer py-2 touch-manipulation" onClick={() => setOpen(false)}>Contact Us</Link>
            <div className="pt-3">
              {isHomePage ? (
                <button onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }} className="w-full bg-primary text-white font-jakarta font-semibold px-4 py-3 text-base rounded-full hover:bg-primary-darkest transition-all cursor-pointer touch-manipulation" style={{ color: '#FFFFFF' }}>
                  Request a Demo
                </button>
              ) : (
                <Link to="/contact" onClick={() => setOpen(false)} className="block w-full bg-primary text-white font-jakarta font-semibold px-4 py-3 text-base rounded-full hover:bg-primary-darkest transition-all cursor-pointer touch-manipulation text-center" style={{ color: '#FFFFFF' }}>
                  Get Started
                </Link>
              )}
            </div>
        </div>
      </div>
    </header>
  )
}
