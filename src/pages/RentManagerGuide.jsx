import React, { useEffect } from 'react';

const RentManagerGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Payment Setup Guide
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Complete your storage rental in just 5 minutes with our secure payment portal
          </p>
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Create Account</h3>
              <p className="text-sm text-gray-600">Set up your secure account with basic information</p>
              <p className="text-xs text-green-600 mt-1">~2 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Enter Payment Info</h3>
              <p className="text-sm text-gray-600">Securely add your banking information</p>
              <p className="text-xs text-green-600 mt-1">~2 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Confirm Details</h3>
              <p className="text-sm text-gray-600">Review and confirm your rental setup</p>
              <p className="text-xs text-green-600 mt-1">~1 minute</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Step-by-Step Instructions
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Step 1: Account Creation
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>What you'll see:</strong> A simple account creation form
                </p>
                <p className="text-sm text-gray-600">
                  <strong>What to enter:</strong> Use the same email address you've been using for communication
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Click "Create New Account" when you arrive at the portal</li>
                <li>Enter your email address (use the same one from your booking)</li>
                <li>Create a secure password</li>
                <li>Verify your email if prompted</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Step 2: Banking Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>What you'll need:</strong> Your bank account and routing numbers
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Why we need this:</strong> To set up automatic monthly payments (no more late fees!)
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Navigate to the "Payment Methods" section</li>
                <li>Select "Bank Account" as your payment method</li>
                <li>Enter your bank routing number (9 digits)</li>
                <li>Enter your account number</li>
                <li>Verify the information is correct</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Step 3: Confirmation
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Final step:</strong> Review your rental details and payment setup
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Review your container assignment</li>
                <li>Confirm your payment method</li>
                <li>Set your preferred payment date</li>
                <li>Submit to complete your rental setup</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Why do I need to create an account?
              </h3>
              <p className="text-gray-600">
                Your Rent Manager account allows you to manage your rental, view payment history, 
                update payment methods, and access important documents - all in one secure place.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Is my banking information secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. Rent Manager uses bank-level encryption and security protocols. 
                Your financial information is protected by the same standards used by major banks 
                and is never stored in an unencrypted format.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                What if I want to change payment methods later?
              </h3>
              <p className="text-gray-600">
                You can easily update your payment method anytime by logging into your Rent Manager 
                account. Changes take effect for your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Who do I contact if I have problems?
              </h3>
              <p className="text-gray-600">
                If you encounter any issues during setup, contact us immediately at 
                3055092759. We're here to help you 
                complete the process smoothly.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Will I get a receipt for payments?
              </h3>
              <p className="text-gray-600">
                Yes! You'll receive email receipts for all payments, and you can view your 
                complete payment history anytime in your Rent Manager account.
              </p>
            </div>
          </div>
        </div>

        {/* Security Assurances */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Security & Privacy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Industry-Leading Security
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  256-bit SSL encryption
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  PCI DSS compliant
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  SOC 2 Type II certified
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Regular security audits
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Your Privacy Matters
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  No data sharing with third parties
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  GDPR compliant
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Transparent privacy policy
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  You control your data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-green-500 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Need Help?
          </h2>
          <p className="text-center mb-6">
            Our support team is here to assist you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:3055092759"
              className="bg-white text-green-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentManagerGuide;

