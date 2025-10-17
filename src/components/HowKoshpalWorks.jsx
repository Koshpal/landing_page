import React from "react";

export default function HowKoshpalWorks() {
  return (
    <section className="w-full bg-[#FAFAFA] flex flex-col items-center py-12 md:py-16 lg:py-[90px] px-4 sm:px-6 md:px-12 lg:px-[120px] text-center">
      <div className="w-full max-w-[1200px]">
        {/* Top Badge and Heading */}
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Let's Talk Badge */}

          {/* Title */}
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.2] lg:leading-[72px] font-semibold px-4">
            <span className="bg-gradient-to-r from-[#101828] to-[#3A558E] bg-clip-text text-transparent">
              How{" "}
            </span>
            <span className="bg-gradient-to-r from-[#334EAC] to-[#17A2B8] bg-clip-text text-transparent">
              Koshpal
            </span>
            <span className="text-[#101828]"> works?</span>
          </h1>

          {/* Description */}
          <div className="flex items-center justify-center px-4 md:px-7">
            <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold text-[#4A5565] max-w-[1200px]">
              Manage your experience from start to finish, from integrations to
              registration and from interactive stage elements to post-event
              data, it's all here.
            </p>
          </div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col items-start gap-8 md:gap-12 text-left">
          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 1: Create */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-2 md:gap-3 lg:gap-3.5">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 1
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#334EAC]">
                  Create
                </div>
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334EAC"
                  strokeWidth="2.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                Launch in one week: import SMS feeds, invite employees, set
                budgets.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/step1.jpg"
                alt="Create step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 2: Engage */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-2 md:gap-3 lg:gap-3.5">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 2
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#334EAC]">
                  Engage
                </div>
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334EAC"
                  strokeWidth="2.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                Employees book 1-to-1 sessions or join live workshops right
                inside the app.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/step2.png"
                alt="Engage step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/10" />

          {/* Step 3: Analyze */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-[576px] flex flex-col items-start gap-2 md:gap-3 lg:gap-3.5">
              <div className="font-outfit text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-black">
                Step 3
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#334EAC]">
                  Analyze
                </div>
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334EAC"
                  strokeWidth="2.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-outfit text-sm sm:text-base md:text-lg lg:text-[20px] text-black">
                HR sees anonymous stress-reduction scores and productivity
                lift—updated monthly.
              </p>
            </div>
            <div className="w-full lg:flex-1 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-[100px] sm:rounded-[200px] md:rounded-[300px] lg:rounded-[384px] overflow-hidden">
              <img
                src="/step3.png"
                alt="Analyze step"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
