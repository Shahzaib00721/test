'use client';
   
   
   import React from "react";
   import { FaFileAlt, FaStar, FaFileSignature, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

// src/icons.js
export {
  FaFileAlt,
  FaStar,
  FaFileSignature,
  FaCheckCircle,
  FaChevronRight
} from 'react-icons/fa';

export default function Home() {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
      answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    },
    // Repeat or map similar items
    {
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
      answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
      answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
      answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-l from-white to-white-100 px-4 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        </h1>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
          Get Started
        </button>

        <section className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b pb-4"
              >
                <div>
                  <p className="font-semibold text-base">
                    {faq.question}
                  </p>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
                <span className="text-orange-500 text-xl">&gt;</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}