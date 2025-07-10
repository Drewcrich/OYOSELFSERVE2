import React from 'react';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Cookie size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Cookie Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Last Updated:</strong> July 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* What Are Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-600">
              Cookies help us understand how you use our website, remember your preferences, and improve your 
              experience when booking storage containers or browsing our services.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              OwnYourOwnStorage uses cookies for several purposes to enhance your experience on our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Essential Website Functions:</strong> Enable basic website features like navigation and secure areas</li>
              <li><strong>User Preferences:</strong> Remember your settings and preferences for future visits</li>
              <li><strong>Analytics:</strong> Understand how visitors use our website to improve our services</li>
              <li><strong>Performance:</strong> Monitor website performance and loading times</li>
              <li><strong>Security:</strong> Protect against fraud and ensure secure transactions</li>
              <li><strong>Customer Support:</strong> Enable our chatbot and support features to function properly</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Session Management:</strong> Keep you logged in during your visit</li>
                  <li><strong>Security:</strong> Protect against cross-site request forgery</li>
                  <li><strong>Load Balancing:</strong> Distribute website traffic efficiently</li>
                  <li><strong>Form Data:</strong> Remember information you've entered in forms</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Google Analytics:</strong> Track website usage and visitor behavior</li>
                  <li><strong>Page Views:</strong> Count how many people visit each page</li>
                  <li><strong>User Journey:</strong> Understand how users navigate our site</li>
                  <li><strong>Performance Metrics:</strong> Monitor website speed and functionality</li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Functional Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies enable enhanced functionality and personalization.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Chatbot Preferences:</strong> Remember your chat history and preferences</li>
                  <li><strong>Language Settings:</strong> Remember your preferred language</li>
                  <li><strong>Accessibility Settings:</strong> Remember accessibility preferences</li>
                  <li><strong>Form Auto-fill:</strong> Remember information for faster booking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              Some cookies on our website are set by third-party services that we use to enhance your experience:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Third-Party Services We Use:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-700">Google Analytics:</strong>
                    <span className="text-gray-600"> Helps us understand website usage and improve our services</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-700">JotForm:</strong>
                    <span className="text-gray-600"> Powers our booking forms and tour scheduling</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-700">Website Hosting:</strong>
                    <span className="text-gray-600"> Ensures fast and reliable website performance</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How Long Do Cookies Last?</h2>
            <p className="text-gray-600 mb-4">
              Different cookies have different lifespans:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-2 years)</li>
              <li><strong>Analytics Cookies:</strong> Usually expire after 2 years</li>
              <li><strong>Functional Cookies:</strong> May last from a few days to several years depending on their purpose</li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Settings size={24} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Managing Your Cookie Preferences</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              You have several options for managing cookies on our website:
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close your browser</li>
              <li>Set up notifications when cookies are being set</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Browser-Specific Instructions</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Impact of Disabling Cookies</h2>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-yellow-800 font-semibold mb-2">Important Notice:</p>
              <p className="text-yellow-700">
                Disabling cookies may affect your experience on our website and limit some functionality.
              </p>
            </div>

            <p className="text-gray-600 mb-4">
              If you choose to disable cookies, you may experience:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Difficulty booking tours or accessing certain features</li>
              <li>Need to re-enter information on each visit</li>
              <li>Limited functionality of our chatbot and support features</li>
              <li>Less personalized experience</li>
              <li>Potential issues with form submissions</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Eye size={24} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Your Rights Regarding Cookies</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Under various privacy laws, you have rights regarding how we use cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Right to Know:</strong> Understand what cookies we use and why</li>
              <li><strong>Right to Choose:</strong> Accept or decline non-essential cookies</li>
              <li><strong>Right to Delete:</strong> Request deletion of cookies and related data</li>
              <li><strong>Right to Object:</strong> Opt out of certain types of tracking</li>
              <li><strong>Right to Access:</strong> Request information about data collected through cookies</li>
            </ul>
          </section>

          {/* Updates to Cookie Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Updates to This Cookie Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, or legal requirements. When we make significant changes, we will:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Notify you of significant changes through our website</li>
              <li>Provide clear information about what has changed</li>
              <li>Give you the opportunity to review and accept new cookie practices</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About Cookies</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">OwnYourOwnStorage</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> drewcrichardson1999@gmail.com</p>
              <p className="text-gray-700"><strong>Address:</strong> 1502 Airport Road, Urbana, IL 61802</p>
            </div>
          </section>

          {/* Related Policies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Policies</h2>
            <p className="text-gray-600 mb-4">
              For more information about how we protect your privacy, please review our related policies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Privacy Policy:</strong> How we collect, use, and protect your personal information</li>
              <li><strong>Terms of Service:</strong> The terms governing your use of our website and services</li>
              <li><strong>Accessibility Statement:</strong> Our commitment to making our website accessible to all users</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;

