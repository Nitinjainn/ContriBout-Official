import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? 'bg-gray-100 rounded-lg shadow-lg' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-gray-800 hover:bg-gray-50 hover:scale-[1.02] transition-transform duration-200 rounded-md focus:outline-none"
      >
        <span className="text-lg">{question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <FaChevronDown className="text-gray-500" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen border-t border-gray-300' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 py-4 px-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'How Can I Make a Donation?',
      answer:
        'You can make a donation through our website by clicking on the Donate button.',
    },
    {
      question: 'Is My Donation Tax-Deductible?',
      answer:
        'Yes, all donations are tax-deductible to the full extent of the law.',
    },
    {
      question: 'Can I Donate in Honor or Memory of Someone?',
      answer:
        'Absolutely. You can specify the honoree’s details during the donation process.',
    },
    {
      question: 'How Will My Donation Be Used?',
      answer:
        'Your donation goes directly to supporting our mission and helping those in need.',
    },
    {
      question: 'Can I Set Up a Recurring Donation?',
      answer:
        'Yes, we offer options for monthly, quarterly, and annual recurring donations.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-3xl space-y-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
