import React from "react";

export default function CardsSection() {
  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{ background: "linear-gradient(180deg, #fff 0%, #334EAC 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-black-light mb-6">
            Build your <span className="text-primary">Financial</span> clarity
          </h1>
          <p className="font-jakarta text-grey-dark text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Simplify how you track, plan, and manage your money, all-in-one app.
            <br />
            Your money deserves better control. Let's start today.
          </p>
        </div>

        {/* Cards Grid - All 5 cards in one grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {/* Card 1: Track your finances (Pink) - Top Left */}
          <div className="bg-pink-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-red-400 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold text-black mb-4">
              Track your finances
            </h3>
            <p className="font-jakarta text-black text-sm leading-relaxed">
              We auto-capture UPI transaction SMS so you never miss a payment
              log. Just tag the category, no typing needed.
            </p>
          </div>

          {/* Card 2: iOS & Android App (Teal with Phone) - Center, spans 2 rows */}
          <div className="md:row-span-2 rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <img
              src="/assets/Frame 2147207729.png"
              alt="iOS & Android App - Track, budget, and understand your money"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3: Visual insights (Yellow) - Top Right */}
          <div className="bg-yellow-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9h6v6H9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold text-black mb-4">
              Visual insights
            </h3>
            <p className="font-jakarta text-black text-sm leading-relaxed">
              See your money, clearly. We turn your spending into beautiful
              charts and smart summaries
            </p>
          </div>

          {/* Card 4: Track your finances (Green) - Bottom Left */}
          <div className="bg-green-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M3 3v18h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 17V9M13 17v-6M8 17v-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold text-black mb-4">
              Track your finances
            </h3>
            <p className="font-jakarta text-black text-sm leading-relaxed">
              We auto-capture UPI transaction SMS so you never miss a payment
              log. Just tag the category, no typing needed.
            </p>
          </div>

          {/* Card 5: Real-time updates (Purple) - Bottom Right */}
          <div className="bg-indigo-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold text-black mb-4">
              Real-time updates
            </h3>
            <p className="font-jakarta text-black text-sm leading-relaxed">
              Stay on track, instantly. Koshpal notifies you in real time, so
              your goals stay intact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
