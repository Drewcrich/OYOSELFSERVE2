import React from 'react';
import { Eye, Heart, Mail, MapPin } from 'lucide-react';

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Eye size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Accessibility Statement</h1>
          </div>
          <p className="text-lg text-gray-600">
            OwnYourOwnStorage is committed to ensuring digital accessibility for people with disabilities.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Last Updated:</strong> July 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Commitment Statement */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Heart size={24} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
            </div>
            <p className="text-gray-600 mb-4">
              OwnYourOwnStorage is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone, and applying the relevant 
              accessibility standards to ensure we provide equal access to all of our users.
            </p>
            <p className="text-gray-600">
              We believe that everyone should be able to access information about our storage services, 
              book tours, and manage their rentals regardless of their abilities or the technologies they use.
            </p>
          </section>

          {/* Standards and Guidelines */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Accessibility Standards</h2>
            <p className="text-gray-600 mb-4">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. 
              These guidelines explain how to make web content more accessible for people with disabilities, 
              and user friendly for everyone.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Key Accessibility Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using keyboard navigation</li>
              <li><strong>Screen Reader Compatibility:</strong> Proper heading structure and alt text for images</li>
              <li><strong>Color Contrast:</strong> High contrast ratios for text and background colors</li>
              <li><strong>Responsive Design:</strong> Website works on all devices and screen sizes</li>
              <li><strong>Clear Language:</strong> Simple, easy-to-understand content and instructions</li>
              <li><strong>Consistent Navigation:</strong> Predictable and consistent website structure</li>
              <li><strong>Form Labels:</strong> Clear labels and instructions for all form fields</li>
              <li><strong>Focus Indicators:</strong> Visible focus indicators for keyboard users</li>
            </ul>
          </section>

          {/* Assistive Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Assistive Technology Compatibility</h2>
            <p className="text-gray-600 mb-4">
              Our website is designed to be compatible with assistive technologies, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver, and other screen reading software</li>
              <li><strong>Voice Recognition Software:</strong> Dragon NaturallySpeaking and similar programs</li>
              <li><strong>Keyboard Navigation:</strong> For users who cannot use a mouse</li>
              <li><strong>Browser Zoom:</strong> Content remains functional when zoomed up to 200%</li>
              <li><strong>High Contrast Mode:</strong> Compatible with operating system high contrast settings</li>
            </ul>
          </section>

          {/* Current Efforts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Accessibility Efforts</h2>
            <p className="text-gray-600 mb-4">
              We are continuously working to improve the accessibility of our website. Our current efforts include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Regular accessibility audits and testing with assistive technologies</li>
              <li>Staff training on accessibility best practices and inclusive design</li>
              <li>User testing with people who use assistive technologies</li>
              <li>Ongoing code reviews to ensure accessibility standards are maintained</li>
              <li>Regular updates to improve accessibility features and fix any issues</li>
            </ul>
          </section>

          {/* Known Limitations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Known Limitations</h2>
            <p className="text-gray-600 mb-4">
              While we strive for full accessibility, we acknowledge that some areas may still need improvement:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Some third-party embedded content (maps, forms) may have limited accessibility features</li>
              <li>Certain interactive elements are being continuously improved for better accessibility</li>
              <li>We are working to ensure all images have appropriate alternative text descriptions</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We are actively working to address these limitations and welcome feedback to help us improve.
            </p>
          </section>

          {/* Alternative Access Methods */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Alternative Access Methods</h2>
            <p className="text-gray-600 mb-4">
              If you encounter accessibility barriers on our website, we offer alternative ways to access our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Email Support:</strong> Contact us directly for assistance with bookings or questions</li>
              <li><strong>Phone Assistance:</strong> We can help you complete any online processes over the phone</li>
              <li><strong>In-Person Support:</strong> Visit our facility for personalized assistance</li>
              <li><strong>Document Formats:</strong> We can provide information in alternative formats upon request</li>
            </ul>
          </section>

          {/* Feedback and Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Accessibility Feedback</h2>
            <p className="text-gray-600 mb-4">
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter 
              accessibility barriers or have suggestions for improvement:
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us About Accessibility</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Mail size={16} className="mr-2 text-green-500" />
                  <span><strong>Email:</strong> drewcrichardson1999@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={16} className="mr-2 text-green-500" />
                  <span><strong>Address:</strong> 1502 Airport Road, Urbana, IL 61802</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              When contacting us about accessibility, please include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li>The specific page or feature you're having trouble with</li>
              <li>The assistive technology you're using (if applicable)</li>
              <li>A description of the problem you encountered</li>
              <li>Your contact information so we can follow up</li>
            </ul>
          </section>

          {/* Response Commitment */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Response Commitment</h2>
            <p className="text-gray-600 mb-4">
              We take accessibility feedback seriously and are committed to responding promptly:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Initial Response:</strong> We will acknowledge your feedback within 2 business days</li>
              <li><strong>Investigation:</strong> We will investigate accessibility issues within 5 business days</li>
              <li><strong>Resolution:</strong> We will work to resolve issues as quickly as possible</li>
              <li><strong>Updates:</strong> We will keep you informed of our progress on addressing your concerns</li>
            </ul>
          </section>

          {/* Legal Framework */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Framework</h2>
            <p className="text-gray-600 mb-4">
              This accessibility statement is aligned with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Americans with Disabilities Act (ADA)</strong> - Federal civil rights law</li>
              <li><strong>Section 508</strong> - Federal accessibility standards</li>
              <li><strong>WCAG 2.1 AA</strong> - International accessibility guidelines</li>
              <li><strong>Illinois Accessibility Laws</strong> - State-specific requirements</li>
            </ul>
          </section>

          {/* Updates and Maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Statement Updates</h2>
            <p className="text-gray-600">
              This accessibility statement will be reviewed and updated regularly to reflect our ongoing 
              efforts to improve accessibility. We will update this statement whenever we make significant 
              changes to our website or accessibility features.
            </p>
          </section>

          {/* Additional Resources */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
            <p className="text-gray-600 mb-4">
              For more information about web accessibility, you may find these resources helpful:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Web Content Accessibility Guidelines (WCAG):</strong> International standards for web accessibility</li>
              <li><strong>ADA.gov:</strong> Official information about the Americans with Disabilities Act</li>
              <li><strong>WebAIM:</strong> Web accessibility resources and tools</li>
              <li><strong>Illinois Department of Human Rights:</strong> State accessibility resources</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;

