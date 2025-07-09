import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question:
      'Is my content private and secure? Does Freepik use my inputs or outputs to train its models?',
    answer:
      'No. Your data is never used to train any AI models—ours or third-party. All input/output is private and secure.',
  },
  {
    question:
      'How do credits work, and how many generations do I get per tool?',
    answer:
      'Each tool uses credits differently. You’ll get a specific amount per day depending on your plan.',
  },
  {
    question:
      'Can I use AI-generated content commercially, and do I own the rights to it?',
    answer:
      'Yes. You own the rights to your AI-generated content and can use it commercially without limitations.',
  },
  {
    question: 'Do I need to attribute to use Freepik stock content?',
    answer:
      'Attribution is not required for premium users. Free users must provide proper credit according to the license.',
  },
];

const FaqsSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <section className='bg-obsedian text-white px-6 md:px-12 py-20'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-2xl md:text-3xl font-semibold mb-10 font-poppins'>
                    Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='border-b border-white/20 pb-4'>
                            <button onClick={() => toggleFaq(index)} className='w-full flex justify-between items-center text-left text-base md:text-lg font-medium font-montserrat hover:text-gray-400 transition-colors'>
                                <span>{faq.question}</span>
                                <span className='ml-4'>
                                    {activeIndex === index ? (
                                        <FaMinus className='text-sm' />
                                    ) : (
                                        <FaPlus className='text-sm' />
                                    )}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className='mt-4 text-sm text-gray-400 transition-all duration-300 font-montserrat'>
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default FaqsSection