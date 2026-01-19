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
    <header className="fixed inset-x-0 z-50 pointer-events-none top-2 sm:top-3 md:top-4">
      <div className="max-w-5xl px-3 mx-auto pointer-events-auto sm:px-4 md:px-6">
        {/* outer pill frame (rounded + ring + subtle border) */}
        <div className="mx-auto rounded-full bg-white/95 backdrop-blur-lg px-3 sm:px-4 md:px-6 flex items-center justify-between shadow-2xl ring-1 ring-grey-lightest border border-white-light h-[56px] sm:h-[64px] md:h-[70px]">
          {/* left: logo */}
          <Link to="/" className="flex items-center h-full gap-2 sm:gap-3">
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
              <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }} className="transition cursor-pointer hover:text-primary whitespace-nowrap">About</a>
            ) : (
              <Link to="/#about" className="transition cursor-pointer hover:text-primary whitespace-nowrap">About</Link>
            )}
            {isHomePage ? (
              <a href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }} className="transition cursor-pointer hover:text-primary whitespace-nowrap">What we do</a>
            ) : (
              <Link to="/#what-we-do" className="transition cursor-pointer hover:text-primary whitespace-nowrap">What we do</Link>
            )}
            {isHomePage ? (
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }} className="transition cursor-pointer hover:text-primary whitespace-nowrap">How it works</a>
            ) : (
              <Link to="/#how-it-works" className="transition cursor-pointer hover:text-primary whitespace-nowrap">How it works</Link>
            )}
            </nav>

          <div className="hidden lg:block">
            {isHomePage && (
              <Link 
                to="/login"
                className=" bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap"
                style={{ color: '#FFFFFF' }}
              >
                login
              </Link>
            ) 
            // : (
            //   <Link 
            //     to="/contact"
            //     className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap inline-block"
            //     style={{ color: '#FFFFFF' }}
            //   >
            //     Get Started
            //   </Link>
            // )
            }
          </div>

          {/* right: CTA */}
          <div className="hidden lg:block">
            {isHomePage && (
              <Link 
                to="/demo"
                className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap"
                style={{ color: '#FFFFFF' }}
              >
                Request a Demo
              </Link>
            ) 
            // : (
            //   <Link 
            //     to="/contact"
            //     className="bg-primary text-white font-bold font-jakarta px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-full shadow-md hover:bg-primary-darkest transition-all cursor-pointer whitespace-nowrap inline-block"
            //     style={{ color: '#FFFFFF' }}
            //   >
            //     Get Started
            //   </Link>
            // )
            }
          </div>

          {/* mobile menu button */}
          <button
            className="p-2 -mr-2 transition-transform duration-300 lg:hidden text-black-light touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <a className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>About</a>
            ) : (
              <Link to="/#about" className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" onClick={() => setOpen(false)}>About</Link>
            )}
            {isHomePage ? (
              <a className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" href="#what-we-do" onClick={(e) => { e.preventDefault(); smoothScrollTo('what-we-do'); }}>What we do</a>
            ) : (
              <Link to="/#what-we-do" className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" onClick={() => setOpen(false)}>What we do</Link>
            )}
            {isHomePage ? (
              <a className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }}>How it works</a>
            ) : (
              <Link to="/#how-it-works" className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" onClick={() => setOpen(false)}>How it works</Link>
            )}
            {isHomePage ? (
              <a className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" href="#resources" onClick={(e) => { e.preventDefault(); smoothScrollTo('resources'); }}>Resources</a>
            ) : (
              <Link to="/#resources" className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" onClick={() => setOpen(false)}>Resources</Link>
            )}
            <Link to="/contact" className="block py-2 text-base font-medium transition cursor-pointer font-jakarta hover:text-primary touch-manipulation" onClick={() => setOpen(false)}>Contact Us</Link>
            <div className="pt-3">
              {isHomePage && (
                <button onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }} className="w-full px-4 py-3 text-base font-semibold text-white transition-all rounded-full cursor-pointer bg-primary font-jakarta hover:bg-primary-darkest touch-manipulation" style={{ color: '#FFFFFF' }}>
                  Request a Demo
                </button>
              ) 
              // : (
              //   <Link to="/contact" onClick={() => setOpen(false)} className="block w-full px-4 py-3 text-base font-semibold text-center text-white transition-all rounded-full cursor-pointer bg-primary font-jakarta hover:bg-primary-darkest touch-manipulation" style={{ color: '#FFFFFF' }}>
              //     Get Started
              //   </Link>
              // )
              }
            </div>
        </div>
      </div>
    </header>
  )
}
