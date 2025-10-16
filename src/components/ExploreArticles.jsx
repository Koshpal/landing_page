import React from "react";

export default function ExploreArticles() {
  // Sample placeholder image - you can replace with your actual image path
  const articleImage = "/assets/phone-mock.png"; // Replace with Rectangle 10925 image

  const articles = [
    {
      id: 1,
      tags: ["Stocks", "Investment", "Funds"],
      title: "8 Creative Ways to Repurpose Your Webinar Content",
      image: articleImage,
    },
    {
      id: 2,
      tags: ["Stocks", "Investment", "Funds"],
      title: "8 Creative Ways to Repurpose Your Webinar Content",
      image: articleImage,
    },
    {
      id: 3,
      tags: ["Stocks", "Investment", "Funds"],
      title: "8 Creative Ways to Repurpose Your Webinar Content",
      image: articleImage,
    },
  ];

  return (
    <section className="w-full relative bg-[#FAFAFA] flex flex-col items-center py-16 md:py-20 px-6 md:px-12 lg:px-20 gap-10 md:gap-12 text-center font-outfit">
      {/* Header Container */}
      <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-5">
        {/* Small Eyebrow Tag */}
        <div className="shadow-[0px_0px_1px_rgba(44,58,114,0.05),0px_2px_6px_rgba(44,58,114,0.05),0px_10px_18px_rgba(58,76,146,0.1)] rounded-[20px] bg-[#EFF6FF] border border-[#EFF6FF] flex items-center py-2 px-3 gap-2 hover:shadow-lg transition-shadow duration-300">
          {/* Icon placeholder - you can add your icon here */}
          <div className="h-5 w-5 md:h-6 md:w-6 relative">
            <svg
              className="w-full h-full text-[#334EAC]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="relative font-medium text-base md:text-[18px] text-[#334EAC]">
            Insights & Tips
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="relative text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] leading-tight md:leading-[60px] lg:leading-[72px] font-semibold px-4">
          <span className="bg-gradient-to-r from-[#101828] to-[#3A558E] bg-clip-text text-transparent">
            Explore Smart Finance{" "}
          </span>
          <span className="bg-gradient-to-r from-[#334EAC] to-[#17A2B8] bg-clip-text text-transparent">
            Articles
          </span>
        </h2>

        {/* Subtitle */}
        <div className="w-full flex items-center justify-center px-4">
          <p className="w-full max-w-[616px] relative text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-[28px] font-semibold text-[#4A5565] font-jakarta">
            Discover practical tips and easy guides to make your money work
            smarter every day.
          </p>
        </div>
      </div>

      {/* Articles Grid Container */}
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-10 md:gap-12 text-xs md:text-[12px] text-[#334EAC]">
        {/* Articles Grid */}
        <div className="w-full flex items-center flex-wrap justify-center gap-y-6 md:gap-y-8 gap-x-4 md:gap-x-[14px]">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-1 min-w-[300px] max-w-[380px] shadow-[0.8px_1.2px_38px_rgba(0,0,0,0.15)] rounded-[24px] bg-[#EFF1F8] flex flex-col items-start p-6 md:p-8 gap-4 hover:shadow-[0px_8px_50px_rgba(51,78,172,0.25)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group"
            >
              {/* Article Image */}
              <div className="w-full h-[200px] md:h-[220px] relative rounded-[24px] overflow-hidden">
                <img
                  src={article.image}
                  alt="Article thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Tags Container */}
              <div className="w-full flex items-start flex-wrap gap-3 md:gap-4">
                {article.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="rounded-[100px] border border-[#334EAC] flex items-center justify-center py-1.5 md:py-2 px-3 md:px-4 hover:bg-[#334EAC] hover:text-white transition-all duration-300"
                  >
                    <span className="relative text-xs md:text-[12px]">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Article Title */}
              <h3 className="w-full relative text-xl md:text-[24px] leading-snug text-[#000] text-left font-normal group-hover:text-[#334EAC] transition-colors duration-300">
                {article.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <button className="shadow-[0px_0px_8px_rgba(51,78,172,0.3)] rounded-[100px] bg-[#334EAC] border-2 border-[#334EAC] flex items-center justify-center py-3 md:py-4 px-6 md:px-8 text-lg md:text-[24px] text-[#FFFFFF] font-medium hover:bg-[#2743A8] hover:border-[#2743A8] hover:shadow-[0px_0px_16px_rgba(51,78,172,0.5)] hover:scale-105 active:scale-95 transition-all duration-300">
          Explore more
        </button>
      </div>
    </section>
  );
}
