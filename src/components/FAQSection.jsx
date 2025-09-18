import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      category: "Booking Process",
      questions: [
        {
          question: "What happens after I submit the booking form?",
          answer: "You'll receive an instant confirmation email, followed by a text message within 30 minutes containing your container location (with photo), container number, and lock combination."
        },
        {
          question: "How quickly will I receive container information?",
          answer: "We guarantee you'll receive your container details within 30 minutes of booking. Most customers receive their information within 10-15 minutes."
        },
        {
          question: "Can I book a tour outside business hours?",
          answer: "Yes! Our online booking system is available 24/7. You can book a tour anytime and receive your container information even outside traditional business hours."
        }
      ]
    },
    {
      category: "Tour Experience",
      questions: [
        {
          question: "What do I need to bring for the tour?",
          answer: "Just bring your phone with the container information we'll text you. No ID, paperwork, or appointments are required for the self-guided tour."
        },
        {
          question: "How long does the tour take?",
          answer: "Most customers spend 5-10 minutes touring their container. Take as much time as you need - there's no rush or time limit."
        },
        {
          question: "Can I tour multiple containers?",
          answer: "Your booking includes access to one specific container. If you'd like to see additional options, simply book another tour or contact us for assistance."
        },
        {
          question: "What if the container doesn't meet my needs?",
          answer: "No problem! There's no obligation to rent. Simply let us know, and we can help you find a different size or location that better fits your needs."
        }
      ]
    },
    {
      category: "Rental Process",
      questions: [
        {
          question: "How does the payment process work?",
          answer: "If you decide to rent after your tour, we'll send you a simple electronic lease via DocuSign. After signing, you'll set up automatic payments through our secure Rent Manager portal - it takes about 5 minutes total."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept two convenient payment options: (1) Credit or debit cards, and (2) Bank account transfers (ACH) using your routing and account number. Both are set up through our secure Rent Manager system, which automatically processes your monthly payments so you never have to worry about late fees."
        },
        {
          question: "What happens if I decide to rent?",
          answer: "Simply let us know after your tour! We'll guide you through our streamlined rental process: electronic lease signing and payment setup. Your temporary access code becomes permanent once the rental is complete."
        },
        {
          question: "Is there a security deposit required?",
          answer: "Yes, we require a security deposit equal to one month's rent. For example: if you choose the $115/month plan, your security deposit is $115. If you choose the $75/month plan, your security deposit is $75. The good news is that your security deposit is fully refunded when your lease ends, as long as the container is returned in good condition."
        }
      ]
    },
    {
      category: "Security & Safety",
      questions: [
        {
          question: "Is my banking information secure?",
          answer: "Absolutely. We use Rent Manager, an industry-leading property management system with bank-level encryption and security. Your financial information is protected by the same standards used by major financial institutions."
        },
        {
          question: "How secure are the storage containers?",
          answer: "Each container has a unique lock combination that only you will know. The facility is monitored and secured. You'll receive detailed security information with your container details."
        },
        {
          question: "What if I lose my access code?",
          answer: "Contact us immediately and we can provide your access code after verifying your identity. We keep secure records of all access codes for customer support."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqKey = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqKey ? null : faqKey);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.questions.map((faq, questionIndex) => {
                const faqKey = `${categoryIndex}-${questionIndex}`;
                const isOpen = openFAQ === faqKey;
                
                return (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800 pr-4">
                          {faq.question}
                        </h4>
                        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Still have questions?
        </h3>
        <p className="text-green-600 mb-4">
          We're here to help! Contact us anytime for personalized assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:3055092759" 
            className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition-colors text-center"
          >
            Text or Call Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

