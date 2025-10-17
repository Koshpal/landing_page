import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 md:px-16 lg:px-28 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-b from-neutral-50 to-primary border border-black flex flex-col justify-center items-center gap-12 md:gap-20 lg:gap-32 overflow-hidden">
      {/* Top Section */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-8">
        {/* Left: CTA Section */}
        <div className="flex flex-col justify-start items-start gap-4 md:gap-6 w-full lg:w-auto">
          <h2 className="text-[#262626] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-outfit leading-tight sm:leading-snug md:leading-[68px] lg:leading-[78px] tracking-wide md:tracking-wider">
            Break free from manual <br className="hidden sm:block" />
            time tracking
          </h2>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary rounded-[100px] shadow-[0px_0px_2px_0px_rgba(0,71,179,1.00)] border-2 border-primary-lightest flex justify-center items-center gap-2 hover:bg-primary-darkest hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(51,78,172,0.4)] transition-all duration-300 ease-in-out active:scale-95">
            <span className="text-center text-white-darkest text-lg sm:text-xl md:text-2xl font-medium font-outfit">
              Request a Demo
            </span>
          </button>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-3 md:gap-4">
          {/* Email */}
          <div className="self-stretch flex justify-start items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 p-2.5 sm:p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg flex-shrink-0">
              <img
                src="/assets/material-symbols_mail.svg"
                alt="Email"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-outfit transition-colors group-hover:text-primary break-all sm:break-normal">
              koshpal.official@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div className="self-stretch flex justify-start items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 p-2.5 sm:p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center overflow-hidden transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg flex-shrink-0">
              <img
                src="/assets/ri_linkedin-fill.svg"
                alt="LinkedIn"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-outfit transition-colors group-hover:text-primary">
              Linkedin
            </span>
          </div>

          {/* Phone */}
          <div className="self-stretch flex justify-start items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 p-2.5 sm:p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg flex-shrink-0">
              <img
                src="/assets/bxs_phone.svg"
                alt="Phone"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-outfit opacity-95 transition-colors group-hover:text-primary group-hover:opacity-100">
              +91 9983444740
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-4 md:gap-6">
        {/* Logo and Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-4">
          <img
            src="/assets/logo_footer.png"
            alt="Koshpal Logo"
            className="h-14 sm:h-16 md:h-20 object-contain"
          />
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
            {["Home", "About", "Project", "Feedback", "Blog", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white-darkest text-sm sm:text-base md:text-lg lg:text-xl font-normal font-jakarta tracking-tight hover:scale-110 hover:text-primary-lightest transition-all duration-300 ease-in-out"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0 border-t border-slate-400/80"></div>

        {/* Copyright */}
        <p className="text-center text-white-darkest text-xs sm:text-sm md:text-base font-normal font-jakarta leading-relaxed md:leading-loose tracking-tight px-2">
          © 2025 Koshpal. All rights reserved
          <span className="hidden sm:inline">
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          </span>
          <br className="sm:hidden" />
          <span className="text-xs sm:text-sm md:text-base">
            Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice
            and Responsible Disclosure
          </span>
        </p>
      </div>
    </footer>
  );
}
