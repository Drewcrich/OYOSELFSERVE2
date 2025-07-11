import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmedPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Tour Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for booking a tour with OwnYourOwnStorage. We're excited to show you our secure storage containers!
          </p>
        </div>

        {/* Confirmation Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email Confirmation</h3>
                <p className="text-gray-600">You'll receive a confirmation email within the next few minutes with your tour details.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Personal Contact</h3>
                <p className="text-gray-600">We'll reach out to you within 24 hours to schedule your personalized tour.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tour Experience</h3>
                <p className="text-gray-600">See our 320 sq ft containers, security features, and 24/7 access system in person.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Easy Booking</h3>
                <p className="text-gray-600">If you love what you see, we can get you set up with a container right away!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions? We're Here to Help!</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:drewcrichardson1999@gmail.com" className="text-green-600 hover:text-green-700">
                  drewcrichardson1999@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Location</h3>
              <p className="text-gray-600">
                1502 Airport Road<br />
                Urbana, IL 61802
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">While You Wait...</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Review Our Pricing
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
            >
              Learn More About Us
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied customers in Urbana!</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">Trusted by University of Illinois students and local businesses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmedPage;

