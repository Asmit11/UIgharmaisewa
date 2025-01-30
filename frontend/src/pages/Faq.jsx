import React, { useState } from 'react';
import Footer from '../components/Footer';
import Example from '../components/Navbar';
import homepage from '../images/homepage.jpeg';

const faqs = [
  {
    question: "What is Ghai Mai Sewa?",
    answer: "You can book a service by logging in, selecting the service you need, choosing a time, and confirming your booking."
  },
  {
    question: "How can I Book a service in Ghar Mai Sewa?",
    answer: "Users can browse through a list of service providers, view their profiles and prices, and request services directly through the app. Service providers can accept or reject requests based on their availability."
  },
  {
    question: "What should I do if I face any issues?",
    answer: "If you face any issues, you can contact our customer support team through chat, email, or phone. We're here to help 24/7!"
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Example />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${homepage})` }}
      >
        <div className='min-h-screen flex flex-col items-center justify-center'>
          <h2 className="text-4xl font-semibold text-black mb-8">Frequently Asked Questions (FAQ)</h2>
          <div className="max-w-4xl mx-auto p-8 opacity-95 bg-white rounded-md shadow-lg ">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="w-full text-left py-3 px-4 bg-[#90D2B5] text-white rounded-md shadow-md hover:bg-[#90D2B5] focus:outline-none focus:bg-[#90D2B5] transition duration-300"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <div className="p-4 mt-2 bg-gray-100 rounded-md shadow-md">
                    <p className="text-gray-800">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FaqPage;
