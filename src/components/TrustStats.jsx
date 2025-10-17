import React from "react";

export default function TrustStats() {
  return (
    <section className="w-full bg-[#fafafa] flex flex-col items-center justify-center py-[90px] px-[120px] gap-12 text-center">
      {/* Intro paragraph */}
      <div className="w-full max-w-[1200px] text-[20px] leading-[140%] font-semibold font-jakarta text-[#383838]">
        Unlock invaluable wisdom personalized for you in our top-notch podcast.
        Dive into episodes designed to deliver relevant insights that cater to
        your interests and needs.
      </div>

      {/* Main container: Video + Stats */}
      <div className="w-full max-w-[1203px] flex items-center justify-between gap-5 text-left">
        {/* Left: Video */}
        <div className="w-[827px] h-[514px] rounded-2xl border border-[#cfd0d1] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/4836232_Laptop_Credit_1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right: Stats column */}
        <div className="w-[301px] flex flex-col items-start gap-[13px]">
          {/* Stat 1 */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-[94px] leading-[110%] font-extrabold text-[#17a2b8] font-['Red_Hat_Display']">
              10+
            </div>
            <div className="text-[18px] leading-[160%] font-semibold font-jakarta text-[#383838]">
              qualified coaches onboard
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>

          {/* Stat 2 */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-[94px] leading-[110%] font-extrabold text-[#17a2b8] font-['Red_Hat_Display']">
              12+
            </div>
            <div className="text-[20px] leading-[160%] font-semibold font-jakarta text-[#383838] text-center">
              industries consulted
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>

          {/* Stat 3 */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-[94px] leading-[110%] font-medium text-[#17a2b8] font-outfit">
              236
            </div>
            <div className="text-[20px] leading-[160%] font-semibold font-jakarta text-[#383838] text-center">
              <p className="m-0">coaching hours delivered</p>
              <p className="m-0">in pilot phase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
