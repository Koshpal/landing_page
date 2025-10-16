import React from 'react';

export default function HowKoshpalWorks() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white-mid">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge and Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-grey-lightest rounded-full px-4 py-2 shadow-sm mb-8">
            <span className="text-xl">🚀</span>
            <span className="font-jakarta font-semibold text-primary text-sm">Let's Talk</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-black-light mb-6">
            How <span className="text-primary">Koshpal</span> works?
          </h1>

          <p className="font-jakarta text-grey-dark text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it's all here.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {/* Step 1: Create */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="text-sm font-jakarta font-medium text-black-light">Step 1</div>
              <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-primary flex items-center gap-3">
                Create
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </h2>
              <p className="font-jakarta text-black-light text-base md:text-lg leading-relaxed max-w-md">
                Launch in one week: import SMS feeds, invite employees, set budgets.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className="relative w-full max-w-lg rounded-[60px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src="/assets/step1-create.png"
                  alt="Create step - App interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Engage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div 
                className="relative w-full max-w-lg rounded-[60px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src="/assets/step2-engage.png"
                  alt="Engage step - Coaching session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="space-y-6 order-1 lg:order-2 lg:pl-12">
              <div className="text-sm font-jakarta font-medium text-black-light">Step 2</div>
              <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-primary flex items-center gap-3">
                Engage
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </h2>
              <p className="font-jakarta text-black-light text-base md:text-lg leading-relaxed max-w-md">
                Employees book 1-to-1 sessions or join live workshops right inside the app.
              </p>
            </div>
          </div>

          {/* Step 3: Analyze */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="text-sm font-jakarta font-medium text-black-light">Step 3</div>
              <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-primary flex items-center gap-3">
                Analyze
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </h2>
              <p className="font-jakarta text-black-light text-base md:text-lg leading-relaxed max-w-md">
                HR sees anonymous stress-reduction scores and productivity lift—updated monthly.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className="relative w-full max-w-lg rounded-[60px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src="/assets/step3-analyze.png"
                  alt="Analyze step - Analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
