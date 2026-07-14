'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Cpu, Truck, CreditCard, RotateCcw } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQCategory[] = [
    {
      id: 'general',
      name: 'General & Products',
      icon: <Cpu className="w-4 h-4" />,
      items: [
        {
          question: 'Are all the gadgets sold on your store authentic and original?',
          answer: 'Absolutely. Every piece of hardware, smart device, and tech accessory we stock is sourced directly from certified brand manufacturers or official authorized global distributors. Every item ships in original retail packaging with authentic serial numbers.'
        },
        {
          question: 'Do the products come with a warranty?',
          answer: 'Yes, all electronic items come with a standard 1-Year Limited Manufacturer Warranty covering internal hardware failure and factory defects. Extended warranty coverage options can also be added at checkout.'
        },
        {
          question: 'Do you restock items that are marked as out of stock?',
          answer: 'We try to replenish popular electronic gear within 7–14 business days. You can sign up for automated back-in-stock text or email notifications directly on the product detail page.'
        }
      ]
    },
    {
      id: 'shipping',
      name: 'Shipping & Delivery',
      icon: <Truck className="w-4 h-4" />,
      items: [
        {
          question: 'How long does processing and transit take?',
          answer: 'Orders placed before 2:00 PM EST dispatch from our automated warehouse on the same business day. Standard shipping takes 3–5 working days, while our Expedited Priority takes 2 business days.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes! We ship to over 50 countries worldwide. International orders are handled through DHL Express or FedEx, and tracking links are automatically generated as soon as packages clear local hub sorting.'
        }
      ]
    },
    {
      id: 'payment',
      name: 'Payment & Pricing',
      icon: <CreditCard className="w-4 h-4" />,
      items: [
        {
          question: 'What secure payment methods do you accept?',
          answer: 'We securely accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, PayPal, and flexible installment payment methods like Klarna and Affirm.'
        },
        {
          question: 'Will I be charged customs fees or import import taxes?',
          answer: 'For domestic orders, applicable local state sales tax is calculated at final checkout. For international orders, duties and customs taxes are calculated upfront dynamically at checkout so you face zero surprise fees upon delivery.'
        }
      ]
    },
    {
      id: 'returns',
      name: 'Returns & Technical Support',
      icon: <RotateCcw className="w-4 h-4" />,
      items: [
        {
          question: 'What is your return window for open-box gadgets?',
          answer: 'We offer a stress-free 30-day return policy. Devices can be opened and tested, but they must be sent back with all original box inserts, bundled charging cables, documentation, and missing zero cosmetic components.'
        },
        {
          question: 'What should I do if my gadget arrives structurally damaged?',
          answer: 'Do not worry! Every single package leaving our terminal is fully insured. If your package arrives damaged, take a quick photo and contact our customer service team immediately. We will ship a brand new replacement package right away.'
        }
      ]
    }
  ];

  const currentCategoryData = faqData.find(cat => cat.id === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0); // Reset accordion state to open first item in the new tab
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-xl text-indigo-600 mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto">
            Got a question about a technical specification, shipping milestone, or return criteria? Find quick answers right here.
          </p>
        </div>

        {/* Main Content Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Navigation Sidebar */}
          <div className="space-y-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm lg:sticky lg:top-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Categories
            </p>
            {faqData.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Accordion List Container */}
          <div className="lg:col-span-3 space-y-3">
            {currentCategoryData?.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Dynamic Accordion Height Block */}
                  <div
                    className={`transition-all duration-200 ease-in-out ${
                      isOpen ? 'max-h-60 border-t border-gray-50' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-5 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-12 bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-600">
            Can&apos;t manage to track down the technical details you need? 
            Our support desk responds within hours.{' '}
            <a href="/contact" className="text-indigo-600 font-medium hover:underline">
              Submit a support ticket &rarr;
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}