import React from "react";

export default function Footer() {
  return (
    <footer className="px-28 pt-24 pb-16 bg-gradient-to-b from-neutral-50 to-primary border border-black flex flex-col justify-center items-center gap-32 overflow-hidden">
      {/* Top Section */}
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        {/* Left: CTA Section */}
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-[#262626] text-6xl font-medium font-outfit leading-[78px] tracking-wider">
            Break free from manual <br />
            time tracking
          </h2>
          <button className="px-8 py-4 bg-primary rounded-[100px] shadow-[0px_0px_2px_0px_rgba(0,71,179,1.00)] border-2 border-primary-lightest flex justify-center items-center gap-2 hover:bg-primary-darkest transition-colors">
            <span className="text-center text-white-darkest text-2xl font-medium font-outfit">
              Request a Demo
            </span>
          </button>
        </div>

        {/* Right: Contact Info */}
        <div className="w-96 flex flex-col justify-start items-start gap-4">
          {/* Email */}
          <div className="self-stretch flex justify-start items-center gap-2.5">
            <div className="w-12 h-12 p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <img
                src="/assets/material-symbols_mail.svg"
                alt="Email"
                className="w-7 h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-2xl font-normal font-outfit">
              koshpal.official@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div className="self-stretch flex justify-start items-center gap-2.5">
            <div className="w-12 h-12 p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center overflow-hidden">
              <img
                src="/assets/ri_linkedin-fill.svg"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-2xl font-normal font-outfit">
              Linkedin
            </span>
          </div>

          {/* Phone */}
          <div className="self-stretch flex justify-start items-center gap-2.5">
            <div className="w-12 h-12 p-3.5 bg-blue-500 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <img
                src="/assets/bxs_phone.svg"
                alt="Phone"
                className="w-7 h-7"
              />
            </div>
            <span className="flex-1 text-[#1a1a1a] text-2xl font-normal font-outfit opacity-95">
              +91 9983444740
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-6">
        {/* Logo and Nav Links */}
        <div className="flex justify-between items-center w-full">
          <img
            src="/assets/logo_footer.png"
            alt="Koshpal Logo"
            className="h-20 object-contain"
          />
          <div className="flex justify-start items-center gap-16">
            {["Home", "About", "Project", "Feedback", "Blog", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white-darkest text-xl font-normal font-jakarta tracking-tight hover:opacity-80 transition"
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
        <p className="text-center text-white-darkest text-base font-normal font-jakarta leading-loose tracking-tight">
          © 2025 Koshpal. All rights reserved
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Cookie Settings, Anti-Spam,
          Privacy, User agreement, Legal Notice and Responsible Disclosure
        </p>
      </div>
    </footer>
  );
}
