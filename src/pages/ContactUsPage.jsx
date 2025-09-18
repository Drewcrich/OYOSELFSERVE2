import React from 'react';
import { Phone, FileText, Info } from 'lucide-react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border-2 border-yellow-400">
        <h1 className="text-4xl font-black text-yellow-400 mb-8 text-center uppercase tracking-wide">
          Contact Us
        </h1>

        <div className="space-y-8">
          {/* In-Person Tour Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-orange-500 shadow-md">
            <div className="flex items-center mb-4">
              <Phone size={28} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Container Tours</h2>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              If you are interested in an **in-person tour of your specific container**, please **text or call** us at the number below.
              We'll be happy to schedule a time to show you your individual storage container.
            </p>
            <p className="text-3xl font-black text-yellow-400 text-center mb-2">
              3055092759
            </p>
            <p className="text-gray-400 text-center text-sm">
              (Text or Call for Container Tour Scheduling)
            </p>
          </div>

          {/* Self-Tour Section */}
          <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-green-500 shadow-md">
            <div className="flex items-center mb-4">
              <FileText size={28} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Container Access</h2>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              For **self-guided access to your specific container** and to get immediate access details, please fill out our secure JotForm. 
              You will receive instructions and access codes for your individual storage container directly after submission.
            </p>
            <div className="text-center">
              <a 
                href="https://form.jotform.com/251895754464067?redirect=https://8080-i8rv3yhtvk3x8fwr04iix-3e0318a4.manusvm.computer/booking-confirmed" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors duration-200 shadow-lg"
              >
                Get Container Access Details
              </a>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-red-800 bg-opacity-30 p-6 rounded-lg border-l-4 border-red-500 shadow-md">
            <div className="flex items-center mb-4">
              <Info size={28} className="text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Important Disclaimer</h2>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Please note that we are **not affiliated with "OwnYourOwnStorage"**. 
              Do not contact their office for inquiries related to our container rentals. 
              All communication regarding **RentYourOwnStorage** should be directed to the contact options provided above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;


