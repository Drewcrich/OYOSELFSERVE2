import React from 'react';

const ProgressTracker = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, title: 'Book Tour', description: 'Complete booking form' },
    { number: 2, title: 'Receive Details', description: 'Get container information' },
    { number: 3, title: 'Tour Container', description: 'Self-guided inspection' },
    { number: 4, title: 'Complete Rental', description: 'Sign lease & setup payment' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        Your Progress
      </h2>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
          <div 
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;
            const isPending = step.number > currentStep;
            
            return (
              <div key={step.number} className="flex flex-col items-center">
                {/* Step Circle */}
                <div className={`
                  relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                  ${isCompleted ? 'bg-green-500 text-white' : ''}
                  ${isCurrent ? 'bg-green-500 text-white ring-4 ring-green-200' : ''}
                  ${isPending ? 'bg-gray-200 text-gray-600' : ''}
                  transition-all duration-300
                `}>
                  {isCompleted ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                
                {/* Step Info */}
                <div className="mt-3 text-center max-w-24">
                  <div className={`
                    font-medium text-sm
                    ${isCompleted || isCurrent ? 'text-green-600' : 'text-gray-500'}
                  `}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Current Step Info */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center">
          <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
            {currentStep}
          </div>
          <div>
            <p className="font-medium text-green-700">
              Current Step: {steps[currentStep - 1]?.title}
            </p>
            <p className="text-sm text-green-600">
              {currentStep === 1 && "Complete the booking form to get started"}
              {currentStep === 2 && "Check your phone for container details"}
              {currentStep === 3 && "Visit your container at your convenience"}
              {currentStep === 4 && "Complete the rental process online"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;

