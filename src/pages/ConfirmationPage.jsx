import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MessageSquare, MapPin, Clock } from 'lucide-react';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎉 Tour Booked Successfully!
          </h1>
          <p className="text-xl text-gray-600">
            Check your email and phone for container details
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email Confirmation</h3>
                <p className="text-gray-600">You'll receive an email confirmation immediately</p>
                <p className="text-sm text-green-600 font-semibold">✅ Sent instantly</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Container Details via Text</h3>
                <p className="text-gray-600">We'll text you:</p>
                <ul className="text-sm text-gray-600 ml-4 mt-1">
                  <li>• Container photo and exact location</li>
                  <li>• Container number</li>
                  <li>• Lock combination</li>
                  <li>• Facility address: 1502 Airport Road, Urbana IL</li>
                </ul>
                <p className="text-sm text-blue-600 font-semibold">📱 Within 30 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Self-Guided Tour</h3>
                <p className="text-gray-600">Visit at your convenience, 24/7</p>
                <ul className="text-sm text-gray-600 ml-4 mt-1">
                  <li>• Use the combination to open the container</li>
                  <li>• Take your time inspecting the space</li>
                  <li>• 320 sq ft - fits contents of 3-4 bedroom home</li>
                </ul>
                <p className="text-sm text-purple-600 font-semibold">⏱️ 5-10 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Rent Online (If You Love It)</h3>
                <p className="text-gray-600">Complete the rental process from your phone:</p>
                <ul className="text-sm text-gray-600 ml-4 mt-1">
                  <li>• Electronic lease via DocuSign</li>
                  <li>• Secure payment setup via Rent Manager</li>
                  <li>• Get permanent access codes</li>
                </ul>
                <p className="text-sm text-orange-600 font-semibold">📝 5-8 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <MapPin size={24} className="text-blue-600 mr-2" />
              <h3 className="font-bold text-blue-800">Facility Location</h3>
            </div>
            <p className="text-blue-700 font-semibold">1502 Airport Road, Urbana IL 61802</p>
            <p className="text-blue-600 text-sm mt-1">
              Easy parking • Drive right up to your container
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <Clock size={24} className="text-green-600 mr-2" />
              <h3 className="font-bold text-green-800">Tour Hours</h3>
            </div>
            <p className="text-green-700 font-semibold">Available 24/7</p>
            <p className="text-green-600 text-sm mt-1">
              Self-service means tour anytime that works for you
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <MessageSquare size={24} className="text-yellow-600 mr-2" />
            <h3 className="font-bold text-yellow-800">Questions or Need Help?</h3>
          </div>
          <p className="text-yellow-700 mb-2">
            Contact us anytime for assistance:
          </p>
          <p className="text-yellow-700">
            📧 <strong>Drewcrichardson1999@gmail.com</strong>
          </p>
          <p className="text-yellow-600 text-sm mt-1">
            We typically respond within 1 hour during business hours
          </p>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <button 
            onClick={() => navigate('/')}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors mr-4"
          >
            Return to Homepage
          </button>
          <button 
            onClick={() => navigate('/rental-setup')}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            Learn About Payment Setup
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Didn't receive your confirmation? Check your spam folder or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

