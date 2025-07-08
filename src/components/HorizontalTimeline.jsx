import React from 'react';

const HorizontalTimeline = () => {
  const steps = [
    {
      icon: '✉️',
      title: 'Instant Confirmation',
      description: 'Confirmation sent to your email immediately after booking',
      time: 'Instant'
    },
    {
      icon: '📱',
      title: 'Container Details',
      description: 'We\'ll text you exact container location (with photo), container number, and lock combination',
      time: 'Within 30 minutes'
    },
    {
      icon: '🔑',
      title: 'Self-Guided Tour',
      description: 'Visit and inspect your container at your convenience',
      time: 'At your scheduled time'
    },
    {
      icon: '📝',
      title: 'Easy Rental',
      description: 'If you love it, complete the rental process online',
      time: 'Same day if desired'
    }
  ];

  return (
    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">What happens next?</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center text-center relative">
            <div className="text-4xl mb-2">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
            <p className="mb-2 text-sm">{step.description}</p>
            <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              {step.time}
            </span>
            
            {/* Connector line between steps (hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-2 top-8 w-4 h-0.5 bg-white"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;

