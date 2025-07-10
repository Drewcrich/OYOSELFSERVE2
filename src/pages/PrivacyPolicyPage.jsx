import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Last Updated:</strong> July 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Company Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Company Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">OwnYourOwnStorage</p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>1502 Airport Road, Urbana, IL 61802</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Mail size={16} className="mr-2" />
                <span>drewcrichardson1999@gmail.com</span>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Booking Information:</strong> Preferred tour dates and times</li>
              <li><strong>Rental Information:</strong> Lease agreements, payment information, emergency contacts</li>
              <li><strong>Communication Records:</strong> Text messages, emails, and phone call records</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Website Usage:</strong> Pages visited, time spent, browser type, device information</li>
              <li><strong>IP Address:</strong> For security and analytics purposes</li>
              <li><strong>Cookies:</strong> To improve website functionality and user experience</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process tour bookings and rental applications</li>
              <li>Send booking confirmations and container access information</li>
              <li>Process payments and manage rental accounts</li>
              <li>Communicate about your storage rental and account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Share Your Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Service Providers</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>JotForm:</strong> For processing booking forms and collecting tour requests</li>
              <li><strong>Rent Manager:</strong> For payment processing and rental account management</li>
              <li><strong>Email Services:</strong> For sending confirmations and communications</li>
              <li><strong>Website Hosting:</strong> For maintaining our online presence</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Legal Requirements</h3>
            <p className="text-gray-600 mb-4">
              We may disclose your information when required by law, court order, or government request, 
              or to protect our rights, property, or safety.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Business Transfers</h3>
            <p className="text-gray-600 mb-4">
              If our business is sold or merged, your information may be transferred to the new owner 
              as part of the transaction.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Secure data transmission using SSL encryption</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
              <li>Secure payment processing through trusted providers</li>
              <li>Physical security measures at our storage facility</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide our storage services to you</li>
              <li>Comply with legal obligations (typically 7 years for business records)</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
              <li><strong>Correct:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from promotional communications</li>
              <li><strong>Restrict:</strong> Request limitation of how we use your information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
            </ul>
            <p className="text-gray-600">
              To exercise these rights, contact us at drewcrichardson1999@gmail.com.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and user experience</li>
              <li>Provide relevant advertising (if applicable)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can control cookies through your browser settings, but some website features may not work properly if cookies are disabled.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites (such as payment processors or mapping services). 
              We are not responsible for the privacy practices of these external sites. We encourage you to review 
              their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
              personal information from children under 18. If we become aware that we have collected such information, 
              we will take steps to delete it promptly.
            </p>
          </section>

          {/* Illinois-Specific Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Illinois Residents</h2>
            <p className="text-gray-600 mb-4">
              Illinois residents have additional rights under state privacy laws:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to know what personal information is collected and how it's used</li>
              <li>Right to request deletion of personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of significant changes by posting the updated policy on our website and updating the 
              "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-700 mb-2">
                <Mail size={16} className="mr-2 text-green-500" />
                <span><strong>Email:</strong> drewcrichardson1999@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={16} className="mr-2 text-green-500" />
                <span><strong>Address:</strong> 1502 Airport Road, Urbana, IL 61802</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

