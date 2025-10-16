import React from 'react';

export default function ExploreArticles() {
  const articles = [
    {
      category: 'Budgeting',
      title: '10 Simple Ways to Save Money Every Month',
      excerpt: 'Discover practical tips to reduce expenses and build your savings without sacrificing your lifestyle.',
      readTime: '5 min read',
      image: '/assets/article-1.jpg',
      color: 'bg-blue-500',
    },
    {
      category: 'Investing',
      title: 'Beginner\'s Guide to Mutual Funds in India',
      excerpt: 'Learn the basics of mutual fund investing and how to choose the right funds for your goals.',
      readTime: '8 min read',
      image: '/assets/article-2.jpg',
      color: 'bg-green-500',
    },
    {
      category: 'Tax Planning',
      title: 'Maximize Your Tax Savings Under Section 80C',
      excerpt: 'A comprehensive guide to tax-saving investments and deductions available under Indian tax laws.',
      readTime: '6 min read',
      image: '/assets/article-3.jpg',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Explore Financial Wisdom
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Expert insights and actionable advice to help you make smarter money decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-6xl opacity-50">📰</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${article.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            className="px-8 py-3 font-bold bg-[#2743A8] hover:bg-[#1e3482] rounded-full shadow-md transition"
            style={{ color: '#FFFFFF' }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
