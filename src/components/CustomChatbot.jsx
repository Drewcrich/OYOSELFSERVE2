import React, { useState, useRef, useEffect } from 'react';

const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I\'m here to help answer questions about Own Your Own Storage. Ask me about pricing, container sizes, lease terms, or anything else!',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Q&A Database
  const qaDatabase = [
    // Pricing Questions
    {
      keywords: ['price', 'cost', 'rates', 'how much', 'pricing', 'expensive', 'cheap'],
      answer: 'Our Grand Opening pricing: $95/month for month-to-month or $75/month with 6-month prepay (save $120!). All containers are 320 square feet with complete weather protection, 24/7 access, and drive-up convenience.'
    },
    {
      keywords: ['special', 'discount', 'deal', 'promotion', 'save'],
      answer: 'Yes! We have Grand Opening Special pricing: Pay 6 months upfront for just $450 total (normally $570) and save $120! This is our best value plan.'
    },
    {
      keywords: ['deposit', 'security deposit'],
      answer: 'The security deposit is $145.00, which is refundable within 30 days after your lease ends, less any deductions for damage, cleaning, or unpaid rent.'
    },
    {
      keywords: ['payment', 'pay rent', 'due date', 'when due'],
      answer: 'Rent is due on the 1st day of each month. There\'s a $25 late fee if payment isn\'t received within 15 days. You can pay online (free), set up auto-pay (free), pay cash at Walmart ($4 fee), or use debit/credit card online (4% fee).'
    },

    // Size & Container Questions
    {
      keywords: ['size', 'dimensions', 'how big', 'square feet', 'feet', 'container size'],
      answer: 'All our containers are 40 feet long, 8 feet wide, and 10 feet tall. That\'s 320 square feet - enough space for a 3-4 bedroom home\'s belongings!'
    },
    {
      keywords: ['included', 'features', 'what comes with'],
      answer: 'Every rental includes: 320 sq ft secure container, complete weather protection, 24/7 access, drive-up convenience, heavy-duty steel construction with secure locks, and your personal access code.'
    },

    // Access & Hours
    {
      keywords: ['hours', 'access', 'open', 'when', '24/7', 'time'],
      answer: 'Yes! 24 hours a day, 7 days a week access. Drive right up to your container whenever you need something - no office hours to worry about!'
    },
    {
      keywords: ['access code', 'how to access', 'get in'],
      answer: 'You\'ll receive your personal access code via text message within 30 minutes of booking. Use this code anytime for 24/7 access to your container.'
    },

    // Location
    {
      keywords: ['location', 'address', 'where', 'directions', 'find you'],
      answer: 'We\'re located at 1502 Airport Road, Urbana IL 61802. Easy to find location near University of Illinois with convenient drive-up access.'
    },
    {
      keywords: ['university of illinois', 'u of i', 'uiuc', 'campus', 'student'],
      answer: 'Yes! We\'re perfectly located near University of Illinois campus. We specialize in student storage for dorm furniture, textbooks, and belongings during summer break or semester abroad.'
    },

    // Booking Process
    {
      keywords: ['book', 'rent', 'how to', 'process', 'steps'],
      answer: 'Simple 4-step process: 1) Book online in 1 minute, 2) Get text message within 30 minutes with container location and access code, 3) Visit container and inspect it, 4) If you like it, complete rental online and start using it!'
    },
    {
      keywords: ['after booking', 'what happens', 'confirmation'],
      answer: 'You\'ll get an email confirmation right away, then a text message within 30 minutes with your container location and access code. The tour is free - you only pay if you decide to rent after seeing the container.'
    },
    {
      keywords: ['don\'t like', 'cancel', 'free tour', 'obligation'],
      answer: 'No problem! The tour is completely free. You only pay if you decide to rent after seeing the container. No obligation whatsoever.'
    },

    // Rules & Storage
    {
      keywords: ['store', 'allowed', 'restrictions', 'rules', 'prohibited'],
      answer: 'You can use the container for lawful storage only. No hazardous, flammable, or illegal substances are allowed. You must keep the container securely closed and locked at all times.'
    },
    {
      keywords: ['secure', 'security', 'safe', 'locks'],
      answer: 'Yes! Heavy-duty steel construction with secure locks. Only you have your unique access code. Our containers provide complete weather protection for your belongings.'
    },

    // Lease Terms
    {
      keywords: ['lease', 'term', 'how long', 'contract'],
      answer: 'We offer 6-month lease terms. This gives you flexibility while ensuring you get our best pricing.'
    },

    // Contact
    {
      keywords: ['contact', 'phone', 'email', 'call', 'reach'],
      answer: 'You can contact us at: Drew Richardson (drewcrichardson1999@gmail.com), Quinn Richardson (quinnarichardson@gmail.com), or visit www.willowspringsurbana.com'
    },

    // Business Storage
    {
      keywords: ['business', 'inventory', 'commercial', 'company'],
      answer: 'Absolutely! Secure business inventory storage perfect for excess stock, seasonal items, equipment, supplies, and document archiving with 24/7 business access.'
    },

    // Moving Storage
    {
      keywords: ['moving', 'temporary', 'between homes', 'renovation'],
      answer: 'Yes! Temporary storage during your move to or from Urbana. Perfect for storing belongings between homes, during renovations, or while house hunting.'
    },

    // Insurance
    {
      keywords: ['insurance', 'coverage', 'protection', 'liable'],
      answer: 'We recommend you carry insurance to cover your stored property. The lessor is not an insurer of your property and is not liable for accidents, injuries, or damages on the premises.'
    }
  ];

  const findBestAnswer = (userInput) => {
    const input = userInput.toLowerCase();
    let bestMatch = null;
    let maxMatches = 0;

    for (const qa of qaDatabase) {
      const matches = qa.keywords.filter(keyword => input.includes(keyword.toLowerCase())).length;
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = qa;
      }
    }

    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }

    // Default response for unmatched questions
    return 'I\'d be happy to help! For specific questions I haven\'t covered, please contact us directly at drewcrichardson1999@gmail.com. You can also book a free tour online to see our containers in person!';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    // Get bot response
    const botResponse = {
      type: 'bot',
      text: findBestAnswer(inputText),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'What are your prices?',
    'How big are the containers?',
    'What are your hours?',
    'Where are you located?',
    'How do I book?'
  ];

  const handleQuickQuestion = (question) => {
    setInputText(question);
    // Auto-send the quick question
    setTimeout(() => {
      const userMessage = {
        type: 'user',
        text: question,
        timestamp: new Date()
      };
      const botResponse = {
        type: 'bot',
        text: findBestAnswer(question),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage, botResponse]);
    }, 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Own Your Own Storage</h3>
              <p className="text-sm opacity-90">Ask me anything!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded border text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about pricing, sizes, hours..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomChatbot;

