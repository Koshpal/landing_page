import React from "react";

export default function TrustStats() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Intro paragraph */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <p className="font-jakarta text-black-light text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Unlock invaluable wisdom personalized for you in our top-notch podcast. Dive into
          episodes designed to deliver relevant insights that cater to your interests and needs.
        </p>
      </div>

      {/* Main grid: Image + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left: Single full image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/assets/Session.png"
              alt="Professional coaching session"
              className="w-full h-auto object-cover"
              style={{ minHeight: 480 }}
            />
          </div>
        </div>

        {/* Right: Stats column */}
        <div className="flex flex-col gap-10 justify-center">
          {/* Stat 1 */}
          <div className="w-full">
            <div className="font-outfit text-[64px] md:text-[76px] lg:text-[88px] font-extrabold text-secondary leading-none">
              10+
            </div>
            <div className="mt-3 font-jakarta text-base md:text-lg text-grey-dark">
              qualified coaches onboard
            </div>
          </div>

          <hr className="w-full border-t-2 border-grey-lightest" />

          {/* Stat 2 */}
          <div className="w-full">
            <div className="font-outfit text-[64px] md:text-[76px] lg:text-[88px] font-extrabold text-secondary leading-none">
              12+
            </div>
            <div className="mt-3 font-jakarta text-base md:text-lg text-grey-dark">
              industries consulted
            </div>
          </div>

          <hr className="w-full border-t-2 border-grey-lightest" />

          {/* Stat 3 */}
          <div className="w-full">
            <div className="font-outfit text-[64px] md:text-[76px] lg:text-[88px] font-extrabold text-secondary leading-none">
              236+
            </div>
            <div className="mt-3 font-jakarta text-base md:text-lg text-grey-dark">
              coaching hours delivered
              <br />
              in pilot phase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
