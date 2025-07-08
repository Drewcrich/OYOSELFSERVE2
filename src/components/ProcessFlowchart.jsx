import React from 'react';

const ProcessFlowchart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Why Choose Self-Service Storage?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Storage */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-700 mb-4 text-center">
            Traditional Storage Rental
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</div>
              <div>
                <p className="font-medium">Visit Office</p>
                <p className="text-sm text-gray-600">Drive to facility during business hours</p>
                <p className="text-xs text-red-600">⏱️ 30+ minutes travel time</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</div>
              <div>
                <p className="font-medium">Wait in Line</p>
                <p className="text-sm text-gray-600">Wait for staff availability</p>
                <p className="text-xs text-red-600">⏱️ 10-20 minutes waiting</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</div>
              <div>
                <p className="font-medium">Paperwork</p>
                <p className="text-sm text-gray-600">Fill out forms, provide ID, credit check</p>
                <p className="text-xs text-red-600">⏱️ 15-30 minutes paperwork</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</div>
              <div>
                <p className="font-medium">Tour with Staff</p>
                <p className="text-sm text-gray-600">Guided tour during business hours only</p>
                <p className="text-xs text-red-600">⏱️ 10-15 minutes tour</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</div>
              <div>
                <p className="font-medium">Payment Setup</p>
                <p className="text-sm text-gray-600">More paperwork, payment processing</p>
                <p className="text-xs text-red-600">⏱️ 10-15 minutes setup</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-red-100 rounded-lg">
            <p className="text-center font-bold text-red-700">Total Time: 75-120 minutes</p>
            <p className="text-center text-sm text-red-600">Plus travel time and scheduling constraints</p>
          </div>
        </div>
        
        {/* Our Self-Service Process */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
            Our Self-Service Process
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</div>
              <div>
                <p className="font-medium">Book Online</p>
                <p className="text-sm text-gray-600">1-minute booking form from anywhere</p>
                <p className="text-xs text-green-600">⏱️ 1 minute</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</div>
              <div>
                <p className="font-medium">Get Details</p>
                <p className="text-sm text-gray-600">Receive container info via text</p>
                <p className="text-xs text-green-600">⏱️ Within 30 minutes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</div>
              <div>
                <p className="font-medium">Self-Guided Tour</p>
                <p className="text-sm text-gray-600">Tour at your convenience, 24/7</p>
                <p className="text-xs text-green-600">⏱️ 5-10 minutes</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</div>
              <div>
                <p className="font-medium">Rent Online</p>
                <p className="text-sm text-gray-600">Electronic lease and payment setup</p>
                <p className="text-xs text-green-600">⏱️ 5-8 minutes</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <p className="text-center font-bold text-green-700">Total Time: 11-19 minutes</p>
            <p className="text-center text-sm text-green-600">No travel required, available 24/7</p>
          </div>
        </div>
      </div>
      
      {/* Benefits Summary */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          Save Time, Save Hassle
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">80%</div>
            <p className="text-sm text-blue-700">Less Time Required</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <p className="text-sm text-blue-700">Available Anytime</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">0</div>
            <p className="text-sm text-blue-700">Office Visits Needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowchart;

