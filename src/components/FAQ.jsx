import { useState } from 'react';
import { Settings } from 'lucide-react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const faqs = [
    {
      question: "What is Koshpal, and who is it for?",
      answer: "Koshpal is a personal finance app designed to help everyday users track their spending, understand their money habits, and gain financial clarity. Whether you are a student, working professional, freelancer, or homemaker, Koshpal is built for anyone who wants to manage their finances better without stress."
    },
    {
      question: "Do I need to link my bank account to use Koshpal?",
      answer: "No, you don't need to link your bank account. Koshpal allows you to manually track your expenses and income, giving you full control over your financial data."
    },
    {
      question: "Can I track both UPI and cash transactions on Koshpal?",
      answer: "Yes, Koshpal supports tracking both UPI and cash transactions, making it easy to monitor all your spending in one place."
    },
    {
      question: "What is Chowscore?",
      answer: "Chowscore is a unique feature that rates your financial health based on your spending patterns and savings habits."
    },
    {
      question: "What is Service fee?",
      answer: "Service fee is a small charge for using premium features of Koshpal to help maintain and improve the app."
    },
    {
      question: "Why do we charge Service fee?",
      answer: "We charge a service fee to ensure we can continue providing high-quality features, security, and customer support."
    },
    {
      question: "What is Surge fee?",
      answer: "Surge fee is an additional charge during peak usage times to maintain optimal app performance."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 md:mb-6">
            <img src="/Vector.png" alt="" />
            <span className="font-medium text-sm md:text-base">FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101828] mb-3 md:mb-4 px-4">
            Commonly asked <span className="text-[#17A2B8]">questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Find quick answers to common questions
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Questions Column */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">FAQs.</h3>
            <div className="space-y-2 md:space-y-3">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuestion(index)}
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-500 ease-in-out flex items-center justify-between gap-3 group shadow-md transform ${
                    selectedQuestion === index
                      ? 'bg-[#334EAC] shadow-lg scale-[1.02]'
                      : 'bg-white hover:bg-gray-100 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <span 
                    className="font-medium text-sm sm:text-base transition-colors duration-500"
                    style={{ color: selectedQuestion === index ? '#ffffff' : '#1f2937' }}
                  >
                    {faq.question}
                  </span>
                  <img 
                    src="/svg.png" 
                    alt="" 
                    className={`flex-shrink-0 transition-all duration-500 ${
                      selectedQuestion === index ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Answer Column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ans.</h3>
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
              <img 
                src="/svg.png" 
                alt="" 
                className="w-6 h-6 sm:w-8 sm:h-8 mb-4 md:mb-6 brightness-0 transition-transform duration-500 hover:rotate-180" 
              />
              <p 
                key={selectedQuestion}
                className="text-gray-800 text-base sm:text-lg leading-relaxed animate-fadeIn"
              >
                {faqs[selectedQuestion].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;